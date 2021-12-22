import { combineReducers } from 'redux'

const initState = {
  events: false,
  jobOpenings: [],
}

const AppReducer = (state = initState, action) => {
  const { type, data } = action

  switch (type) {
    case 'ALT_EVENTS':
      return {
        ...state,
        events: data,
      }
    case 'ALT_JOB_OPENING':
      return {
        ...state,
        jobOpenings: data,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  AppReducer,
})

export default rootReducer
