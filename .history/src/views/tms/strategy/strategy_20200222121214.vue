<!--
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-02-10 13:52:50
 * @LastEditors: lixiang
 * @LastEditTime: 2020-02-22 12:12:14
 -->
<template> 
  <div class="app-container">
    <!-- <el-card class="filter-container" shadow="never">
      <div style="height:30px;">
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float: right"
          @click="handleSearchList()"
          type="primary"
          size="small">
          查询结果
        </el-button>
        <el-button
          style="float: right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="商品名称：">
            <el-input style="width: 203px" v-model="listQuery.product_name" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品状态：">
            <el-select v-model="listQuery.status" placeholder="请选择">
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品分类：">
            <el-cascader
              v-model="selectProductCateValue"
              :options="productCateOptions"
            ></el-cascader>
          </el-form-item>
        </el-form>
      </div>
    </el-card> -->
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <!-- <el-button
        class="btn-add"
        type="primary"
        @click="handleAddProduct()"
        size="mini">
        添加
      </el-button> -->
    </el-card>
    <div class="table-container">
      <el-table ref="strategyTable"
                :data="list"
                style="width: 100%"
                v-loading="listLoading"
                border>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.articleId}}</template>
        </el-table-column>
        
        <el-table-column label="攻略标题" prop="title" :show-overflow-tooltip='istooltip' align="center">
        </el-table-column>
        <el-table-column label="创建时间" prop="createTime" :show-overflow-tooltip='istooltip' align="center">
        </el-table-column>
        <el-table-column label="城市编码" prop="cityCode" :show-overflow-tooltip='istooltip' align="center">
        </el-table-column>
        <el-table-column label="城市名称" prop="cityName" width="120" align="center">
        </el-table-column>
        <el-table-column label="收藏" prop="collection" width="100" align="center">
        </el-table-column>
        <el-table-column label="点赞" prop="praise" width="100" align="center">
        </el-table-column>
        <el-table-column label="浏览量" prop="view" width="100" align="center">
        </el-table-column>
        <el-table-column label="用户ID" prop="userId" width="100" align="center">
        </el-table-column>
        <el-table-column label="状态"  align="center">
          <template slot-scope="scope">{{scope.row |formatHotelStatus}}</template>
        </el-table-column>
        <el-table-column label="创建时间" :show-overflow-tooltip='istooltip' align="center">
          <template slot-scope="scope">{{scope.row.createTime}}</template>
        </el-table-column>
        <!-- <el-table-column label="操作" :show-overflow-tooltip='istooltip' width="160"   align="center">
          <template slot-scope="scope">
            <p>
              <el-button
                size="mini"
                @click="handleUpdateProduct(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </p>
          </template>
        </el-table-column> -->
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.size"
        :page-sizes="[5,10,15]"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { formatDate } from '@/utils/date';
import { fetchList } from '@/api/strategy'
const defaultListQuery = {
  cityCode:'',
  page: 1,
  size: 10,
  status: '',
  type:0,
};
export default {
    name: 'flashPromotionList',
    data() {
      return {
        listQuery: Object.assign({}, defaultListQuery),
        list: null,
        total: null,
        listLoading: true,
        istooltip:true,
      }
    },
    created() {
      this.getList();
      // this.getProductList();
    },
   filters: {
      formatHotelStatus(row) {
        if (row.status === 0) {
          return '未审核';
        } else {
          return '已审核';
        } 
      },
   },
    methods: {
      //商品列表
      getList() {
        this.listLoading = true;
        //请求数据
        // fetchList(this.listQuery.page, this.listQuery.size, this.listQuery.streetCode).then(response => {
        //   this.listLoading = false;
        //   this.list = response.data.records;
        //   this.total = response.data.total;
        // });
      },
      handleSizeChange(val) {
        this.listQuery.size = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getList();
      },
        
    }
  }
</script>
<style></style>


