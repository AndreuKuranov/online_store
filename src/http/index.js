import axios from "axios";

const $host = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

const $authHost = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

// Это деление лишнее, ты ничего не потеряешь, если будет в каждый запрос класть токен, даже если запрос публичный
export {
  $host,
  $authHost
}
