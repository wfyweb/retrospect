<template>
  <!-- 生产日志 -->
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
              <div class='info'>
                <gridRecord title='播种' :dataList = 'dataList1'></gridRecord>
                <gridRecord title='施肥' :dataList = 'dataList2'></gridRecord>
                <gridRecord title='打药' :dataList = 'dataList3'></gridRecord>
                <gridRecord title='采摘' :dataList = 'dataList4'></gridRecord>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import loading from '@/components/loading'
import gridRecord from '@/components/gridRecord'
export default {
  name: 'record',
  data () {
    return {
      titleTop: '',
      weight: '',
      batImg: '',
      dataList1: [],
      dataList2: [],
      dataList3: [],
      dataList4: []
    }
  },
  components: {
    loading,
    gridRecord
  },
  mounted () {
    this.handleData(this.$store.state.data)
  },
  methods: {
    /* eslint-disable */
    // 获取接口数据 返回所需格式
    handleData (data_) {
      this.titleTop = data_.chemical[0].s_name
      this.weight = data_.package.weight
      this.batImg = this.global.weburl + this.handleImg(data_.package.bat_img)[0]

      const seedImg = [this.global.weburl + this.handleImg(data_.seed.s_img)[0], this.global.weburl + this.handleImg(data_.seed.s_img)[1]]
      const chemicalImg = [this.global.weburl + this.handleImg(data_.chemical[0].c_img)[0], this.global.weburl + this.handleImg(data_.chemical[0].c_img)[1]]
      const poisonImg = [this.global.weburl + this.handleImg(data_.poison[0].p_img)[0], this.global.weburl + this.handleImg(data_.poison[0].p_img)[1]]
      const harvestImg = [this.global.weburl + this.handleImg(data_.harvest.h_img)[0], this.global.weburl + this.handleImg(data_.harvest.h_img)[1]]
      /* eslint-disable */
      this.dataList1 = [
        {key: '播种人', val: data_.seed.people},
        {key: '种子名称', val: data_.seed.s_name},
        {key: '播种时间', val: data_.seed.s_time},
        {key: '播种数量', val: data_.seed.nums},
        {key: '土地编号', val: data_.seed.soil_name},
        {key: '农事操作图片', val:seedImg}
      ]
      this.dataList2 = [
        {key: '施肥人', val: data_.chemical[0].person},
        {key: '肥料名称', val: data_.chemical[0].cname},
        {key: '施肥时间', val: data_.chemical[0].c_time},
        {key: '施肥数量', val: data_.chemical[0].cnums},
        {key: '化肥规格', val: data_.chemical[0].cunit},
        {key: '农事操作图片', val:chemicalImg}
      ]
      this.dataList3 = [
        {key: '打药人', val: data_.poison[0].people},
        {key: '农药名称', val: data_.poison[0].name},
        {key: '打药时间', val: data_.poison[0].p_time},
        {key: '打药数量', val: data_.poison[0].nums},
        {key: '农药规格', val: data_.poison[0].unit},
        {key: '农事操作图片', val:poisonImg}
      ]
      this.dataList4 = [
        {key: '采摘作物', val: data_.harvest.s_name},
        {key: '采摘人', val: data_.harvest.person},
        {key: '采摘时间', val: data_.harvest.h_time},
        {key: '农事操作图片', val:harvestImg}
      ]
    },
    handleImg (resImg) {
      let imgArr = resImg.split(',')
      imgArr.pop()
      return imgArr
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


</style>
