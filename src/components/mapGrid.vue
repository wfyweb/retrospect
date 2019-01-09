<template>
  <!-- 地图组件 -->
  <div id='allmap'></div>
</template>
<script>

export default {
  data () {
    return {
      city: '平顶山',
      lng: '',
      lat: ''
    }
  },
  mounted () {
    this.ready()
  },
  methods: {
    ready () {
      /* eslint-disable */
      // 百度地图API功能
      var map = new BMap.Map('allmap')
      var localSearch = new BMap.LocalSearch(map)
      var that = this
      localSearch.setSearchCompleteCallback((searchResult)=>{
        // 获取指定城市 经纬度
        var poi = searchResult.getPoi(0);
        that.lng = poi.point.lng
        that.lat = poi.point.lat

        // 创建地图实例 传递经纬度
        var point = new BMap.Point(that.lng, that.lat)
        // 创建点坐标
        map.centerAndZoom(point, 11)
        // 初始化地图， 设置中心点坐标和地图级别
        var marker = new BMap.Marker(point)
        map.addOverlay(marker)
      })
      localSearch.search(this.city)
    }
  }
}
</script>

<!--Add'scoped' attribute to limit CSS to this component only -->
<style scoped>
  #allmap{
    margin-top: 1.5rem;
    width: 100%;
    height: 2.5rem;
    -webkit-transform: scale(2);
    -webkit-transform-origin: 1 0;
    transform: scale(2);
    transform-origin: 1 0;
  }
</style>
