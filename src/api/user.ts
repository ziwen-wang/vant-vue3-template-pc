import service from '@/utils/request'
import { IObject } from '@/types/interface'

export const login = (data: IObject) => {
  return service({
    url: '/api/login',
    method: 'post',
    data
  })
}

export const getMenu = () => {
  return service({
    url: '/api/getMenu',
    method: 'get'
  })
}
