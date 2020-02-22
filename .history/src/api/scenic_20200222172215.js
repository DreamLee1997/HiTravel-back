/*
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-02-22 17:20:31
 * @LastEditors: lixiang
 * @LastEditTime: 2020-02-22 17:22:15
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

export function deleteHotel(hotelId) {
  return request({
    url: '/hotel/delete?hotelId=' + hotelId,
    method: 'get',
  })
}

export function verifyHotel(hotelId) {
  return request({
    url: '/hotel/passVerify?hotelId=' + hotelId,
    method: 'get',
  })
}