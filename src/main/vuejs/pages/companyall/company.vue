<template>
  <div class="company">        
    <div class="container">
      <breadcrumb>
        <breadcrumbitem>
          <router-link to="/" exact><i class="iconfont icon-homepage"></i> 主页</router-link>
        </breadcrumbitem>
        <breadcrumbitem label="公司信息管理"></breadcrumbitem>
      </breadcrumb>
      <div class="search">
        <div class="searchtitle">
          <i class="iconfont icon-user"></i>
          查找公司信息
        </div>
        <div class="condition">
          <el-form :inline="true" :model="companytable" class="conditionform">
            <el-form-item label="公司名称">
              <el-select v-model="companytable.company_name" placeholder="请选择">
                <el-option label="上海" value="shanghai"></el-option>
                <el-option label="北京" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label=" "label-width='50px'>
              <el-autocomplete v-model="companytable.buy_from_company_id" placeholder="公司名称/公司编号" style="width: 300px;"></el-autocomplete>
            </el-form-item>
            <el-form-item　label=" "label-width='10px'>
              <el-button type="primary" @click="onSubmit"><i class ="iconfont icon - icon-search"></i> 查询</el-button>
            </el-form-item>
            <el-form-item　label=" "label-width='50px'>
              <el-button type="primary"><i class ="iconfont icon - icon-add"></i> 添加新公司信息</el-button>
            </el-form-item>
          </el-form>  
        </div>
        <div class="function">
          <ul>
            <li>
              <i class="iconfont icon-print"></i>
              打印
            </li>
            <li>
              <i class="iconfont icon-export"></i>
              导出数据
            </li>
            <li>
              <i class="iconfont icon-renovate"></i>
              刷新
            </li>
          </ul>
        </div>
      </div>
      <el-table :data="curTableData" height="350" borderstyle="width: 100%" class="companytable">
        <el-table-column prop="buy_from_company_id" label="买方公司编号" width="180">
        </el-table-column>
        <el-table-column prop="sale_to_company_id" label="卖方公司编号" width="180"></el-table-column>
        <el-table-column prop="company_name" label="公司名称"> </el-table-column>
        <el-table-column prop="company_tel" label="公司电话"> </el-table-column>
        <el-table-column prop="project_amount" label="项目个数"> </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button @click="handleClick" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="internalPageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { breadcrumb, breadcrumbitem } from 'components/breadcrumb'
  const ERR_OK = 0
  export default {
    components: {
      breadcrumb,
      breadcrumbitem
    },
    data() {
      return {
        companytable: [],
        internalPageSize: 10, // 每页数据个数
        currentPage: 1        // 当前页数

      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
      handleSizeChange(val) {           // element 分页自带方法 获取每一页数据数
        this.internalPageSize = val
      },
      handleCurrentChange(val) { // 获取当前页
        this.currentPage = val
      }

    },
    computed: {
      total() {
        return this.companytable.length // 数据总数
      },
      curTableData() {   // 分页
        let from = this.internalPageSize * (this.currentPage - 1)
        let to = from + this.internalPageSize
        return this.companytable.slice(from, to)
      }
    },
    created() {
      let url = '/api/company'
      this.$http.get(url).then((response) => {
        if (response.body.errno === ERR_OK) {
          this.companytable = response.body.data
        }
      }, (response) => {
        console.log('error')
      })
    }
  }
</script>

<style scoped>
  .search {
    text-align: left;
    height: 100px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -webkit-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    padding: 10px 10px 15px 15px;
  }
  .search .searchtitle {
    display: block;
    height: 15px;
    border-bottom: 1px dashed #C8C7C7;
    line-height: 15px;
    font-size: 1.1em;
    padding-bottom: 5px;
  }
  .search .condition {
    border-top: 1px dashed #C8C7C7;
    padding-top: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
    padding-left: 5px;
  }
  .search .conditionform {
    height: 45px;
  }
  .function li {
    padding-top: 5px;
    display: inline-block;
    margin-right: 30px;
  }
  .function li i {
    font-size: 1.5em;
  }
  .function li:first-child {
    padding-left: 20px;
  }
  .companytable {
    margin-top: 10px;
  }

</style>
