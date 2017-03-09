<!--
  公共头部分
-->
<template>
	<div class="header">
		<div class="headcontainer">
			<div class="logo"></div>
			<ul>
				<li><a  class="active"href="">首页</a></li>
				<li><a href="">案件管理</a></li>
				<li><a href="">人员案件管理</a></li>
				<li><a href="">营业额报表管理</a></li>
				<li><a href="">人员信息管理</a></li>
				<li><a href="">公司信息管理</a></li>
				<li><a href="">个人中心</a></li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style type="text/css">
	.header {
		width: 100%;
		height: 100px;
		background:#2553a0;
	}
	.headcontainer {
		margin: auto 0;
	}
	.headcontainer .logo {
		float: left;
		height: 39px;
		padding-left: 10px;
		padding-right: 34px;
		padding-top: 5px;
		width: 197px;
	}
	.headcontainer ul {
    list-style-type: none;
    margin: 0;
    padding-top: 10px;
    overflow: hidden;
  }
  .headcontainer li {
  	float: left;
		height: 50px;
		line-height: 50px;
		border-right: 1px solid #bbb;
  }
  .header :last-child {
    border-right: none;
	}
	.headcontainer li a {
		display: block;
    color: #000;
    padding: 8px 16px;
	}
	.headcontainer li a:hover:not(.active) {
    background-color: #555;
    color: white;
	}
</style>
