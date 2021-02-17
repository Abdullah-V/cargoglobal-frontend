<template>
  <div class="index-root">


    <div v-if="$store.state.posts" style="height: 100px;display: flex;align-items: center;justify-content: center;flex-direction: column">
      <h1 style="font-size: 40px">Tüm ilanlar</h1>
      <hr style="width: 150px;margin-top: 20px">
    </div>


    <span v-for="item in $store.state.countries">



<!--<img class="flag" :src="item.flag" alt="">-->

<!--    <Flag-->
<!--      class="flag"-->
<!--      :code="item.alpha2Code"-->
<!--      size="L"-->
<!--      style="margin-bottom: 5px"-->
<!--    />-->

    </span>


    <div class="cards" v-if="$store.state.posts">

      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>

      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>

      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>

    <div v-if="!$store.state.posts" class="lottie-container">
      <h1 style="color: #4a4a4a;text-align: center;margin-top: 20px;font-size: 40px">İlan yok.<br><nuxt-link style="font-size: 30px" to="/new" tag="a">Eklemeye ne dersin?</nuxt-link> </h1>
      <lottie :width="'50%'" :height="500" :options="lottieOptions" v-on:animCreated="handleAnimation" />
    </div>

  </div>
</template>

<script>
import Card from "~/components/Card";
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/static/illustrations/moon-animation.json";

export default {
  name: "index",
  components: {
    Card,
    lottie
  },
  data(){
    return {
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
      }
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
      // this.anim.setSpeed(1.5)
    }
  },
  head(){
    return {
      title: "Tüm ilanlar | CARGOGLOBAL"
    }
  }
}
</script>

<style scoped>

.index-root{
  max-width: 100vw;
  min-height: 100vh;
  height: auto;
  padding: 15px 0px;
}

.cards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}


</style>
