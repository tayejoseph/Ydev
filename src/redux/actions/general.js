import { message } from 'antd'
import { axios, handleError } from '../../lib'

export const getEvents = () => async (dispatch) => {
  const { status, ...response } = await axios.get('event')
  if (status === 200) {
    dispatch({
      type: 'ALT_EVENTS',
      data: response,
    })
  }
}

export const getJobOpenings = () => async (dispatch) => {
  const { status, ...response } = await axios.get('job')
  if (status === 200) {
    dispatch({
      type: 'ALT_JOB_OPENING',
      data: response,
    })
  }
}

export const applyForJob = async (id, data) => {
  const { status, ...response } = await axios.post(`job-application/`, data)
  console.log(response, 'response')
  if (status === 200) {
    message.success('Successfully applied for job')
  }
  return
}

export const applyForSchool = async (data) => {
  try {
    return await axios.post('/program/', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const handleScheduleConsultation = async (data) => {
  try {
    return await axios.post('/schedule-consultation', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const hireAlumini = async (data) => {
  try {
    return await axios.post('/alumini', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const applyForCoprateTraining = async (data) => {
  try {
    return await axios.post('/training', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const ydevApplyNow = async (data) => {
  try {
    return await axios.post('/apply_now', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const applyForHireEdTraining = async (data) => {
  try {
    return await axios.post('/higher_education/', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const becomeMentor = async (data) => {
  try {
    return await axios.post('/mentorship', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const becomeAnInstructor = async (data) => {
  try {
    return await axios.post('/instructor', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const getInTouch = async (data) => {
  try {
    return await axios.post('/get-in-touch/', data)
  } catch ({ response }) {
    handleError(response)
  }
}
