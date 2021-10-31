import { message } from 'antd'

const handleError = (error) => {
  console.log(error, 'mmmmm')
  let errorMessage = ''
  if (error) {
    const { errors } = error.data
    if (error.data.error) {
      errorMessage = error.data.error
    } else if (Array.isArray(errors)) {
      errors.map((item) => {
        errorMessage = `${errorMessage} ${item.field}: ${item.message}`
      })
    } else if (error.data) {
      errorMessage = error.data
    } else if (error.data.error) {
      errorMessage = error.data.error
    } else {
      errorMessage = 'An error occurred, check your internet connection'
    }
  } else {
    errorMessage = 'An error occurred, check your internet connection'
  }
  message.error(errorMessage)
}

export default handleError
