import request from '@/utils/request'

export function login(login_name, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      login_name,
      password
    }
  })
  // return request({
  //   url: '/admin/login',
  //   method: 'post',
  //   data: {
  //     username,
  //     password
  //   }
  // })
}

export function getInfo() {
  return request({
    url: '/admin/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
