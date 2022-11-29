import { MockMethod } from 'vite-plugin-mock'
import Mock, { Random } from 'mockjs'

const mockArr: MockMethod[] = [
  {
    url: '/api/getMenu',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: Mock.mock({
          id: '@id',
          name: '@cname',
          url: '@url'
        })
      }
    }
  }
]
export { mockArr }
