/*
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-02-22 11:14:23
 * @LastEditors: lixiang
 * @LastEditTime: 2020-02-22 12:03:31
 */

import request from '@/utils/request'

export function fetchList(pageNo, pageSize, type,  status, cityCode) {
    if (cityCode) {
        return request({
            url: status ? ('/article/queryArticleByPage?cityCode=' + cityCode + '&status=' + status
             + '&type=' + type + '&pageNo=' + pageNo + '&pageSize=' + pageSize)
                : ('/article/queryArticleByPage?cityCode=' + cityCode +'&type=' + type + '&pageNo=' + pageNo + '&pageSize=' + pageSize),
            method: 'get',
        })
    } else {
        return request({
            url: status ? ('/article/queryArticleByPage?status=' + status
             + '&type=' + type + '&pageNo=' + pageNo + '&pageSize=' + pageSize)
                : ('/article/queryArticleByPage?type=' + type + '&pageNo=' + pageNo + '&pageSize=' + pageSize),
            method: 'get',
        })
    }

}