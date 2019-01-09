<template>
  <!-- vux 图片预览previewer组件 -->
  <div>
    <img class="previewer-demo-img"
      v-for="(item, index) in dataList"
      :src="item.src"
      @click="show(index)"
      :key="index"
    >
    <div v-transfer-dom>
      <previewer :list="dataList" ref="previewer" :options="options"></previewer>
    </div>
  </div>
</template>

<script>
import { Previewer, TransferDom } from 'vux'

export default {
  name: 'previewers',
  props: ['dataList'],
  directives: {
    TransferDom
  },
  components: {
    Previewer
  },
  methods: {
    show (index) {
      this.$refs.previewer.show(index)
    }
  },
  data () {
    return {
      options: {
        getThumbBoundsFn (index) {
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          let rect = thumbnail.getBoundingClientRect()
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        }
      }
    }
  }
}
</script>
<style scoped>
  .previewer-demo-img{
    float: left;
    width: 1.4rem;
    margin-right:.2rem;
  }
</style>
