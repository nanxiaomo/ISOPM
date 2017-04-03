<!--
  公共头部分
-->
<template>
  <div class="header">
    <div class="headcontainer">
      <div class="logo">
        <a href="/">ucl</a>
      </div>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/case">案件管理</router-link></li>
        <li><a v-link="{ path: '/staff' }">人员案件管理</a></li>
        <li><a v-link="{ path: '/login' }">营业额报表管理</a></li>
        <li><router-link to="/staff">人员信息管理</router-link></li>
        <li><router-link to="/company">公司信息管理</router-link></li>
        <li><a href="">个人中心</a></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
  }
</script>

