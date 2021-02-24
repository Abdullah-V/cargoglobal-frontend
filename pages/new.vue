<template>
  <div class="new-root">


    <div style="height: 130px;display: flex;align-items: center;justify-content: center;flex-direction: column">
      <h1 style="font-size: 40px">Yeni ilan ekle</h1>
      <hr style="width: 170px;margin: 20px 0px">
    </div>

    <div style="margin: 10px 0 30px 0;" v-if="$store.state.errors.length">
      <h1 style="font-size: 35px;text-align: center">İlanınız eklenemedi: </h1>
      <h2 style="color: #ff0000;text-align: center;margin: 20px 0" v-for="error in $store.state.errors"> {{ error }} </h2>
    </div>

<!--    {{ $store.state.errors }}-->

    <div class="start-and-end">
      <div class="start">
        <div style="height: 80px;display: flex;align-items: center;justify-content: center;flex-direction: column">
          <h1 style="font-size: 35px">Çıkış<span style="color: red"> * </span></h1>
          <hr style="width: 45px;margin-top: 20px">
        </div>
        <div class="dropdowns">
<!--          <Dropdown class="dd" t="country" connect="currentStartCountry" start-or-end="start" />-->
<!--          <Dropdown class="dd" t="city" connect="currentStartCity" start-or-end="start" />-->

          <v-select
            class="dd"
            @input="setStartCountry"
            :value="$store.state.currentStartCountry"
            label="country"
            :options="$store.state.countries"
          ></v-select>

          <v-select
            class="dd"
            @input="setStartCity"
            :value="$store.state.currentStartCity"
            :options="$store.state.startCities"
          ></v-select>


        </div>

        <v-date-picker
          v-model="$store.state.startDate"
          color="red"
          locale="tr"
          class="dp"
        />

<!--        {{ $store.state.startDate }}-->

<!--        {{ $store.state.currentStartCountry }}-->

<!--        {{ $store.state.currentStartCity }}-->


      </div>

      <div class="end">
        <div style="height: 100px;display: flex;align-items: center;justify-content: center;flex-direction: column">
          <h1 style="font-size: 35px">Varış<span style="color: red"> * </span></h1>
          <hr style="width: 45px;margin-top: 20px">
        </div>

        <div class="dropdowns">
<!--          <Dropdown class="dd" t="country" connect="currentEndCountry" start-or-end="end" />-->
<!--          <Dropdown class="dd" t="city" connect="currentEndCity" start-or-end="end" />-->

          <v-select
            class="dd"
            @input="setEndCountry"
            :value="$store.state.currentEndCountry"
            label="country"
            :options="$store.state.countries"
          ></v-select>

          <v-select
            class="dd"
            @input="setEndCity"
            :value="$store.state.currentEndCity"
            :options="$store.state.endCities"
          ></v-select>

        </div>


        <v-date-picker
          v-model="$store.state.endDate"
          color="red"
          locale="tr"
          class="dp"
        />




<!--       {{ $store.state.startDate }}-->

<!--       {{ $store.state.endDate }}-->




<!--       {{ $store.state.currentStartCountry }}-->

<!--       {{ $store.state.currentStartCity }}-->


<!--       {{ $store.state.currentEndCountry }}-->

<!--       {{ $store.state.currentEndCity }}-->



      </div>
    </div>





    <div class="phone-number-root">

          <div style="height: 60px;display: flex;align-items: center;justify-content: center;flex-direction: column">
            <h1 style="font-size: 25px">Telefon numarası<span style="color: red"> * </span></h1>
            <hr style="width: 125px;margin-top: 20px">
          </div>

          <VuePhoneNumberInput
            v-model="$store.state.phoneNumber"
            @update="onUpdate"
            error-color="red"
            :clearable="true"
            default-country-code="TR"
            color="#fc1515"
            valid-color="green"
          />

<!--      {{ $store.state.phoneNumber }}-->
<!--      {{ $store.state.fullPhoneNumber }}-->
<!--      {{ $store.state.isValidPhoneNumber }}-->

<!--      start: {{ $store.state.startFlag }}-->
<!--      <br>-->
<!--      end: {{ $store.state.endFlag }}-->

    </div>


    <div class="text-area-root">

      <div style="height: 60px;display: flex;align-items: center;justify-content: center;flex-direction: column">
        <h1 style="font-size: 26px">Ek bilgiler (opsiyonel)</h1>
        <hr style="width: 145px;margin-top: 20px">
      </div>

      <textarea v-model="$store.state.additionalInformation" placeholder="Ek bilgiler"></textarea>


<!--             {{ $store.state.currentStartCountry }}-->
<!--      <br>-->
<!--             {{ $store.state.currentStartCity }}-->
<!--      <br><br>-->

