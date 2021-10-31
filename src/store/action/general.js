import { message } from 'antd'
import { handleError, axios } from '../../lib'

export const sendSms = async (data) => {
  try {
    const { status, data: response } = await axios.post(
      `/api/v1/admin/users/send-sms`,
      data,
    )
    if (status === 200 && response && response.status === 'success') {
      message.success(response.details)
    }
    return response
  } catch ({ response }) {
    handleError(response)
  }
}

export const sendEmail = async (data) => {
  try {
    const { status, data: response } = await axios.post(
      `/api/v1/admin/users/send-email`,
      data,
    )
    if (status === 200 && response && response.status === 'success') {
      message.success(response.details)
    }
    return response
  } catch ({ response }) {
    handleError(response)
  }
}
