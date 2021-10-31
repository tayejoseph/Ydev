import { adminTypes } from '../../types'
import { axios, handleError } from '../../../lib'

const altCreditsData = (data) => ({
  type: adminTypes.altCreditsData,
  data,
})

const altPrincipalOutstanding = (data) => ({
  type: adminTypes.altPrincipalOutstanding,
  data,
})

export const getCredits = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/credit/all',
    )
    if (status === 200) {
      dispatch(altCreditsData(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}

export const getMissedRepayment = async (data) => {
  console.log(data, 'mmm')
  try {
    return await axios.get('/api/v1/admin/credit/missed-repayments', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const handleCreditCalculator = async (data) => {
  try {
    return await axios.post('/api/v1/admin/credit/verify', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const getPrincipalOutStanding = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/credit/principal-outstanding',
    )
    if (status === 200) {
      dispatch(altPrincipalOutstanding(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}
