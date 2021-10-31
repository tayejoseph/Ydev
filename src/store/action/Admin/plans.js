import { message } from 'antd'
import { adminTypes } from '../../types'
import { axios, handleError } from '../../../lib'

const altPlanData = (data) => ({
  type: adminTypes.altPlanData,
  data,
})

const altPlanPayablePeriod = (data) => ({
  type: adminTypes.altPlanPayablePeroid,
  data,
})

export const getPlans = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get('/api/v1/admin/plan/all')
    if (status === 200) {
      dispatch(altPlanData(response.data))
    }
    return
  } catch ({ response }) {
    handleError(response)
  }
}

export const getPayablePeriod = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/plan/payable-periods',
    )
    if (status === 200) {
      dispatch(altPlanPayablePeriod(response))
    }
    return
  } catch ({ response }) {
    handleError(response)
  }
}

export const altPlanTenure = ({ id, ...data }, action) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } =
      action === 'add'
        ? await axios.post('/api/v1/admin/plan/tenure/create', data)
        : await axios.post(`/api/v1/admin/plan/tenure/update/${id}`, {
            id,
            ...data,
          })

    if (status === 200) {
      await dispatch(getPlans())
      message.success(response.details)
      return {
        success: true,
      }
    }
    return
  } catch ({ response }) {
    handleError(response)
  }
}

export const altPlanSwitch = (action, type, { id }) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } = action
      ? await axios.post(`/api/v1/admin/plan/enable-type/${id}`, { type })
      : await axios.post(`/api/v1/admin/plan/disable-type/${id}`, { type })
    if (status === 200) {
      await dispatch(getPlans())
      message.success(response.details)
      return
      // dispatch(altPlanPayablePeriod(response.data))
    }
    return
  } catch ({ response }) {
    handleError(response)
  }
}

export const altPenaltySwitch = (action, type, { id }) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } = action
      ? await axios.post(`/api/v1/admin/plan/enable-penalty/${id}`, { type })
      : await axios.post(`/api/v1/admin/plan/disable-penalty/${id}`, { type })
    if (status === 200) {
      await dispatch(getPlans())
      message.success(response.details)
      return
    }
    return
  } catch ({ response }) {
    handleError(response)
  }
}

export const altPenaltyAmount = (data, { id }) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } = await axios.post(
      `/api/v1/admin/plan/set-penalty-amount/${id}`,
      data,
    )
    if (status === 200) {
      await dispatch(getPlans())
      message.success(response.details)
      return { success: true }
    }
    return
  } catch ({ response }) {
    handleError(response)
  }
}

export const altPlans = ({ id, ...formData }, actionType) => async (
  dispatch,
  getState,
) => {
  try {
    let errorMsg = ''
    const { status, data: response } =
      actionType === 'add'
        ? await axios.post('/api/v1/admin/plan/create', formData)
        : await axios.post(`/api/v1/admin/plan/update/${id}`, formData)
    if (status === 200) {
      if (response.status === 'fail' && response.error) {
        Object.keys(response.error).map((item) => {
          errorMsg = `${errorMsg} ${response.error[item]}`
        })
        message.error(errorMsg)
        return
      } else {
        await dispatch(getPlans())
        message.success(response.details)
        return {
          success: true,
        }
      }
    }
  } catch ({ response }) {
    handleError(response)
  }
}
