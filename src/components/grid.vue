<template>
  <div class='grid-wrap border-radius' >
      <div class='grid-title' v-if="title">
        {{title}}
      </div>
        <ul class="grid-list">
          <li v-for=' (item,index) in dataList' :key='index'>
              <div class='info' >{{item.key}}</div>
              <div class='des' >{{item.val}}</div>
            </li>
        </ul>
      <div class="map" v-if="isMap">
          <map-grid :lng = lng :lat = lat></map-grid>
      </div>

  </div>
</template>

<script>
import mapGrid from './mapGrid'
export default {
  name: 'grid',
  props: ['dataList', 'title', 'isMap', 'lng', 'lat'],
  components: {
    mapGrid
  },
  mounted () {

  },
  data () {
    return {
      listData: []
    }
  },
  watch: {
    'dataList' (val) {
      if (val.length !== 0) {
        this.listData.push(val)
      }
    }
  }
}
</script>

<style scoped>
    .border-radius{
      border-radius: 0.1rem;
    }
    .grid-wrap{
      width: 100%;
      margin-top:0.4rem;
      overflow: hidden;

    }
    .grid-title{
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      font-weight: 700;
      background-color: #99dac5;
    }
    .grid-list{
      width: 100%;
      overflow: hidden;
      list-style: none;
    }
    .grid-list li{
      font-size: 0.26rem;
      height: 0.7rem;
      line-height: 0.7rem;

    }
    .grid-list li:nth-child(odd){
       background: #eaeaea;
    }
    .grid-list li:nth-child(even){
      background: #f5f5f5;
    }
    .grid-list li .info,.grid-list li .des{
      float: left;
    }
    .info{
      width: 25%;
      padding-right: 0.2rem;
      text-align: right
    }
    .des{
      padding-left: 0.2rem;
      text-align: right;
      color:#888;
    }
    .map{
      width: 100%;
      height: 2.25rem;
      background: #f9f9f9;
    }
</style>
