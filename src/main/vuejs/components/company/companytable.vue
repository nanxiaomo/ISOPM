<template>
  <el-col :span="23">
  <el-table
    :data="tableData1"
    height="400"
    border
    style="width: 100%"
    class="table">
    <el-table-column
      prop="buy_from_company_id"
      label="买方公司编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="sale_to_company_id"
      label="卖方公司编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="company_name"
      label="公司名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="company_tel"
      label="电话"
      width="180">
    </el-table-column>
    <el-table-column
      prop="project_amount"
      label="项目个数"
      width="180">
    </el-table-column>
    <el-table-column
      label="操作"
      width="150">
      <template scope="scope">
        <el-button @click="handleClick" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData1)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-col>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1)
      }
    },
    data() {
      return {
        tableData1: [{
          buy_from_company_id: '2016-05-03',
          company_name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          buy_from_company_id: '2016-05-02',
          company_name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          buy_from_company_id: '2016-05-04',
          company_name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          buy_from_company_id: '2016-05-01',
          company_name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          buy_from_company_id: '2016-05-08',
          company_name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          buy_from_company_id: '2016-05-06',
          company_name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          buy_from_company_id: '2016-05-07',
          company_name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>

<style type="text/css">
  .table {
    padding-left: 20px;
  }

</style>
