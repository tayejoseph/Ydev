import { message } from 'antd'
import Cookies from 'js-cookie'
import { handleError, axios } from '../../lib'
import { userTypes } from '../types'
import { getUsers, getRoles, getPlans, getCredits } from '../action'

export const altAuthState = (data) => ({
  type: userTypes.altAuthState,
  data,
})

export const altUserDetails = (data) => ({
  type: userTypes.altUserDetails,
  data,
})

export const logOutHander = () => ({
  type: userTypes.clearState,
})

export const getUserDetails = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.get(
      '/api/v1/auth/user',
    )
    if (status === 200) {
      dispatch(altUserDetails(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const handleSignIn = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response, ...rest } = await axios.post(
      '/api/v1/auth/auth',
      data,
    )

    if (status === 200) {
      Cookies.set('token', response.token)
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.token}`
      await dispatch(getUserDetails())
      await dispatch(getRoles())
      message.success(response.details)
      Promise.all([
        dispatch(getUsers(), dispatch(getPlans()), dispatch(getCredits())),
      ])
      dispatch(altAuthState(true))
    } else {
    }
  } catch ({ response }) {
    handleError(response)
  }
}
