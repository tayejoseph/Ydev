import { axios, handleError } from '../../../lib'
import { adminTypes } from '../../types'

const altRoles = (data) => ({
  type: adminTypes.altRoleData,
  data,
})

const altBorrowers = (data) => ({
  type: adminTypes.altBorrowersData,
  data,
})

export const getRoles = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/roles/all',
    )
    if (status === 200) {
      dispatch(altRoles(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getBorrowers = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/users/borrowers',
    )
    if (status === 200) {
      dispatch(altBorrowers(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}
