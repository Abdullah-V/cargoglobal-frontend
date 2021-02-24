<template>
  <div class="search-root">
    <div style="margin-top: 90px" v-if="!posts.length" class="not-result">
      <h1 style="font-size: 38px;text-align: center"><span style="color: red;font-weight: bolder">{{ term }}</span> ile ilgili hiçbir ilan bulunamadı :(</h1>
    </div>
    <div v-if="!posts.length" class="not-result">
      <lottie width="50%" :height="400" :options="lottieOptions" v-on:animCreated="handleAnimation" />
    </div>
    <div v-if="posts.length" style="height: 130px;display: flex;align-items: center;justify-content: center;flex-direction: column">
      <h1 style="font-size: 40px">Arama sonuçları</h1>
      <hr style="width: 150px;margin-top: 20px">
      <h3 style="margin-top: 15px;color: #4a4a4a"><span style="color: red;font-weight: bolder">{{ term }}</span> ile igili toplam {{ posts.length }} ilan bulundu</h3>
    </div>
    <div v-if="posts.length" class="results">
      <Card v-for="post in posts" :key="post._id" :infos="post" />
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/static/illustrations/sad-search.json";
import Card from "~/components/Card";

export default {
  name: "search",
  components: {
    Card,
    lottie
  },
  watch: {
    '$route': 'fetchData'
  },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
      },

      posts: [],
      term: "",
    }
  },
  head() {
    return {
      title: "Arama sonuçları | CARGOGLOBAL"
    }
  },
  created() {
      this.fetchData()
  },
  methods: {
    fetchData(){
      this.term = this.$store.state.searchText
      var r = /^[a-z0-9]+$/i
      // console.log(this.$route.query)
      if(this.$route.query.q && r.test(this.$route.query.q)){
        this.$axios.$post("https://cargoglobal-api.herokuapp.com/api/search",{
          text: String(this.$route.query.q),
          API_KEY: process.env.API_KEY
        })
        .then(result => {
          this.posts = result
          // console.log(result + "Selamun Alyekum")
        })

        // console.log(true)
      }else {
        this.$router.push("/")
        // console.log(false)
      }
    },
  },
  handleAnimation(anim) {
    this.anim = anim;
    // this.anim.setSpeed(0.5)
  }
}
</script>

<style scoped>

.results {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>
