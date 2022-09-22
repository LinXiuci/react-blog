import axios from 'axios'

const http = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {},
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use(
  (response) => {},
  (error) => {}
)


