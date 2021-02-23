<template>
  <div class="my-posts-root">
    <div style="margin: 80px 0" v-if="!posts.length" class="not-likes">
      <h1 style="text-align: center;font-size: 42px">İlanınız yok.</h1>
      <lottie width="50%" :height="500" :options="lottieOptions" v-on:animCreated="handleAnimation" />
    </div>
    <div v-if="posts.length" style="height: 130px;display: flex;align-items: center;justify-content: center;flex-direction: column">
      <h1 style="font-size: 40px">İlanlarınız</h1>
      <hr style="width: 130px;margin-top: 20px">
      <h3 style="margin-top: 15px;color: #4a4a4a">Toplam {{ posts.length }} ilanınız var</h3>
    </div>
    <div v-if="posts.length" class="my-posts">
      <Card v-for="post in posts" :key="post._id" :infos="post" />
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/static/illustrations/empty-state.json";
import Card from "~/components/Card";

export default {
  components: {
    Card,
    lottie
  },
  head() {
    return {
      title: "Benim ilanlarım | CARGOGLOBAL"
    }
  },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
      },

      posts: [],
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    }
  },
  name: "likes",
  created() {
    if(process.client){
      if(JSON.parse(localStorage.getItem('posts')).length){
        this.$axios.$post(process.env.API_URL + "/getMultiplePostsByID",{
          arr: JSON.parse(localStorage.getItem('posts'))
        })
          .then(result => {
            this.posts = result
          })
      }else {}
    }
  },
}
</script>

<style scoped>

.my-posts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>
