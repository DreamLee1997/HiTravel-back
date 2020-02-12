<!--
 * @Descripttion: 
 * @version: 
 * @Author: lixiang
 * @Date: 2020-01-09 19:48:30
 * @LastEditors  : lixiang
 * @LastEditTime : 2020-02-10 13:14:13
 -->
<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" style="margin-top: 5px"></i>
      <span style="margin-top: 5px">数据列表</span>
      <el-button
        class="btn-add"
        @click="handleAddUser()"
        size="mini">
        添加
      </el-button>
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
            <el-table-column prop="realname" label="创建时间"></el-table-column>
            <el-table-column prop="userType" label="角色"></el-table-column>
            <el-table-column prop="userStatus" label="状态"></el-table-column>

            <!-- <el-table-column  label="角色">
                <template slot-scope="scope" ><p v-if="scope.row.nickname">管理员</p></template>
            </el-table-column> -->
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
  import {fetchList} from '@/api/user'

  export default {
    name: "productCateList",
    data() {
      return {
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
            nickname: "",
            pageNo: 1,
            phone: "",
            sex: "",
            pageSize: 10,
            user_id: ""
        },
        parentId: 0
      }
    },
    created() {
      this.getList();
    },
    methods: {
      
      getList() {
        this.listLoading = true;
        fetchList(this.listQuery.pageNo, this.listQuery.pageSize).then(response => {
          this.listLoading = false;
          const result = response.data.records.filter((item) => {
            console.log(item)
            return item.userStatus == 0
          })
          this.list = result;
          this.total = result.length;
        });
      },

      handleAddUser(){

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
