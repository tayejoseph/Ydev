import { adminTypes } from '../../types'
import { axios, handleError } from '../../../lib'

const altRepaymentData = (data) => ({
  type: adminTypes.altRepaymentData,
  data,
})

export const getRepayments = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response } = await axios.get(
      '/api/v1/admin/repayments/all',
    )
    if (status === 200) {
      dispatch(altRepaymentData(response.data))
    }
  } catch ({ response }) {
    handleError(response)
  }
}
