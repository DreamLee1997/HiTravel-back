import request from '@/utils/request'

export function fetchList(pageNo, pageSize, streetCode) {
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
  // return request({
  //   url: streetCode?('/hotel/queryByPage?streetCode=' + streetCode + 'pageNo=' + pageNo + '&pageSize=' + pageSize)
  //   :('/hotel/queryByPage?pageNo=' + pageNo + '&pageSize=' + pageSize),
  //   method: 'post',
  // })
}