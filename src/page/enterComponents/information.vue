<template>
  <!-- 生产基本信息 -->
  <div>
    <div class='container'>
      <div class='swpier'>
        <img src='../../assets/image/banner.png' alt=''>
      </div>
      <div class='describe'>
        <div class='title'>
          {{name}}
        </div>
        <div class='info'>
          <p>河南佳尚农业科技发展有限公司，于2014年04月29日在鲁山县工商行政管理局注册成立，我们始终为客户提供好的产品和技术支持、健全的售后服务，我公司主要经营农业科学技术研究、技术推广；农作物、经济林、林果、花卉、中药材、茶叶、蔬菜种植；仓储服务（不含危险化学品）；农副食品加工销售。</p>
        </div>
      </div>
      <grid :dataList = dataList></grid>
    </div>
</div>

</template>
<script>
import grid from '@/components/grid'
export default {
  name: 'enterInformation',
  components: {
    grid
  },
  mounted () {

  },
  data () {
    return {
      name: '河南佳尚农业科技有限公司',
      dataList: [
        {key: '公司地址', val: '鲁山县人民路东段五里堡转盘东'},
        {key: '负责人', val: '周瑞'},
        {key: '成立时间', val: '2014-04-29'},
        {key: '经营期限', val: '2014-04-29至2044-04-28'},
        {key: '社会信用代码', val: '914104230994379306'}
      ]
    }
  }
}
</script>
<style scoped>
 .container{
    background-color:#fff;
    margin-top:.9rem;
    padding: 0.3rem 0.3rem 1rem;
    border-radius:0.1rem;
  }
  .swpier{
    width: 100%;
  }
  .swpier img{
    width: 100%;
    height: 100%;
    display: block;
    border-radius:0.2rem;
  }
  .describe{
    width: 100%;
    margin-top:0.2rem;
    overflow: hidden;
  }
  .title{
    font-weight: 600;
    font-size: 0.34rem;
    color: #333;
    margin-bottom:0.2rem;
  }
  .info{
    font-size: .26rem;
    line-height: .36rem;
    color: #666;
  }
  .info p{
    text-indent:2em;
  }
</style>
