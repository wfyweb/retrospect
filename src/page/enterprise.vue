<template>
  <div class="box">
      <loading v-if='isShow'></loading>
      <div class='wrap'>
        <div class='title-tab'>
          <tab active-color="#88C997">
            <tab-item selected @on-item-click="onItemClick">基本信息</tab-item>
            <tab-item @on-item-click="onItemClick">企业资质</tab-item>
          </tab>
        </div>
        <enterInformation v-if="cou_index==0"></enterInformation>
        <enterReports v-if="cou_index==1"></enterReports>
      </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import enterInformation from './enterComponents/information'
import enterReports from './enterComponents/reports'
import axios from 'axios'
import loading from '@/components/loading'
export default {
  name: 'enterprise',
  components: {
    loading,
    Tab,
    TabItem,
    enterInformation,
    enterReports
  },
  data () {
    return {
      isShow: false,
      cou_index: 0
    }
  },
  mounted () {
    // this.getData()
  },
  methods: {
    getData () {
      console.log('data')
      axios.get('/api/sweep?batch=20181022135308').then(this.getDataSucc)
        .catch(err => {
          this.isShow = false
          console.log(err)
        })
    },
    getDataSucc (res) {
      // console.log(res.data.im_porduct)
      if (res && res.data) {
        this.isShow = false
        this.name = res.data.providers.p_name
        this.response = res.data.providers
      } else {
        alert('请求失败，稍后重试')
      }
    },
    onItemClick (index) {
      this.cou_index = index
    }
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
