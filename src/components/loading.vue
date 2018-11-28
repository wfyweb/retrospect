<template>
  <div class="microPageLoading" >
    <div class="spinner">
        <div class="rect rect1"></div>
        <div class="rect rect2"></div>
        <div class="rect rect3"></div>
        <div class="rect rect4"></div>
        <div class="rect rect5"></div>
    </div>
</div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
      /*等待效果*/
    .microPageLoading{position: fixed;width:100%;height:100%;left:0;top:0;right:0;margin:auto;z-index: 100;background:rgba(255,255,255,0.8);}
    /* .microPageLoading img{position: absolute;left: 0;right: 0;top: 0;bottom: 0;width: 54px;margin:auto;} */
    /*css3-等待效果*/
    .spinner {position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin:auto; width:2rem; height: 1.2rem; text-align: center; font-size: .2rem; }
    .spinner > .rect {background-color: #67CF22; height: 100%; width: 0.12rem; display: inline-block; -webkit-animation: stretchdelay 1.2s infinite ease-in-out; animation: stretchdelay 1.2s infinite ease-in-out; }
    .spinner .rect2 {-webkit-animation-delay: -1.1s; animation-delay: -1.1s; }
    .spinner .rect3 {-webkit-animation-delay: -1.0s; animation-delay: -1.0s; }
    .spinner .rect4 {-webkit-animation-delay: -0.9s; animation-delay: -0.9s; }
    .spinner .rect5 {-webkit-animation-delay: -0.8s; animation-delay: -0.8s; }
    @-webkit-keyframes stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
        20% { -webkit-transform: scaleY(1.0) }
    }
    @keyframes stretchdelay {
        0%, 40%, 100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
        }  20% {
               transform: scaleY(1.0);
               -webkit-transform: scaleY(1.0);
           }
    }
</style>
