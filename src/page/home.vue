<template>
  <!-- 产品信息 -->
  <div>
      <loading v-if='isLoading'></loading>
      <div class="gps" v-if="isHome">
          <div class="gps-top">
              <img src="../assets/image/gps.gif">
          </div>
          <div class="description">
              为提高溯源信息的位置精准度，需要提供您当前的位置信息 <br/>
          </div>
          <div class="confirm" @click="getLocation">我知道了</div>
      </div>
      <div class='wrap' v-else>
        <div class='container'>
            <div class='swpier'>
              <img :src = batImg alt=''>
            </div>
            <div class='describe'>
              <div class='desLeft'>
                <div class='left-top'>
                  {{name}} <span>{{weight}}</span>
                </div>
                <div class='left-bottom'>
                  产自{{address}}
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
            <grid :dataList = dataList1 title='产品信息'></grid>
            <grid :dataList = dataList2 title='环境气候'></grid>
            <keep-alive>
              <grid :dataList = dataList3 title='区域信息' isMap="true" :lng = lng :lat = lat></grid>
            </keep-alive>
            <div class='btn-list'>
              <router-link class='btn' to="/record">生产日志</router-link>
              <router-link class='btn' to="/check">检测报告</router-link>
            </div>
            <!-- <div class='btn-list m-top'>
              <router-link class='btn' to="/enterprise">企业信息</router-link>
              <router-link class='btn' to="/order">进货记录</router-link>
            </div> -->
        </div>
      </div>
  </div>
</template>

<script>
import loading from '@/components/loading'
import grid from '@/components/grid'
export default {
  name: 'location',
  data () {
    return {
      token: '',
      isLoading: false,
      isHome: true,
      city: '',
      name: '',
      address: '',
      lng: '',
      userLng: '',
      lat: '',
      userLat: '',
      weight: '',
      batImg: '',
      dataList1: [ ],
      dataList2: [ ],
      dataList3: [ ]
    }
  },
  components: {
    loading,
    grid
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 获取当前URL的token
      this.token = this.getStr(window.location.href, '?')
      localStorage.setItem('token', this.token)
      console.log(localStorage.getItem('getLocation'))
      //  判断是否  显示获取位置组件
      if (localStorage.getItem('getLocation') !== null) {
        this.isHome = false
        this.openNext()
      }
    },
    getData () {
      this.$store.dispatch('saveForm', this.token)
    },

    getLocation () {
      /* eslint-disable */
      this.isLoading = true// 显示loading
      var self = this

      var geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        // 获取当前经纬度
        if (this.getStatus() === BMAP_STATUS_SUCCESS) {
            var myGeo = new BMap.Geocoder()
            myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){
                if (result){
                    self.city = result.addressComponents.city
                    self.userLng = r.point.lng
                    self.userLat = r.point.lat
                    localStorage.setItem('getLocation', self.city)
                    self.openNext()
                } else {
                    self.openNext()
                }
            })
        }
      })
    },
    openNext () {
      this.isHome = false
      this.getData()
    },
    // 获取接口数据 返回所需格式
    handleData (data_) {
      this.isLoading = false
      this.name = data_.chemical[0].s_name
      this.address = data_.farm.p_name
      this.lng = data_.farm.p_longitude
      this.lat = data_.farm.p_latitude
      console.log(this.lng,this.lat);

      this.weight = data_.package.weight
      this.batImg = this.global.weburl + this.handleImg(data_.package.bat_img)[0]


      this.dataList1 = [
        {key: '产品名称', val: data_.chemical[0].s_name},
        {key: '净含量', val: data_.package.weight},
        {key: '保质期', val: '6个月'},
        {key: '储存条件', val: data_.package.storage},
        {key: '生产许可证', val: 'SC13254126'},
        {key: '生产标准', val: 'GB/T 10032'},
        {key: '生产基地', val: data_.farm.p_name},

      ]

      this.dataList2 = [
        {key: '产地', val: data_.farm.p_address},
        {key: '天气', val: '多云转晴'},
        {key: '最高温度', val: '20°C'},
        {key: '最低温度', val: '12°C'},
        {key: '湿度', val: '80%'},
        {key: '空气质量', val: '优'}
      ]

      this.dataList3 = [
        {key: '生产基地', val: data_.farm.p_name},
        {key: '所属行业', val: data_.farm.p_industry},
        {key: '负责人', val: data_.farm.p_person},
        {key: '联系电话', val: data_.farm.p_phone},
        {key: '基地地址', val: data_.farm.p_address}
      ]

    },
    getStr (string,str) {
      return string.split(str)[1]
    },
    handleImg (resImg) {
      let imgArr = resImg.split(',')
      imgArr.pop()
      return imgArr
    }
  },
  computed:{
    Loading () {
      return this.$store.state.Loading
    }
  },
  watch: {
    Loading ( val ) {
      if( val ) {
        this.handleData(this.$store.state.data)
      }
    }
  }
}
</script>

<style scoped>
  .gps{
    width: 100%;
    height: 100%;
    max-width: 10rem;
    margin: 0 auto;
  }
  .gps-top{
    width: 100%;
    height: 100%;
    max-width: 10rem;
  }
  .gps-top img {
    width: 100%;
  }

  .confirm {
    text-align: center;
    height: .88rem;
    line-height: .88rem;
    background-color: #ff4d00;
    color: #fff;
    border-radius: .6rem;
    width: 90%;
    margin: 0 auto;
  }

  .description {
    margin: 0 auto;
    padding: 5% 5% 15% 5%;
    font-size: .32rem;
    line-height: .5rem;
    font-weight: bold;
    text-align: center;
  }

  .cjm-footer,
  .cjm-footer a {
    color: #ccc;
    text-decoration: none;
  }

  .cjm-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: .28rem;
    padding-bottom: .4rem;
    color: #ccc;
    width: 100%;
    text-align: center;
  }
  .wrap{
    width: 100%;
    height: 100%;
    max-width: 10rem;
    padding-bottom:1rem;
    margin: 0 auto;
    background-color: #fff;
  }
  .container{
    margin: .3rem;
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
  .btn-list{
    width: 100%;
    margin-top:0.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  .m-top{
    margin-top:0;
  }
  .btn{
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    text-align: center;
    background: #5eba9c;
    border-radius:0.2rem;
    margin-bottom: 0.3rem;
    flex:1;
  }
  .btn:nth-child(odd){
    margin-right: 0.2rem;
  }
</style>
