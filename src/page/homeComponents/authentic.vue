<template>
  <!-- 扶贫认证 -->
  <div>
    <div class='container'>
      <div class='grid-item'>
        <div class='grid-title'>
          扶贫认证
        </div>
        <div class='grid-img'>
          <previewers :dataList = list></previewers>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import previewers from '@/components/previewer'
export default {
  name: 'reports',
  components: {
    previewers
  },
  mounted () {

  },
  data () {
    return {
      list: [{
        msrc: require('../../assets/image/fu1.png'),
        src: require('../../assets/image/fu1.png'),
        w: 900,
        h: 1200
      },
      {
        msrc: require('../../assets/image/fu2.png'),
        src: require('../../assets/image/fu2.png'),
        w: 900,
        h: 1200
      }]
    }
  },
  methods: {

  }
}
</script>
<style scoped>
  .container{
    margin: .3rem 0;
    margin-top:1.2rem;
  }
  .grid-item{
    width:100%;
    background:#fff;
    margin-bottom:.5rem;
  }
  .grid-title{
      font-size: .3rem;
      font-weight: 400;
      line-height: .5rem;
      height: .5rem;
      padding-left:.2rem;
      padding-bottom:.2rem;
      border-bottom:1px solid #f2f2f2;
  }
  .grid-img{
    width: 100%;
    height: 1.8rem;
    padding: .2rem;
    padding-bottom:.2rem;
    border-bottom:1px solid #f2f2f2;
    overflow: hidden;
  }
</style>
