<template>

  <div style="padding-top: 30px" class="disconnected-root">
    <lottie width="100%" :height="450" :options="lottieOptions" v-on:animCreated="handleAnimation" />
    <h1 style="text-align: center;margin-top: 20px;color: #262626">İnternet bağlantısı yok. <br><br> Lütfen internete bağlandığınızda tekrar deneyin.</h1>
  </div>

</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/static/illustrations/disconnected.json";

export default {
  name: "disconnected",
  layout: "error-layout",
  // middleware(context){
  //   console.log("disconnected middleware")
  // },
  components: {
    lottie
  },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
      },
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
  },
}
</script>

<style scoped>

</style>
