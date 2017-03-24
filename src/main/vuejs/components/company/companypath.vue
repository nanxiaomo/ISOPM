<template>
  <div>
    <el-col :span="20">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }" class="path">首页</el-breadcrumb-item>
      <el-breadcrumb-item class="path">公司信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    </el-col></br></br>
  </div>
</template>

<style type="text/css">
  .path {
    font-size: 20px;
  }
</style>
