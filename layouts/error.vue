<template>
  <div class="error-root">

    <div style="margin-top: 20px" v-if="error.statusCode == 404">
      <lottie width="50%" :height="450" :options="lottieOptions404" v-on:animCreated="handleAnimation" />
      <h1 style="text-align: center;margin-top: 20px">Sayfa bulunamadı <br><br> <a href="/"> <button style="width: 115px;height: 45px;border-radius: 3px;" class="secondary-button">Eve dön</button></a> </h1>

    </div>

    <div v-else>
      <lottie width="50%" :height="400" :options="lottieOptions500" v-on:animCreated="handleAnimation" />
      <h1 style="text-align: center;margin-top: 20px">Bilinmedik bir sorunla karşı karşıyayız.Lütfen bizimle <a class="link" href="https://t.me/Abdullah_V_2005">iletişime geçin</a> <br><br> <a href="/"> <button style="width: 115px;height: 45px;border-radius: 3px;" class="secondary-button">Eve dön</button></a> </h1>

    </div>



<!--    <div>-->
<!--      <lottie width="50%" :height="400" :options="lottieOptions500" v-on:animCreated="handleAnimation" />-->
<!--      <h1 style="text-align: center;margin-top: 20px">Bilinmedik bir sorunla karşı karşıyayız.Lütfen bizimle <a href="https://t.me/Abdullah_V_2005">iletişime geçin</a> <br><br> <a href="/"> <button style="width: 115px;height: 45px;border-radius: 3px;" class="secondary-button">Eve dön</button></a> </h1>-->

<!--    </div>-->



  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData404 from "~/static/illustrations/404.json";
import * as animationData500 from "~/static/illustrations/server-error.json";

export default {
  name: "error",
  components: {
    lottie
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: "error-layout",
  head() {
    return {
      title: this.error.statusCode == 404 ? "Sayfa bulunamadı | CARGOGLOBAL" : "Sunucu hatası | CARGOGLOBAL"
    }
  },
  data(){
    return {
      anim: null,
      lottieOptions404: {
        animationData: animationData404.default
      },
      lottieOptions500: {
        animationData: animationData500.default
      },
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
      // this.anim.setSpeed(1.5)
    }
  },
}
</script>

<style scoped>

.error-root {
  overflow: hidden;
}

</style>




































<!--<template>-->
<!--  <div>-->
<!--    <h1>error.vue</h1>-->

<!--&lt;!&ndash;    <lottie&ndash;&gt;-->
<!--&lt;!&ndash;      width="50%"&ndash;&gt;-->
<!--&lt;!&ndash;      :height="500"&ndash;&gt;-->
<!--&lt;!&ndash;      :options="lottieOptions404"&ndash;&gt;-->
<!--&lt;!&ndash;      v-on:animCreated="handleAnimation" />&ndash;&gt;-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--// import lottie from "vue-lottie";-->
<!--// import * as animationData404 from "~/static/illustrations/404.json";-->


<!--export default {-->
<!--  name: "error",-->
<!--  layout: "error-layout",-->
<!--  // components: {-->
<!--  //   lottie-->
<!--  // },-->
<!--  // data(){-->
<!--  //   return {-->
<!--  //     anim: null,-->
<!--  //     lottieOptions404: {-->
<!--  //       animationData: animationData404.default-->
<!--  //     }-->
<!--  //   }-->
<!--  // },-->
<!--  // methods: {-->
<!--  //   handleAnimation(anim) {-->
<!--  //     this.anim = anim;-->
<!--  //     // this.anim.setSpeed(1.5)-->
<!--  //   }-->
<!--  // },-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
