<template>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-col :span="4">查找公司信息
  </el-col></br></br>
  <el-col :span="8">
  <el-form-item label="公司名称：">
    <el-select v-model="formInline.companyName" placeholder="请选择">
      <el-option label="北京" value="shanghai"></el-option>
      <el-option label="上海" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
  <el-col :span="10">
  <el-form-item>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="公司名称/公司编号"
      @select="handleSelect"
      style="width: 300px;"
    ></el-autocomplete>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit"><i class ="iconfont icon - icon-search"></i> 查询</el-button>
  </el-form-item>
  </el-col>
  <el-col :span="4">
    <el-button type="primary"><i class ="iconfont icon - icon-add"></i> 添加新公司信息</el-button>
  </el-col></br>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          state1: '',
          companyName: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loadAll() {
        return [
          { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
          { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' }
        ]
      },
      handleSelect(item) {
        console.log(item)
      }
    },
    mounted() {
      this.restaurants = this.loadAll()
    }
  }
</script>

<style type="text/css">
  
</style>
