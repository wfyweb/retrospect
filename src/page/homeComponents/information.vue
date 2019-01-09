<template>
  <!-- 基本信息 -->
  <div>
    <div class='container'>
      <div class='swpier'>
        <img src='../../assets/image/banner.png' alt=''>
      </div>
      <!-- 扫码提示记录 -->
      <codetip></codetip>
      <div class="introduce">
        <img src="../../assets/image/introduce.png" alt="">
      </div>
      <!-- 小档案 -->
      <div class="archives">
        <div class="arc-left">
          <img src="../../assets/image/archives.png" alt="">
        </div>
        <div class="arc-right">
          <div class="arc-title">
            <span>石榴</span>小档案
          </div>
          <div class="arc-bottom">
            <div class="arc-des">
              【石榴名称】突尼斯软籽石榴
            </div>
            <div class="arc-des">
              【石榴产地】河南 鲁山
            </div>
            <div class="arc-des">
              【石榴口感】晶莹剔透，汁多味甜
            </div>
            <div class="arc-des">
              【石榴特点】软籽不吐籽
            </div>
            <div class="arc-des">
              【产品规格】1.5KG/2KG 6个
            </div>
          </div>
        </div>
      </div>
</div>
<!-- 产地 -->
<div class="place">
  <div class="place-title">
    <img src="../../assets/image/place.png" alt="">
  </div>
  <div class="place-box">
    <div class="text-title">
      河南平顶山鲁山县
    </div>
    <div class="text-des">
      鲁山县位于河南省中西部，伏牛山东麓，地处北亚热带向暖温带过渡地带，年均气温14.8℃，年均降水量1000毫米。
      为石榴的生长提供良好的生长环境。
    </div>
    <div class="environment">
      <div class="envitem">
        <img src="../../assets/image/envitem1.png" alt="">
        <p>光照充足</p>
      </div>
      <div class="envitem">
        <img src="../../assets/image/envitem2.png" alt="">
        <p>土壤肥沃</p>
      </div>
      <div class="envitem">
        <img src="../../assets/image/envitem3.png" alt="">
        <p>温度适合</p>
      </div>
      <div class="env">
        <img src="../../assets/image/env.png" alt="">
      </div>
    </div>
  </div>
</div>
<!-- 生长周期 -->
<div class="place grow">
  <div class="place-title ">
    <img src="../../assets/image/details.png" alt="">
  </div>
  <div class="grow-item">
    <p>6月份开花</p>
    <img class="pic" src="../../assets/image/details1.png" alt="">
    <img class="update" src="../../assets/image/update.png" alt="">
  </div>
  <div class="grow-item">
    <p>7月份结果</p>
    <img class="pic" src="../../assets/image/details2.png" alt="">
    <img class="update" src="../../assets/image/update.png" alt="">
  </div>
  <div class="grow-item">
    <p>9月份成熟</p>
    <img class="pic" src="../../assets/image/details3.png" alt="">
  </div>
</div>
<!-- 产品实拍 -->
<div class="place photograph">
  <div class="place-title ">
    <img src="../../assets/image/photograph.png" alt="">
  </div>
  <div class="photograph-item">
    <img src="../../assets/image/photograph1.png" alt="">
    <img src="../../assets/image/photograph2.png" alt="">
    <img src="../../assets/image/photograph3.png" alt="">
  </div>
</div>
<!-- 食用方法 -->
<div class="place photograph">
  <div class="place-title ">
    <img src="../../assets/image/method.png" alt="">
  </div>
  <div class="photograph-item">
    <img src="../../assets/image/method1.png" alt="">
  </div>
</div>
<!-- 不同吃法 -->
<div class="place photograph difference">
  <div class="place-title ">
    <img src="../../assets/image/difference.png" alt="">
  </div>
  <div class="photograph-item">
    <img src="../../assets/image/difference1.png" alt="">
  </div>
</div>
</div>
</template>
<script>
import codetip from '@/components/codetip'
export default {
  name: 'information',
  props: ['dataList', 'title', 'isMap', 'dataKey'],
  components: {
    codetip
  },
  mounted () {

  },
  data () {
    return {
      listData: []
    }
  }
}
</script>
<style scoped>
  .container{
    margin: .3rem;
  }
  .swpier{
    margin-top:1rem;
    width: 100%;
  }
  .swpier img{
    width: 100%;
    height: 100%;
    display: block;
    border-radius:0.2rem;
  }
  /* 文字描述 */
  .introduce{
    width: 100%;
    margin-top:0.2rem;
  }
  .introduce img{
    width: 100%;
    height: 100%;
    display: block;
  }
  /* 文字描述 end */
  /* 小档案 */
  .archives{
    width: 100%;
    margin-top:.2rem;
    overflow: hidden;
  }
  .arc-left{
    width: 45%;
  }
  .arc-right{
    width: 55%;
  }
  .arc-left,.arc-right{
    float: left;
    overflow: hidden;
  }
  .arc-left img{
    margin-top:.2rem;
    width: 100%;
    height: auto;
  }
  .arc-right{
    box-sizing: border-box;
  }
  .arc-title{
    margin-left:.2rem;
    width: 2.3rem;
    height: .5rem;
    background: #cf0010;
    border-radius:.3rem;
    text-align: center;
    line-height: .5rem;
    color: #fff;
    font-family: 'Microsoft Yahie'
  }
  .arc-bottom{
    padding-left:.2rem;
    margin-top: .2rem;
  }
  .arc-des{
      font-size: .22rem;
      height: .35rem;
      line-height: .35rem;
      color: #9b9b9b;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
  }
  /* 小档案 end */
  /* 产地 */
  .place{
    width: 100%;
    margin-bottom:.4rem;
  }
  .place-title img{
    display: block;
    width: 100%;
    height: auto;
  }
  .place-box{
    width: 100%;
    margin-top:.2rem;
  }
  .text-title{
    width: 100%;
    text-align: center;
    font-size: .34rem;
    font-weight: bold;
    font-family: 'microsoft yahei';
    letter-spacing:6px
  }
  .text-des{
    text-indent: .4rem;
    line-height: .4rem;
    padding: .3rem;
    font-size: .26rem;
    font-family: 'microsoft yahei';
  }
  .environment{
    width: 99%;
    margin: 0 auto;
    overflow: hidden;
  }
  .envitem {
    width:33%;
    float: left;
  }
  .envitem img{
    width: 100%;
    height: auto;
  }
  .envitem p{
    text-align: center;
    font-size: .26;
    margin-top:.2rem;
    font-weight: bold;
  }
  .env{
    width: 100%;
    overflow: hidden;
  }
  .env img{
    width: 100%;
    display: block;
  }
  /* 产地end */
  /* 生长周期 */
  .grow-item{
    width: 100%;
    margin: .24rem auto;
  }
  .grow-item p{
    text-align: center;
    padding-bottom:.14rem;
    font-size: .28rem;
    font-family: "Microsoft Yahei";
    font-weight: bold;
    line-height: .32rem;
  }
  .grow-item img.pic{
    display: block;
    width: 5.8rem;
    margin: 0 auto;

  }
  .grow-item img.update{
    display: block;
    width: .41rem;
    height: .72rem;
    margin: .1rem auto;
  }
  /* 生长周期 end*/
  /* 产品实拍 */
  .photograph-item{
    width: 100%;
    overflow: hidden;
  }
  .photograph-item img{
    width: 100%;
    display: block;
  }
  /* 产品实拍 end*/
  .difference{
    margin-bottom: 0;
  }
</style>
