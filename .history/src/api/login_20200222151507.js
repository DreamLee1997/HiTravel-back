/*
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-01-09 19:48:30
 * @LastEditors: lixiang
 * @LastEditTime: 2020-02-22 15:15:07
 */
import request from '@/utils/request'

export function login(login_name, password) {
  return request({
    url: '/user/login?username=' + login_name + '&password=' + password + '&type=0',
    method: 'post',
  })
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
