/*
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-02-22 17:20:31
 * @LastEditors: lixiang
 * @LastEditTime: 2020-02-22 17:31:11
 */
import request from '@/utils/request'

export function fetchList(pageNo, pageSize, cityCode, status) {
  if (cityCode != 'undefined') {
    return request({
      url: status != 'undefined' ? ('/scenic/queryByPage?cityCode=' + cityCode
        + '&status=' + status + '&pageNo=' + pageNo + '&pageSize=' + pageSize)
        : ('/scenic/queryByPage?cityCode=' + cityCode + '&pageNo=' + pageNo + '&pageSize=' + pageSize),
      method: 'post',
    })
  } else {
    return request({
      url: status != 'undefined' ? ('/scenic/queryByPage?status=' + status 
        + '&pageNo=' + pageNo + '&pageSize=' + pageSize)
        : ('/scenic/queryByPage?pageNo=' + pageNo + '&pageSize=' + pageSize),
      method: 'post',
    })
  }
}

export function deleteScenic(scenicId) {
  return request({
    url: '/scenic/delete?scenicId=' + scenicId,
    method: 'get',
  })
}

export function verifyHotel(scenicId) {
  return request({
    url: '/scenic/passVerify?scenicId=' + scenicId,
    method: 'get',
  })
}