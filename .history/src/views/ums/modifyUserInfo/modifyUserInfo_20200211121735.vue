<!--
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-01-09 19:48:30
 * @LastEditors  : lixiang
 * @LastEditTime : 2020-02-11 12:17:35
 -->
<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" style="margin-top: 5px"></i>
      <span style="margin-top: 5px">数据列表</span>
    </el-card>
    <div class="table-container">
        <el-table
            :data="list"
            style="width: 100%">
            <el-table-column prop="userId" label="用户ID"></el-table-column>
            <el-table-column prop="username" label="用户名" ></el-table-column>
            <el-table-column prop="realname" label="真实姓名"></el-table-column>
            <el-table-column prop="phone" label="电话"></el-table-column>
            <el-table-column prop="email" label="Email"></el-table-column>
            <el-table-column prop="realname" :show-overflow-tooltip='istooltip' label="创建时间"></el-table-column>
            <el-table-column label="状态"  align="center">
              <template slot-scope="scope">{{scope.row |formatUserStatus}}</template>
            </el-table-column>
            <el-table-column label="角色" align="center">
              <template slot-scope="scope">{{scope.row |formatUserType}}</template>
            </el-table-column>
            <el-table-column label="操作"  width="160"   align="center">
              <template slot-scope="scope">
                <p>
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleVerifyUser(scope.$index, scope.row)">审核
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除
                  </el-button>
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
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="listQuery.pageNum"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>

import {fetchList, cancleUser, verifyUser} from '@/api/user'

  export default {
    name: "productCateList",
    data() {
      return {
        list: null,
        total: null,
        listQuery: {
            nickname: "",
            pageNo: 1,
            phone: "",
            sex: "",
            pageSize: 50,
            user_id: ""
        },
        parentId: 0,
        listLoading: true,
        istooltip:true,
      }
    },
    filters: {
      formatUserStatus(row) {
        if (row.userStatus === 0) {
          return '未激活';
        } else if (row.userStatus === 1) {
          return '已激活';
        } else {
          return '已禁用';
        }
      },
      formatUserType(row){
        if (row.userType === 0) {
          return '管理员';
        } else if (row.userType === 1) {
          return '普通用户';
        } else if(row.userType === 2){
          return '酒店商户';
        } else {
          return '景区商户';
        }
      },
    },
    created() {
      this.getList();
    },
    methods: {
      //获取数据列表
      getList() {
        this.listLoading = true;
        fetchList(this.listQuery.pageNo, this.listQuery.pageSize).then(response => {
          this.listLoading = false;
          const result = response.data.records.filter((item) => {
            return item.userStatus == 0
          })
          this.list = result;
          this.total = result.length;
        });
      },
      //禁用用户
      handleDelete(index, row){
        let self = this;
        this.$confirm('是否确认操作', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          cancleUser(row.userId).then(response => {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            });
            this.getList();
          });
        });
      },
      //审核商家用户
      handleVerifyUser(index, row){
        let self = this;
        this.$confirm('是否确认审核通过', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          verifyUser(row.userId).then(response => {
            this.$message({
              message: '操作成功',
              type: 'success',
              duration: 1000
            });
            this.getList();
          });
        });
        
      },
      handleSizeChange(val) {
        this.listQuery.page = 1;
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

<style scoped>

</style>
