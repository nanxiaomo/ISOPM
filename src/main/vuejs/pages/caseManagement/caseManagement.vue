<template>
  <div class="home">
    <vheader></vheader>
    <vslide></vslide>
    <div class="container">
    <vselect></vselect>
    <vtable></vtable>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script type="text/javascript">
  import vslide from 'components/slide/Slide'
  import vheader from 'components/header/header'
  import vfooter from 'components/footer/footer'
  import vtable from 'components/table/casepage'
  import vselect from 'components/select/searchform'
  
  export default {
    components: {
      vslide,
      vheader,
      vfooter,
      vtable,
      vselect
    }
  }
</script>
<style type="text/css">
  
</style>
