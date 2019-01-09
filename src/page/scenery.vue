<template>
  <div class='container'>
      <div class='describe'>
        <div class='title'>
          河南佳尚农业科技有限公司扶贫简介
        </div>
        <div class='info'>
          <p>公司通过种植突尼斯石榴和迷迭香，每年补贴农户160多万元，积极实施土地的改造治理，有效实现环境治理和生态修复，使不毛之地成为旱涝保收的“聚宝盆”，常年安排农村剩余劳动力就业150余人，每人年均收入20000元；季节性农民工就业1000余人，每年年均收入3000元，使许多农户增加了收入，改善了生活状况，实现了精准扶贫。</p>
          <p>一、通过流转土地带贫，租赁贫困户的土地，使贫困户可以通过收取租金增加稳定的收入，目前流转6个行政村2800亩土地，基地涉及土地流转贫困户38户114人，土地流转金500-800元/亩。</p>
          <p>二、通过使用贫困户务工带贫，公司聘用高村、辛集村、盆郭村、漫流村、柴庄村、清水村等村的贫困户到基地务工，带动贫困户273户310人。</p>
          <p>三、通过合作经营带贫，公司在两个贫困村成立了2个石榴和迷迭香种植的合作社，公司与6户16人签订订单种植合同，是每个贫困户每年增收4000多元。</p>
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
  methods: {}
}
</script>

<style scoped>
.container {
  background-color: #fff;
  padding: 0.3rem 0.3rem 1rem;
  border-radius: 0.1rem;
}
.describe {
  width: 100%;
  margin-top: 0.2rem;
  overflow: hidden;
}
.title {
  font-weight: 600;
  font-size: 0.38rem;
  color: #333;
  width: 100%;
  text-align: center;
  margin-bottom: 0.3rem;
}
.info {
  font-size: 0.3rem;
  line-height: 0.4rem;
  color: #666;
}
.info p {
  text-indent: 2em;
}
</style>
