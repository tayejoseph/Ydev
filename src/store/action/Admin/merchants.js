import { message } from 'antd'
import { adminTypes } from '../../types'
import { axios, handleError } from '../../../lib'

const altMerchantData = (data) => ({
  type: adminTypes.altMerchantData,
  data,
})

export const getMerchantDetails = (merchantId) => {
  return axios.get(`/api/v1/admin/merchants/details/${merchantId}`)
}

export const getMerchantsData = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/merchants/all',
    )
    if (status === 200) {
      dispatch(altMerchantData(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const altMerchant = ({ id, ...formData }, actionType) => async (
  dispatch,
  getState,
) => {
  try {
    let errorMsg = ''
    const { status, data: response } =
      actionType === 'add'
        ? await axios.post('/api/v1/admin/merchants/create', formData)
        : await axios.post(`/api/v1/admin/users/update/${id}`, {
            id,
            ...formData,
          })
    if (status === 200) {
      if (response.status === 'fail' && response.error) {
        Object.keys(response.error).map((item) => {
          errorMsg = `${errorMsg} ${response.error[item]}`
        })
        message.error(errorMsg)
        return
      } else {
        await dispatch(getMerchantsData())
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

export const altBanUsers = ({ id }, actionType) => async (
  dispatch,
  getState,
) => {
  try {
    const { status, data: response } =
      actionType === 'ban'
        ? await axios.post(`/api/v1/admin/users/ban/${id}`)
        : await axios.post(`/api/v1/admin/users/un-ban/${id}`)
    if (status === 200) {
      await dispatch(getMerchantsData())
      message.success(response.details)
      return {
        success: true,
      }
    }
    return {
      success: false,
    }
  } catch ({ response }) {
    handleError(response)
  }
}
