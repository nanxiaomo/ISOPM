<template>
  <div class="home">
    <vheader></vheader>
    <vslide></vslide>        
    <div class="container">
      <div class="homeWelcomne">
        <div class="hometitle">
          <i class="iconfont icon-huanying"></i>
        </div>
        <div class="welmessage">
          <p>早上好</p>
          <p>欢迎登录系统</p>
        </div>
      </div>
      <div class="shortcut">
        <div class="hometiltle">
          <img src="">快速通道
        </div>
        <ul class="index" v-for="(item, index) in shortcut" :key="index">
          <li><a href="">{{item.title}}</a></li>
        </ul>
      </div>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script type="text/javascript">
  import vslide from 'components/slide/Slide'
  import vheader from 'components/header/header'
  import vfooter from 'components/footer/footer'
  import checkproject from 'assets/images/home/checkproject.png'
  import addproject from 'assets//images/home/addproject.png'
  import chart from 'assets/images/home/chart.png'
  import staff from 'assets/images/home/staff.png'
  export default {
    components: {
      vslide,
      vheader,
      vfooter
    },
    data() {
      return {
        input: '',
        shortcut: [
          {
            title: '查看案件',
            imgUrl: checkproject
          },
          {
            title: '添加案件',
            imgUrl: addproject
          },
          {
            title: '查看报表',
            imgUrl: chart
          },
          {
            title: '查看员工信息',
            imgUrl: staff
          }
        ]
      }
    }
  }
</script>
<style type="text/css">
  .hometitle {
    width: 100%;
    height: 50px;
    background-color: #222;
  }
  .hometitle i{
    width: 25px;
    color: #fff;
  }

</style>
