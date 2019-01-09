<template>
  <!-- 检测报告 -->
  <div>
    <div class='container'>
      <div class='grid-item'>
        <div class='grid-title'>
          绿色食品鉴定
        </div>
        <div class='grid-img'>
          <previewers :dataList = list></previewers>
        </div>
      </div>

       <div class='grid-item'>
        <div class='grid-title'>
          无公害检测
        </div>
        <div class='grid-img'>
          <previewers :dataList = list2></previewers>
        </div>
      </div>

      <div class='grid-item'>
        <div class='grid-title'>
          检测报告
        </div>
        <div class='grid-img'>
          <previewers :dataList = list3></previewers>
        </div>
      </div>

      <div class='grid-item'>
        <div class='grid-title'>
          商标注册
        </div>
        <div class='grid-img'>
          <previewers :dataList = trademarkList></previewers>
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
        msrc: require('../../assets/image/lv1.png'),
        src: require('../../assets/image/lv1.png'),
        w: 900,
        h: 1200
      },
      {
        msrc: require('../../assets/image/lv2.png'),
        src: require('../../assets/image/lv2.png'),
        w: 900,
        h: 1200
      }, {
        msrc: require('../../assets/image/lv3.png'),
        src: require('../../assets/image/lv3.png'),
        w: 900,
        h: 1200
      }, {
        msrc: require('../../assets/image/lv4.png'),
        src: require('../../assets/image/lv4.png'),
        w: 900,
        h: 1200
      }],
      list2: [{
        msrc: require('../../assets/image/wu1.jpg'),
        src: require('../../assets/image/wu1.jpg'),
        w: 900,
        h: 1200
      }, {
        msrc: require('../../assets/image/wu2.jpg'),
        src: require('../../assets/image/wu2.jpg'),
        w: 900,
        h: 1200
      }, {
        msrc: require('../../assets/image/wu3.jpg'),
        src: require('../../assets/image/wu3.jpg'),
        w: 900,
        h: 1200
      }, {
        msrc: require('../../assets/image/wu4.jpg'),
        src: require('../../assets/image/wu4.jpg'),
        w: 900,
        h: 1200
      }],
      list3: [{
        msrc: require('../../assets/image/jian1.png'),
        src: require('../../assets/image/jian1.png'),
        w: 900,
        h: 1200
      },
      {
        msrc: require('../../assets/image/jian2.png'),
        src: require('../../assets/image/jian2.png'),
        w: 900,
        h: 1200
      },
      {
        msrc: require('../../assets/image/jian3.png'),
        src: require('../../assets/image/jian3.png'),
        w: 900,
        h: 1200
      },
      {
        msrc: require('../../assets/image/jian4.png'),
        src: require('../../assets/image/jian4.png'),
        w: 900,
        h: 1200
      }],
      trademarkList: [{
        msrc: require('../../assets/image/shang.png'),
        src: require('../../assets/image/shang.png'),
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
    height: 1.6rem;
    padding: .2rem;
    padding-bottom:.2rem;
    border-bottom:1px solid #f2f2f2;
    overflow: hidden;
  }
</style>
