<template>
  <!-- 扫码提示记录 -->
  <div class='describe'>
    <div class='desLeft'>
      <div class='left-top'>
        突尼斯软籽石榴 <span>1.5KG/6个</span>
      </div>
      <div class='left-bottom'>
        产自河南平顶山鲁山县
      </div>
    </div>
    <div class='desRight'>
      <div class='right-top'>
        扫码次数
      </div>
      <div class='right-bottom'>
        22232
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'codetip',
  props: ['dataList', 'title', 'isMap', 'dataKey'],
  components: {

  },
  mounted () {

  },
  data () {
    return {
      listData: []
    }
  },
  watch: {

  }
}
</script>

<style scoped>
  /* 扫码提示记录 */
  .describe{
    width: 100%;
    border-radius:0.1rem;
    margin-top:0.2rem;
    overflow: hidden;
  }
  .desLeft{
    float: left;
    width: 72%;
    background: #5eba9c;
    padding: 0.2rem 0  0.2rem 0.3rem;
     color: #fff;
     box-sizing: border-box;
  }
  .left-top{
    font-size: .32rem;
    font-weight: 600;
  }
  .left-top span{
    font-size: .26rem;
  }
  .left-bottom{
    padding-top: 0.1rem;
    font-size: .24rem;
    font-weight: 600;
  }
  .desRight{
    float: left;
    width: 28%;
    background: #99dac5;
    box-sizing: border-box;
    padding: 0.2rem;
    color: #fff;
    text-shadow: 1px 1px 2px #5eba9c
  }
  .right-top{
    text-align: center;
    font-size: .24rem;
    font-weight: 600;
  }
  .right-bottom{
    text-align: center;
    padding-top: 0.1rem;
    font-size: .32rem;
    font-weight: 600;
  }
  /* 扫码提示记录 end */
</style>
