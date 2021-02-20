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
        class="secondary-button"
        style="width: 13%;height: 45px;border-radius: 2px;font-size: 18px;"
      >
        <i class="fas fa-trash"></i>
      </button>

      <button @click="toggleLike()" v-if="!isLiked" class="like"> <i class="far fa-heart"></i>  86 </button>
      <button @click="toggleLike()" v-if="isLiked" class="like" style="color: var(--primary-color)"> <i class="fas fa-heart"></i>  86 </button>

      <button
        class="primary-button"
        style="width: 26%;height: 45px;border-radius: 3px;font-size: 16px;"
      >
        <i style="margin: 0 8px 0 0" class="fas fa-phone-alt"></i>
        Ara
      </button>

    </div>


    <div class="wrapper">

      <div class="first-details-container">

        <div class="start">
          <h2 style="color: #515151;font-weight: lighter">Cikis: </h2>
          <div class="inner">

            <img style="
                        width: 60px;
                        height: 40px;
                        border-radius: 4px;
                      "
                 src="https://restcountries.eu/data/aze.svg"
                 alt="">
            <h1>Azerbaijan - Naxcivan</h1>
            <v-date-picker
              :value="new Date()"
              color="red"
              locale="tr"
              class="date-picker-displayer"
            />

          </div>
        </div>

        <div class="end">
          <h2 style="color: #515151;font-weight: lighter">Varis: </h2>
          <div class="inner">

            <img style="
                        width: 60px;
                        height: 40px;
                        border-radius: 4px;
                      "
                 src="https://restcountries.eu/data/tur.svg"
                 alt="">

            <h1>Turkey - Ankara</h1>
            <v-date-picker
              :value="new Date()"
              color="red"
              locale="tr"
              class="date-picker-displayer"
            />

          </div>
        </div>

      </div>

      <div class="second-details-container">

        <div class="additional-infos">
          <h2 style="color: #515151;font-weight: lighter">Ek bilgiler: </h2>
          <pre style="text-align: center;font-size: 22px;margin: 30px 0px 0px 20px">Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim rutrum et, cubilia turpis vitae aenean nisl nascetur auctor parturient tellus morbi pellentesque.</pre>
        </div>

        <div class="additional-infos2">

          <h3 class="key">Durum:</h3>

          <div style="display: flex;">
            <span style="margin: 4px 10px 0 30px;width: 20px;height: 20px;border-radius: 10px;background: red;"></span>
            <h2 style="padding: 0;" class="value">Bekliyor</h2>
          </div>


          <h3 class="key">Cikisa kalan:</h3>
          <h2 class="value">2 gun 18 saat</h2>
          <h3 class="key">Telefon numarasi :</h3>
          <h2 class="value">+994553169384</h2>
          <h3 class="key">Yayinlanma tarihi:</h3>
          <h2 class="value">16 subat 2021</h2>

        </div>

      </div>

    </div>


    <div style="margin-top: 20px;height: 130px;display: flex;align-items: center;justify-content: center;flex-direction: column">
      <h1 v-if="$store.state.haveSimilar" style="font-size: 40px">Benzer ilanlar</h1>
      <h1 v-else style="font-size: 40px">Benzer ilan bulunmuyor</h1>
      <hr v-if="$store.state.haveSimilar" style="width: 170px;margin-top: 20px">
      <hr v-else style="width: 250px;margin-top: 20px">
    </div>

    <lottie v-if="!$store.state.haveSimilar" width="50%" :height="400" :options="lottieOptions" v-on:animCreated="handleAnimation" />


    <div v-if="$store.state.haveSimilar" class="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
  data() {
    return {
      isLiked: false,
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
      },
    }
  },
  methods: {
    toggleLike(){
      this.isLiked = !this.isLiked
    },
    handleAnimation(anim) {
      this.anim = anim;
      // this.anim.setSpeed(1.5)
    }
  },
  head() {
    return {
      title: "İlan detayları | CARGOGLOBAL"
    }
  }
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
  height: 90%;
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
  margin-bottom: 20px;
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
