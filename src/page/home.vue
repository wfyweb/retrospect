<template>
  <div>
      <loading v-if='isShow'></loading>
      <div class='wrap'>
          <div class='title-tab'>
            <tab active-color="#88C997">
              <tab-item selected @on-item-click="onItemClick">基本信息</tab-item>
              <tab-item @on-item-click="onItemClick">检测报告</tab-item>
              <tab-item @on-item-click="onItemClick">扶贫认证</tab-item>
              <span class="iconfont" ></span>
            </tab>
          </div>
          <information v-if="cou_index===0"></information>
          <reports v-if="cou_index==1"></reports>
          <authentic v-if="cou_index==2"></authentic>
          <toast v-model="showPositionValue"
            type="text"
            :time="800"
            is-show-mask
            :text="toastText"
            :position="position"
          ></toast>
      </div>
  </div>
</template>

<script>
import { Tab, TabItem, Toast } from 'vux'
import axios from 'axios'
import loading from '@/components/loading'
import information from './homeComponents/information'
import reports from './homeComponents/reports'
import authentic from './homeComponents/authentic'
export default {
  name: 'home',
  data () {
    return {
      cou_index: 0,
      isShow: false, // loading
      city: '',
      position: 'default',
      showPositionValue: false,
      toastText: ''
    }
  },
  components: {
    Tab,
    TabItem,
    Toast,
    loading,
    information,
    reports,
    authentic
  },
  mounted () {
    // 获取主页面数据
    // this.getData()
    this.init()
    this.timer = setTimeout(() => {
      this.showPosition('middle')
    }, 1000)
  },
  methods: {
    init () {
      console.log(localStorage.getItem('getLocation'))
    },
    getData () {
      console.log('data')
      axios.get('/api/sweep?batch=20181022135308').then(this.getDataSucc)
        .catch(err => {
          this.isShow = false
          console.log(err)
        })
    },
    getDataSucc (res) {
      console.log(res)
      if (res && res.data) {
        this.isShow = false
        this.response = res.data.providers
      } else {
        alert('请求失败，稍后重试')
      }
    },
    onItemClick (index) {
      this.cou_index = index
    },
    showPosition (position) {
      this.position = position
      this.toastText = '欢迎进入！'
      this.showPositionValue = true
    }
  }
}
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 100%;
    margin: 0 auto .9rem;
    background-color: #fff;
  }
  /* vux */
  .title-tab{
    width:100%;
    background:#fff;
    position:fixed;
    top:0;
    left:0;
  }
  .vux-tab .vux-tab-item {
    font-size:.28rem;
  }
</style>
