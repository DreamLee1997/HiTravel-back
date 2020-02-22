/*
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-02-01 11:29:57
 * @LastEditors: lixiang
 * @LastEditTime: 2020-02-22 15:45:35
 */
import request from '@/utils/request'

export function fetchList(pageNo, pageSize, streetCode, status) {
  if (streetCode != 'undefined') {
    return request({
      url: status != 'undefined' ? ('/hotel/queryByPageForAdmin?streetCode=' + streetCode
        + '&status=' + status + '&pageNo=' + pageNo + '&pageSize=' + pageSize)
        : ('/hotel/queryByPageForAdmin?streetCode=' + streetCode + '&pageNo=' + pageNo + '&pageSize=' + pageSize),
      method: 'post',
    })
  } else {
    return request({
      url: status != 'undefined' ? ('/hotel/queryByPageForAdmin?status=' + status 
        + '&pageNo=' + pageNo + '&pageSize=' + pageSize)
        : ('/hotel/queryByPageForAdmin?pageNo=' + pageNo + '&pageSize=' + pageSize),
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