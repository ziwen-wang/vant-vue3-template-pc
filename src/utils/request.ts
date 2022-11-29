import axios from 'axios'
import qs from 'qs'
import { IObject } from '@/types/interface'
import { ElMessage } from 'element-plus'

const baseURL = import.meta.env.VITE_APP_API?.toString() || '/'

const service = axios.create({
  baseURL: baseURL,
  timeout: 60 * 1000,
  withCredentials: true
})

service.interceptors.request.use(
  (config: IObject) => {
    const token = localStorage.getItem('Token')
    config.headers['token'] = token

    // get请求传递数组
    if (config.method?.toUpperCase() === 'GET') {
      config.paramsSerializer = function (params: unknown) {
        return qs.stringify(params, { arrayFormat: 'comma' })
      }
    }

    // post请求数组传string
    if (config.method?.toUpperCase() === 'POST') {
      config.data = qs.stringify(config.data)
    }

    return config
  },
  (error) => {
    // 请求错误
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data as IObject
    if (res.code && res.code !== 200) {
      // token过期处理
      if (res.code === 401 || res.code === 4001) {
        // return redirectLogin();
      }
      return ElMessage(`请求失败,${res.msg}`)
    } else {
      return res
    }
  },
  (error) => {
    console.log(error)
  }
)

export default service
