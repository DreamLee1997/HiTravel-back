<!--
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-01-09 19:48:30
 * @LastEditors: lixiang
 * @LastEditTime: 2020-02-10 14:35:04
 -->
<template> 
  <div class="app-container">
    景区审核
  </div>
</template>
<script>

const defaultListQuery = {
  pageNum: 1,
  pageSize: 5,
  productName: null,
  recommendStatus: null
};

export default {
  name: 'newProductList',
  data() {
    return {}
  },
  created() {
    // this.getList();
  },
  filters:{
    // formatRecommendStatus(status){
    //   if(status===1){
    //     return '推荐中';
    //   }else{
    //     return '未推荐';
    //   }
    // }
  },
  methods: {}
}
</script>
