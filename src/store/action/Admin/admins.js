import { message } from 'antd'
import { adminTypes } from '../../types'
import { axios, handleError } from '../../../lib'

const altAdminsData = (data) => ({
  type: adminTypes.altAdminsData,
  data,
})

const altPermissionData = (data) => ({
  type: adminTypes.altPermissionData,
  data,
})

export const getAdmins = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/admins/all',
    )
    if (status === 200) {
      dispatch(altAdminsData(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getPermission = () => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/roles/permissions',
    )
    if (status === 200) {
      dispatch(altPermissionData(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const addAdmin = (data) => async (dispatch) => {
  try {
    const { status, data: response } = await axios.post(
      '/api/v1/admin/admins/create',
      data,
    )
    if (status === 200) {
      await dispatch(getAdmins())
      message.success(response.details)
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getAdminDetails = async (id) => {
  try {
    return await axios.get(`/api/v1/admin/admins/details/${id}`)
  } catch ({ response }) {
    handleError(response)
  }
}
