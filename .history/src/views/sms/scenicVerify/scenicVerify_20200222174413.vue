<!--
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-01-09 19:48:30
 * @LastEditors: lixiang
 * @LastEditTime: 2020-02-22 17:44:13
 -->
<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div style="height:30px;">
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button style="float: right" @click="handleSearchList()" type="primary" size="small">查询结果</el-button>
        <el-button
          style="float: right; margin-right: 15px"
          @click="handleResetSearch()"
          size="small"
        >重置</el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="城市编码：">
            <el-input style="width: 203px" v-model="listQuery.cityCode" placeholder="商品名称"></el-input>
          </el-form-item>
          <!-- <el-form-item label="景区状态：">
            <el-select v-model="listQuery.status" placeholder="请选择">
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item> -->
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <!-- <el-button class="btn-add" type="primary" @click="handleAddProduct()" size="mini">添加</el-button> -->
    </el-card>
    <div class="table-container">
      <el-table ref="productTable" :data="list" style="width: 100%" v-loading="listLoading" border>
        <el-table-column label="编号" width="70" align="center">
          <template slot-scope="scope">{{scope.row.scenicId}}</template>
        </el-table-column>
        <el-table-column label="景区图片" width="120" align="center">
          <template slot-scope="scope">
            <img style="height: 80px" :src="'http://101.132.138.185:8080/'+scope.row.img" />
          </template>
        </el-table-column>
        <el-table-column
          label="景区名称"
          prop="scenicName"
          width="120"
          :show-overflow-tooltip="istooltip"
          align="center"
        ></el-table-column>
        <el-table-column
          label="景区编码"
          prop="scenicCardId"
          :show-overflow-tooltip="istooltip"
          align="center"
        ></el-table-column>
        <el-table-column label="城市编码" prop="cityCode" align="center"></el-table-column>
        <el-table-column label="城市名称" prop="cityName" align="center"></el-table-column>
        <el-table-column label="注册人姓名" prop="realname" width="100" align="center"></el-table-column>
        <el-table-column label="身份证ID" prop="cardId" width="100" align="center"></el-table-column>
        <el-table-column label="手机号" prop="phone" width="100" align="center"></el-table-column>
        <el-table-column label="邮箱" prop="email" width="100" align="center"></el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">{{scope.row |formatHotelStatus}}</template>
        </el-table-column>
        <el-table-column label="创建时间" :show-overflow-tooltip="istooltip" width="110" align="center">
          <template slot-scope="scope">{{scope.row.createTime}}</template>
        </el-table-column>
        <el-table-column label="操作" :show-overflow-tooltip="istooltip" width="110" align="center">
          <template slot-scope="scope">
            <p>
              <!-- <el-button size="mini" @click="handleUpdateProduct(scope.$index, scope.row)">编辑</el-button> -->
              <el-button size="mini" type="primary" @click="handleVerify(scope.$index, scope.row)">审核</el-button>
            </p>
          </template>
        </el-table-column>
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
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { fetchList, verifyScenic } from "@/api/scenic";
// import {fetchList as fetchSkuStockList,update as updateSkuStockList} from '@/api/skuStock'

const defaultListQuery = {
  cityCode: '',
  page: 1,
  size: 10,
  status: 0 //0 未审核 1 审核 2 删除的 不传所有
};
export default {
  name: "scenicVerify",
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      list: null,
      total: null,
      listLoading: true,
      istooltip: true,
      statusOptions: [
        {
          label: "未审核",
          value: 0
        },
        {
          label: "已审核",
          value: 1
        },
        {
          label: "删除的",
          value: 2
        }
      ]
    };
  },
  created() {
    this.getList();
  },
  filters: {
    formatHotelStatus(row) {
      if (row.status === 0) {
        return "未审核";
      } else if (row.status === 1) {
        return "已审核";
      } else {
        return "已删除";
      }
    }
  },
  methods: {
    //景区列表
    getList() {
      this.listLoading = true;
      //请求数据
      fetchList(
        this.listQuery.page,
        this.listQuery.size,
        this.listQuery.cityCode,
        this.listQuery.status
      ).then(response => {
        this.listLoading = false;
        this.list = response.data.records;
        this.total = response.data.total;
      });
    },
    handleUpdateProduct() {},
    handleVerify(index, row) {
      let self = this;
      self.$confirm("是否确认删除", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
      }).then(() => {
          verifyScenic(row.scenicId).then(response => {
              self.$message({
                  message: "删除成功",
                  type: "success",
                  duration: 1000
              });
              self.getList();
          });
      });
    },
    handleSizeChange(val) {
      this.listQuery.size = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    handleResetSearch() {
      this.listQuery = Object.assign({}, defaultListQuery);
      this.getList();
    },
    handleSearchList() {
      this.getList();
    }
  }
};
</script>
<style>

</style>