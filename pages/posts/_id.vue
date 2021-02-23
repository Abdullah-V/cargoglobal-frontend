<template>
  <div class="post-details-root">


    <div style="height: 130px;display: flex;align-items: center;justify-content: center;flex-direction: column">
      <h1 style="font-size: 40px">İlan detayları</h1>
      <hr style="width: 170px;margin-top: 20px">
    </div>


    <div class="action-buttons">
      <button
        @click="$router.go(-1)"
        class="primary-button"
        style="width: 13%;height: 45px;border-radius: 2px;font-size: 18px;"
      >
        <i class="fas fa-arrow-left"></i>
      </button>

      <button
        v-if="isMine"
        class="secondary-button"
        style="width: 13%;height: 45px;border-radius: 2px;font-size: 18px;"
      >
        <i class="fas fa-trash"></i>
      </button>

      <button @click="toggleLike()" v-if="!isLiked" class="like"> <i class="far fa-heart"></i> {{ infos.likeCount }} </button>
      <button @click="toggleLike()" v-if="isLiked" class="like" style="color: var(--primary-color)"> <i class="fas fa-heart"></i>
        {{ infos.likeCount }} </button>


<!--      <button-->
<!--        class="primary-button"-->
<!--        style="width: 26%;height: 45px;border-radius: 3px;font-size: 16px;"-->
<!--      >-->
<!--        <i style="margin: 0 8px 0 0" class="fas fa-phone-alt"></i>-->
<!--        Ara-->
<!--      </button>-->


      <button
        class="primary-button"
        style="width: 26%;height: 45px;border-radius: 3px;font-size: 16px;"
      >
        <a :href="'tel:' + infos.phoneNumber" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;color: white">
          <i style="margin: 0 8px 0 0" class="fas fa-phone-alt"></i>
          Ara
        </a>
      </button>

    </div>


    <div class="wrapper">

      <div class="first-details-container">

        <div class="start">
          <h2 style="color: #515151;font-weight: lighter">Çıkış: </h2>
          <div class="inner">

            <img style="
                        width: 60px;
                        height: 40px;
                        border-radius: 4px;
                      "
                 :src="infos.startFlag"
                 alt="">
            <h1>{{ infos.startCountry }} - {{ infos.startCity }}</h1>
            <v-date-picker
              :value="new Date(infos.startDate)"
              color="red"
              locale="tr"
              class="date-picker-displayer"
            />

          </div>
        </div>

        <div class="end">
          <h2 style="color: #515151;font-weight: lighter">Varış: </h2>
          <div class="inner">

            <img style="
                        width: 60px;
                        height: 40px;
                        border-radius: 4px;
                      "
                 :src="infos.endFlag"
                 alt="">

            <h1>{{ infos.endCountry }} - {{ infos.endCity }}</h1>
            <v-date-picker
              :value="new Date(infos.endDate)"
              color="red"
              locale="tr"
              class="date-picker-displayer"
            />

          </div>
        </div>

      </div>

      <div class="second-details-container">

        <div v-if="infos.additionalInformation" class="additional-infos">
          <h2 style="color: #515151;font-weight: lighter">Ek bilgiler: </h2>
          <pre style="text-align: center;font-size: 22px;margin: 30px 0px 0px 20px">{{ infos.additionalInformation }}</pre>
        </div>

        <div class="additional-infos2">

          <h3 class="key">Durum:</h3>

          <div style="display: flex;" v-if="status === 'red'">
            <span style="margin: 4px 10px 0 30px;width: 20px;height: 20px;border-radius: 10px;background: red;"></span>
            <h2 style="padding: 0;" class="value">Çıkmayı bekliyor</h2>
          </div>

          <div style="display: flex;" v-else-if="status === 'yellow'">
            <span style="margin: 4px 10px 0 30px;width: 20px;height: 20px;border-radius: 10px;background: yellow;"></span>
            <h2 style="padding: 0;" class="value">Yolda</h2>
          </div>

          <div style="display: flex;" v-else-if="status === 'green'">
            <span style="margin: 4px 10px 0 30px;width: 20px;height: 20px;border-radius: 10px;background: green;"></span>
            <h2 style="padding: 0;" class="value">Vardı</h2>
          </div>

<!--          {{ status }}-->

<!--          <h3 class="key">Çıkışa kalan:</h3>-->
<!--          <h2 class="value">2 gun 18 saat</h2>-->


          <h3 class="key">Telefon numarası :</h3>
          <h2 class="value">{{ infos.phoneNumber }}</h2>
          <h3 class="key">Yayınlanma tarihi:</h3>
          <h2 class="value">{{ new Date(infos.createdDate).getDate() }}.<span v-if="new Date(infos.createdDate).getMonth() <= 9">0</span>{{ new Date(infos.createdDate).getMonth() }}.{{ new Date(infos.createdDate).getFullYear() }}</h2>

        </div>

      </div>

    </div>


    <div style="margin-top: 20px;height: 130px;display: flex;align-items: center;justify-content: center;flex-direction: column">
      <h1 v-if="similarPosts.length" style="font-size: 40px">Benzer ilanlar</h1>
      <h1 v-else style="font-size: 40px">Benzer ilan bulunmuyor</h1>
      <hr v-if="similarPosts.length" style="width: 170px;margin-top: 20px">
      <hr v-else style="width: 250px;margin-top: 20px">
    </div>


    <lottie v-if="!similarPosts.length" width="50%" :height="400" :options="lottieOptions" v-on:animCreated="handleAnimation" />



    <div v-if="similarPosts.length" class="cards">
      <Card :key="post._id" v-for="post in similarPosts" :infos="post" />
    </div>


  </div>
</template>

