<template>
  <div class="info-list">
    <div class="list-header">
        <div class="header-line"></div>
        <div class="header-info">{{title}}</div>
    </div>
    <ul class="list-col">
      <li v-for=' (item,index) in dataList' :key='index'>
          <div class='col-key' :class="{'w-100':index===dataList.length-1}">{{item.key}}</div>
          <div class='col-val' v-if='index!=dataList.length-1'>{{item.val}}</div>
          <div class='col-img' v-else >
            <img :src = urlItem v-for="(urlItem,urlIndex) in item.val" :key='urlIndex'>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'gridRecord',
  props: ['dataList', 'title'],
  components: {

  },
  mounted () {

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
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
    height: 2.11rem;
  }
  .col-img img:last-child{
    padding-right:0;
    padding-left:0;
  }
</style>