<!--             {{ $store.state.currentEndCountry }}-->
<!--      <br>-->
<!--             {{ $store.state.currentEndCity }}-->

<!--      <br><br><br>-->

<!--      {{ $store.state.startFlag }}-->
<!--      <br>-->
<!--      {{ $store.state.endFlag }}-->

    </div>


    <h3 style="margin: 0 20px 30px 20px;text-align: center;color: #262626"><span style="color: red">NOT :</span> İlanınız varış zamanından bir gün sonra otomatik olarak silinecektir.</h3>
    <h3 style="margin: 0 20px 80px 20px;text-align: center;color: #262626"><span style="color: red">NOT :</span> Eğer aradığınız şehir listelerde yoksa, en yakın şehri seçin.Gerçek şehri ek bilgiler kısmına yaza bilirsiniz.</h3>


    <div class="add-btn-div">
      <button class="add primary-button" @click="$store.dispatch('newPost')">Ekle <i style="margin: 0px 3px" class="fas fa-plus"></i></button>
    </div>




  </div>
</template>

<script>
import Dropdown from "~/components/Dropdown";

export default {
  name: "new",
  components: {
    Dropdown
  },
  head(){
    return {
      title: "Yeni ilan ekle | CARGOGLOBAL"
    }
  },
  created() {
    this.$store.state.errors = []
  },
  methods: {
    onUpdate (event) {
      // console.log(event)
      this.$store.commit('setFullPhoneNumber',{
        number: event.formattedNumber,
        isValidNumber: event.isValid,
      })
    },
    async setStartCountry(value) {
      value = await value || this.$store.state.countries[12]
      this.$store.state.currentStartCountry = await value.country
      this.$store.state.currentStartCity = await value.cities[0]
      this.$store.state.startCities = await value.cities
      this.$store.dispatch('getFlagURLofCountry',"start")
      .then(result => {
        this.$store.state.startFlag = result
      })
    },
    setStartCity(value) {
      value = value || this.$store.state.startCities[0]
      this.$store.state.currentStartCity = value
    },
    async setEndCountry(value) {
      value = await value || this.$store.state.countries[181]
      this.$store.state.currentEndCountry = await value.country
      this.$store.state.currentEndCity = await value.cities[0]
      this.$store.state.endCities = await value.cities
      this.$store.dispatch('getFlagURLofCountry',"end")
        .then(result => {
          this.$store.state.endFlag = result
        })
    },
    setEndCity(value) {
      value = value || this.$store.state.endCities[0]
      this.$store.state.currentEndCity = value
    },
  }
}
</script>

<style scoped>

.new-root {
  max-width: 100vw;
  min-height: 100%;
  height: auto;
  padding-bottom: 50px;
}

.start-and-end {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
}

.start,
.end {
  width: 40%;
  height: 84%;
  background: white;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
}

.dropdowns{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.dp {
  width: 60%
}

.phone-number-root {
  width: 60%;
  height: 180px;
  margin: auto;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px 0px;

  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
}

#MazPhoneNumberInput {
  width: 80%;
}

.text-area-root{
  width: 60%;
  background: white;
  margin: 80px auto;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
}

.text-area-root textarea {
  resize: none;
  width: 60%;
  height: 80%;
  margin: 30px 0px;
  background: #e7e7e7;
  border: 0;
  padding: 20px;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 5px;
  /*background: #dbdbdb;*/
}

.add-btn-div {
  width: 60%;
  margin: auto;
  position: relative;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add {
  width: 50%;
  height: 60px;
  border-radius: 3px;
  font-size: 22px;
}

.dd {
  width: 45%;
}

@media only screen and (max-width: 1158px){
  .dp{
    width: 100%;
  }
  .dd{
    width: 60%;
    font-size: 18px;
  }
  .text-area-root textarea {
    width: 80%;
  }
}

@media only screen and (max-width: 945px){
  .start-and-end{
    flex-direction: column;
    align-items: center;
    min-height: 190vh;
  }
  .start,
  .end{
    width: 80%;
    margin: 20px 0px;
  }
  .dp{
    width: 70%;
  }
  .dd {
    width: 40%;
    font-size: 18px;
  }
  .phone-number-root,
  .text-area-root {
    width: 80%;
  }
  .text-area-root {
    margin: 40px auto;
  }
  .add-btn-div {
    width: 80%;
    bottom: 0px;
  }

}

@media only screen and (max-width: 570px){
  .dp{
    width: 100%;
  }
  .dd{
    width: 60%;
    font-size: 15px;
  }
  .start,
  .end{
    width: 95%;
  }
  .phone-number-root,
  .text-area-root {
    width: 95%;
  }
  .add-btn-div {
    width: 100%;
  }
}

</style>
