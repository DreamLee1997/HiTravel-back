/*
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-02-22 11:14:23
 * @LastEditors: lixiang
 * @LastEditTime: 2020-02-22 16:08:08
 */

import request from '@/utils/request'

export function fetchList(pageNo, pageSize, type,  status, cityCode) {
    if (cityCode != 'undefined') {
        return request({
            url: status != 'undefined' ? ('/article/queryArticleByPage?cityCode=' + cityCode + '&type=' + type
             + '&status=' + status + '&pageNo=' + pageNo + '&pageSize=' + pageSize)
                : ('/article/queryArticleByPage?cityCode=' + cityCode +'&type=' + type + '&pageNo=' + pageNo + '&pageSize=' + pageSize),
            method: 'get',
        })
    } else {
        return request({
            url: status !='undefined' ? ('/article/queryArticleByPage?type=' + type
             + '&status=' + status + '&pageNo=' + pageNo + '&pageSize=' + pageSize)
                : ('/article/queryArticleByPage?type=' + type + '&pageNo=' + pageNo + '&pageSize=' + pageSize),
            method: 'get',
        })
    }
}

export function verifyStrategy(articleId) {
    return request({
      url: '/article/passVerify?articleId=' + articleId,
      method: 'get',
    })
  }