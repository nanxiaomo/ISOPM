<template>
  <div class="staff">        
    <div class="container">
      <breadcrumb>
        <breadcrumbitem>
          <router-link to="/" exact><i class="iconfont icon-mima"></i> 主页</router-link>
        </breadcrumbitem>
        <breadcrumbitem label="人员信息管理" to="#/components"></breadcrumbitem>
      </breadcrumb>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { breadcrumb, breadcrumbitem } from 'components/breadcrumb'
  export default {
    components: {
      breadcrumb,
      breadcrumbitem
    }
  }
</script>
<style type="text/css">
  
</style>
