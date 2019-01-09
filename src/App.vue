<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
    <footer-nav :showNav = showNav></footer-nav>
  </div>
</template>

<script>
import footerNav from './components/footerNav'
export default {
  name: 'App',
  components: {
    footerNav
  },
  data () {
    return {
      showNav: true
    }
  },
  methods: {
    routeChange () {
      let path = this.$route.path
      this.showNav = path !== '/'
    }
  },
  created () {
    this.routeChange()
  },
  watch: {
    // 如果路由有变化，会执行该方法
    '$route': function () {
      this.routeChange()
    }
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .weui-tabbar {
    position: fixed !important;
  }
  .weui-tabbar__label {
    font-size: 0.24rem!important;
  }
</style>
