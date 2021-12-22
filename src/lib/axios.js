import axios from 'axios'

const server = axios.create({
  baseURL: 'https://secret-oasis-97701.herokuapp.com/api',
  headers: { 'Content-Type': 'application/json' },
})

server.interceptors.response.use(
  (response) => {
    return { ...response.data, status: response.status }
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default server
