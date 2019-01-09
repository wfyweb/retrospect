<template>
  <div v-if='showNav'>
    <tabbar class="vux-demo-tabbar" icon-class="vux-center">
      <tabbar-item v-for="(item,index) in footerlist"
        :key='index'
        :link = item.url
        :selected="route === item.url"
      >
        <span slot="icon" class="iconfont" v-html= item.icon> </span>
        <span slot="label">{{item.title}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'footerNav',
  components: {
    Tabbar,
    TabbarItem
  },
  props: {
    'showNav': {
      type: Boolean
    }
  },
  data () {
    return {
      footerlist: [{
        title: '扶贫产品',
        url: '/home',
        icon: '&#xe63c;'
      }, {
        title: '生产企业',
        url: '/enterprise',
        icon: '&#xe62b;'
      }, {
        title: '扶贫简介',
        url: '/scenery',
        icon: '&#xe65a;'
      }]
    }
  },
  // 计算路由 url
  computed: {
    route () {
      return this.$route.path
    }
  },
  methods: {

  }
}
</script>

<style>
  .demo-icon-22:before {
    content: attr(icon);
  }
</style>
