<template>
  <div id='allmap'></div>
</template>
<script>

export default {
  name: 'mapGrid',
  props: ['lng', 'lat'],
  methods: {
    ready () {
      /* eslint-disable */
      // 百度地图API功能
      var map = new BMap.Map('allmap')
      var localSearch = new BMap.LocalSearch(map)
      var point = new BMap.Point(this.lng, this.lat)
      // 创建点坐标
      map.centerAndZoom(point, 12)
      // 初始化地图， 设置中心点坐标和地图级别
      var marker = new BMap.Marker(point)
      map.addOverlay(marker)
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
