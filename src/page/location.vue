<template>
  <div>
      <loading v-if='isShow'></loading>
      <div class="gps">
          <div class="gps-top">
              <img src="../assets/image/gps.gif">
          </div>
          <div class="description">
              为提高溯源信息的位置精准度，需要提供您当前的位置信息 <br/>
          </div>
          <div class="confirm" @click="getLocation">我知道了</div>
      </div>

  </div>
</template>

<script>
import loading from '@/components/loading'
export default {
  name: 'location',
  data () {
    return {
      isShow: false, // loading
      city: ''
    }
  },
  components: {
    loading
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      console.log(localStorage.getItem('getLocation'))
      //  判断是否  显示获取位置组件
      if (localStorage.getItem('getLocation') !== null) {
        this.openNext()
      }
    },
    getLocation () {
      /* eslint-disable */
      this.isShow = true// 显示loading
      var self = this
      var geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        // 获取当前经纬度
        if (this.getStatus() === BMAP_STATUS_SUCCESS) {
            var myGeo = new BMap.Geocoder()
            myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){
                if (result){
                    self.city = result.addressComponents.city
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
      // ajax callback(){
      this.isShow = false
      this.$router.push({ name: 'home', path: '/home'})
      // }
    }
  }
}
</script>

<style scoped>
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

</style>
