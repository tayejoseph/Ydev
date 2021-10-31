import axios from 'axios'
import Cookies from 'js-cookie'
import { store } from '../../src'
import { logout } from '../redux/actions'
import { message } from 'antd'

const server = axios.create({
  baseURL: 'https://ydev-api.herokuapp.com/api',
  headers: { 'Content-Type': 'application/json' },
})

server.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  if (token) config.headers.common['Authorization'] = `Bearer ${token}`

  return config
})

server.interceptors.response.use(
  (response) => {
    return { ...response.data, status: response.status }
  },
  (err) => {
    if (err.response.status === 403 || err.response.status === 401) {
      Cookies.remove('token')
      message.warning('Your Session has Expired kindly Login again')
      store.dispatch(logout())
    }
    // NProgress.done()
    return Promise.reject(err)
  },
)

export default server
