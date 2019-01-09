<template>
  <!-- 生产日志 -->
  <div class="box">
      <loading v-if='isShow'></loading>
      <div class='wrap'>
        <div class='container'>
            <div class='swpier'>
              <img src='../assets/image/banner.png' alt=''>
            </div>
            <div class='describe'>
              <div class='title'>
                有机西红柿 1000g
              </div>
              <div class='info'>
              <div class="info-list">
                  <div class="list-header">
                      <div class="header-line"></div>
                      <div class="header-info">播种</div>
                  </div>
                  <ul class="list-col">
                    <li>
                       <div class='col-key' >播种时间</div>
                        <div class='col-val' >2018-02-19</div>
                    </li>
                    <li>
                       <div class='col-key' >播种地点</div>
                        <div class='col-val' >山地种植</div>
                    </li>
                    <li>
                       <div class='col-key' >操作方式</div>
                        <div class='col-val' >人工施肥</div>
                    </li>
                    <li>
                       <div class='col-key w-100' >农事操作图片</div>
                        <div class='col-img' >
                          <img src="../assets/image/1.jpg" alt="">
                          <img src="../assets/image/1.jpg" alt="">
                        </div>
                    </li>
                  </ul>
                </div>
                <div class="info-list">
                  <div class="list-header">
                      <div class="header-line"></div>
                      <div class="header-info">施肥</div>
                  </div>
                  <ul class="list-col">
                    <li>
                       <div class='col-key' >施肥时间</div>
                        <div class='col-val' >2018-06-19</div>
                    </li>
                    <li>
                       <div class='col-key' >施肥用料</div>
                        <div class='col-val' >农家肥料</div>
                    </li>
                    <li>
                       <div class='col-key' >施肥方式</div>
                        <div class='col-val' >人工施肥</div>
                    </li>
                    <li>
                       <div class='col-key w-100' >施肥操作图片</div>
                        <div class='col-img' >
                          <img src="../assets/image/2.jpg" alt="">
                          <img src="../assets/image/2.jpg" alt="">
                        </div>
                    </li>
                  </ul>
                </div>
                <div class="info-list">
                  <div class="list-header">
                      <div class="header-line"></div>
                      <div class="header-info">打药</div>
                  </div>
                  <ul class="list-col">
                    <li>
                       <div class='col-key' >打药时间</div>
                        <div class='col-val' >2018-06-19</div>
                    </li>
                    <li>
                       <div class='col-key' >打药方式</div>
                        <div class='col-val' >人工打药</div>
                    </li>
                    <li>
                       <div class='col-key w-100' >农事操作图片</div>
                        <div class='col-img' >
                          <img src="../assets/image/3.jpg" alt="">
                          <img src="../assets/image/3.jpg" alt="">
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import loading from '@/components/loading'
import grid from '@/components/grid'
export default {
  name: 'record',
  data () {
    return {
      isShow: false,
      response: []
    }
  },
  components: {
    loading,
    grid
  },
  mounted () {
    // this.getData()
  },
  methods: {
    getData () {
      console.log('data')
      axios.get('/api/log?crop=小麦').then(this.getDataSucc)
        .catch(err => {
          this.isShow = false
          console.log(err)
        })
    },
    getDataSucc (res) {
      // console.log(res.data.im_porduct)
      if (res && res.data) {
        this.isShow = false
        this.response = res.data
      } else {
        alert('请求失败，稍后重试')
      }
    }
  }
}
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .wrap{
    height: 100%;
    max-width: 10rem;
    padding-bottom:1rem;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    margin: 0 auto;
    background-color:#f5f5f5;
    overflow: hidden;
    overflow-y: auto;
  }
  .container{
    margin:0.3rem;
    margin-top:1.5rem;
    padding: 0.2rem 0.2rem 1rem;
    padding-top:1.2rem;
    border-radius:0.1rem;
    background:#fff;
    position: relative;

  }
  .swpier{
    width: 2rem;
    height: 2rem;
    margin-left:-1rem;
    position: absolute;
    top:-1rem;
    left:50%;
  }
  .swpier img{
    width: 100%;
    height: 100%;
    display: block;
    border-radius:50%;
  }
  .describe{
    width: 100%;
    margin-top:0.1rem;
    overflow: hidden;
  }
  .title{
    margin-bottom:0.3rem;
    width: 100%;
    text-align: center;
    font-size: 0.34rem;
    font-weight: 600;
    color: #333;

  }
  .info{
    width: 100%;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }
  .info .info-list{
    width: 100%;
    padding-bottom: .5rem;
  }
  .list-header{
    position: relative;
    width: 95%;
    margin: 0 auto;
    margin-top:.4rem;
    height: .5rem;
  }
  .header-line{
    width: 100%;
    height: 1px;
    background: #379576;
  }
  .header-info{
    position: absolute;
    top:-0.16rem;
    left: 50%;
    margin-left:-0.5rem;
    width: 1rem;
    text-align: center;
    height: .32rem;
    line-height: .32rem;
    background: #fff;
    font-size: .3rem;
    font-weight: 500;
    font-family: 'Microsoft YaHei'
  }
  .list-col{
    width:100%;
    overflow: hidden;
  }
  .list-col li {
    width:100%;
    margin-bottom: .2rem;
    height: .4rem;
  }
  .col-key {
    width: 28%;
    padding-left: 0.5rem;
    float: left;
    color: #379576;
    font-size: .28rem;
    line-height: .28rem;

  }
  .w-100{
    width: 100%;
  }
  .col-val {
    padding-left: 0.2rem;
    color:#666;
    float: left;
    font-size: .28rem;
    line-height: .28rem;
  }
  .col-img{
    width: 100%;
    padding: .25rem;
    box-sizing: border-box;
    clear: both;
  }
  .col-img img{
    float: left;
    width: 48%;
    padding-right:4%;
  }
  .col-img img:last-child{
    padding-right:0;
    padding-left:0;
  }

</style>
