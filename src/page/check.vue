<template>
  <!-- 检测报告 -->
  <div class="box">
      <div class='wrap'>
        <div class='container'>
            <div class='swpier'>
              <img :src= batImg alt=''>
            </div>
            <div class='describe'>
              <div class='title'>
                {{titleTop}} {{weight}}
              </div>
              <grid :dataList = dataList></grid>
              <div class='info' v-for=' (item ,index) in checkImgList ' :key = 'index'>
                <img :src= item >
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
import loading from '@/components/loading'
import grid from '@/components/grid'
export default {
  name: 'enterprise',
  data () {
    return {
      titleTop: '',
      weight: '',
      batImg: '',
      checkImgList: [],
      dataList: []
    }
  },
  components: {
    loading,
    grid
  },
  mounted () {
    this.handleData(this.$store.state.data)
  },
  methods: {
    handleData (data_) {
      this.titleTop = data_.chemical[0].s_name
      this.weight = data_.package.weight
      let res = parseInt(data_.report[0].result) === 0 ? '合格' : '不合格'
      this.batImg = this.global.weburl + this.handleImg(data_.package.bat_img)[0]
      this.checkImgList = this.checkImgFn(data_.report[0].report_img)
      this.dataList = [
        {key: '检测编号', val: data_.report[0].report_id},
        {key: '报告名称', val: data_.report[0].report_name},
        {key: '产品名称', val: data_.report[0].product_name},
        {key: '检测人', val: data_.report[0].clerker},
        {key: '检测时间', val: data_.report[0].ck_time},
        {key: '录入人', val: data_.report[0].operator},
        {key: '录入时间', val: data_.report[0].create_time},
        {key: '检测结果', val: res}
      ]
    },
    handleImg (resImg) {
      let imgArr = resImg.split(',')
      imgArr.pop()
      return imgArr
    },
    // img字符串转化为 绝对路径的 数组
    checkImgFn (imgList) {
      const that = this
      const imgArr = this.handleImg(imgList)
      let imgCheckArr = []
      imgArr.forEach(item => {
        imgCheckArr.push(that.global.weburl + item)
      })
      return imgCheckArr
    }
  },
  computed: {
    Loading () {
      return this.$store.state.Loading
    }
  },
  watch: {
    Loading (val) {
      if (val) {
        this.handleData(this.$store.state.data)
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
  .info img{
    display: block;
    width: 100%;
    height: 100%;
    margin-top: 0.4rem;
    margin-bottom: 0.2rem;
  }

</style>