<script>
import Card from "~/components/Card";
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/static/illustrations/blobs.json";

export default {
  components: {
    Card,
    lottie
  },
  created() {
    this.fetchData()
    // console.log(this.$route.query)
  },
  watch: {
    '$route': 'fetchData'
  },
  data() {
    return {
      infos: {},
      similarPosts: [],
      isMine: false,
      isLiked: false,
      status: "",
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
      },
    }
  },
  methods: {
    toggleLike(){
      if(this.isLiked) {
        this.infos.likeCount--
        this.isLiked = false
        this.$store.dispatch('toggleLike',{
          like: false,
          id: this.infos._id
        })
      }else {
        this.infos.likeCount++
        this.isLiked = true
        this.$store.dispatch('toggleLike',{
          like: true,
          id: this.infos._id
        })
      }
    },
    handleAnimation(anim) {
      this.anim = anim;
      // this.anim.setSpeed(1.5)
    },
    checkStatus(){
      const now = new Date()
      if(new Date(this.infos.startDate) >= now){
        this.status = "red"
      }
      else if(new Date(this.infos.startDate) <= now && new Date(this.infos.endDate) >= now){
        this.status = "yellow"
      }
      else if(now >= new Date(this.infos.endDate)) {
        this.status = "green"
      }
    },
    fetchData(){
      this.$axios.$post("https://cargoglobal-api.herokuapp.com/api/getSinglePost",{
          id: this.$route.params.id,
        API_KEY: process.env.API_KEY
        })
        .then(result => {
          if(result) {
            this.infos = result.post
            this.similarPosts = result.similarPosts
            this.isLiked = JSON.parse(localStorage.getItem('likes')).includes(this.infos._id)
            this.checkStatus()
            // console.log(result)
            if(process.client){
              this.isMine = JSON.parse(localStorage.getItem('posts')).includes(this.infos._id)
            }
          }else {
            // console.log("result is false")
            this.$router.push({path: "/404"})
          }
        })
    },
  },
  head() {
    return {
      title: "İlan detayları | CARGOGLOBAL"
    }
  },











  // middleware(context) {
  //   // context.$axios.$post(process.env.API_URL + "/getSinglePost",{
  //   //   id: context.params.id
  //   // })
  //   // .then(result => {
  //   //   this.infos = result.post
  //   //   this.similarPosts = result.similarPosts
  //   //   console.log(result)
  //   //   console.log("Selamun Aleykum")
  //   // })
  //   // console.log("Selamun Aleykum2")
  // //   fetch(process.env.API_URL + "/getSinglePost",{
  // //     method: 'POST',
  // //     body: {
  // //       id: context.params.id
  // //     }
  // //   })
  // //     .then((resp) => resp.json())
  // //     .then(data => {
  // //       console.log(data)
  // //     },
  // },













}

</script>

<style scoped>compact

.post-details-root {
  width: 100%;
  height: auto;
  padding: 10px 0 30px 0;
}

.wrapper {
  width: 90%;
  min-height: 90vh;
  height: auto;
  background: white;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  /*align-items: center;*/
  /*justify-content: center;*/

  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
}

.action-buttons {
  width: 400px;
  height: 65px;
  background: white;
  margin: 20px auto 40px auto;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
}

.action-buttons .like{
  font-size: 18px;
  width: 19%;
  height: 50px;
  border: 0;
  background: transparent;
  transition: 300ms all;
  border-radius: 3px;
  /*color: #393939;*/
  background: var(--tertiary-color);
  color: var(--primary-color);
}

.action-buttons .like:hover{
  background: #f6d5d4;
}

.first-details-container {
  width: 100%;
  height: 80vh;
  /*background: black;*/
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.first-details-container .start,
.first-details-container .end {
  width: 40%;
  height: 90%;
  /*background: red;*/
  padding: 10px;
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.second-details-container {
  width: 100%;
  height: 65vh;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  /*background: black;*/
  /*display: flex;*/
  /*justify-content: space-around;*/
  /*align-items: center;*/
}

.additional-infos {
  width: 45%;
  height: 100%;
  /*background: red;*/
  padding: 10px;
}

.additional-infos2 {
  height: 80%;
  width: 35%;
  background: #F4F4F4;
  border-radius: 5px;
  padding: 20px 0 0 25px;
}

pre {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
}

.key {
  color: #515151;
  margin-bottom: 8px;
  font-weight: lighter;
}

.value {
  padding-left: 30px;
  margin-bottom: 40px;
  font-weight: lighter;
}

.date-picker-displayer {
  pointer-events: none;
  width: 80%
}

.cards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media only screen and (max-width: 960px) {
  .first-details-container {
    flex-direction: column;
    height: 90%;
  }
  .wrapper {
    min-height: 200vh;
  }
  .first-details-container .start,
  .first-details-container .end {
    margin-bottom: 30px;
    width: 70%;
    height: 70vh;
  }
}

@media only screen and (max-width: 815px) {
  .second-details-container {
    height: 80vh;
    flex-direction: column;
    align-items: center;
  }
  .wrapper {
    min-height: 280vh;
  }
  .additional-infos {
    width: 80%;
    height: 60%;
  }
  .additional-infos2 {
    width: 80%;
    height: 75%;
  }
}

@media only screen and (max-width: 600px) {
  .date-picker-displayer {
    width: 100%;
  }
  .second-details-container {
    margin-top: 150px;
  }
  .first-details-container,
  .first-details-container .end,
  .first-details-container .start,
  .inner {
    width: 100%;
  }
  .additional-infos2 {
    margin-top: 130px;
  }
}

@media only screen and (max-width: 455px) {
  .action-buttons {
    width: 90%;
  }
}

</style>
