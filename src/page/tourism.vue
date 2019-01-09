<template>
  <div class='box'>
      <loading v-if='isShow'></loading>
      <div class='wrap'>
        <div class='container'>
            <div class='swpier'>
              <img src='https://youimg1.c-ctrip.com/target/100e090000003tae8BAC6_C_500_280_Q60.jpg' alt=''>
            </div>
            <div class='describe'>
              <p>中原大佛景区坐落在鲁山县城西50公里，郑州至尧山高速公路终点，与311国道交汇处，景区交通便利，群山环抱，山清水秀，环境优美，人文景观与自然景观荟萃，拥有世界第一佛、第一钟，大陆第一汤，伏牛山区第一寺等丰富的旅游文化资源，是集佛教文化，温浴辽养、观光旅游、休闲娱乐于一体的旅游胜地，是河南伏牛山生态游的龙头景区。</p>
            </div>
            <div class="toast">
              中原大佛
            </div>
        </div>
        <div class='container'>
            <div class='swpier'>
              <img src='https://youimg1.c-ctrip.com/target/100e090000003tae8BAC6_C_500_280_Q60.jpg' alt=''>
            </div>
            <div class='describe'>
              <p>中原大佛景区坐落在鲁山县城西50公里，郑州至尧山高速公路终点，与311国道交汇处，景区交通便利，群山环抱，山清水秀，环境优美，人文景观与自然景观荟萃，拥有世界第一佛、第一钟，大陆第一汤，伏牛山区第一寺等丰富的旅游文化资源，是集佛教文化，温浴辽养、观光旅游、休闲娱乐于一体的旅游胜地，是河南伏牛山生态游的龙头景区。</p>
            </div>
            <div class="toast">
              中原大佛
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import loading from '@/components/loading'
export default {
  name: 'order',
  data () {
    return {
      isShow: false
    }
  },
  components: {
    loading
  },
  mounted () {
    // this.getData()
  },
  methods: {

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
    border-radius:0.1rem;
    background:#fff;
    position: relative;
    overflow: hidden;

  }
  .toast{
    position: absolute;
    top:0;
    left: 0;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: .55rem;
    line-height: .55rem;
    font-weight: bold;
    color: #fff;
    text-indent: .2rem;
  }
  .swpier{
    width: 100%;
    height: 3.5rem;
  }
  .swpier img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .describe{
    width: 100%;
    overflow: hidden;
  }
  .describe p{
    margin: .2rem;
    line-height: .4rem;
    font-size: .26rem;
    color: #666;
    text-indent: .4rem;
  }
</style>
