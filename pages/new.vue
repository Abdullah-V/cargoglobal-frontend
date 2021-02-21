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
          <h1 style="font-size: 35px">Çıkış</h1>
          <hr style="width: 45px;margin-top: 20px">
        </div>
        <div class="dropdowns">
          <Dropdown class="dd" t="country" connect="currentStartCountry" start-or-end="start" />
          <Dropdown class="dd" t="city" connect="currentStartCity" start-or-end="start" />
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
          <h1 style="font-size: 35px">Varış</h1>
          <hr style="width: 45px;margin-top: 20px">
        </div>

        <div class="dropdowns">
          <Dropdown class="dd" t="country" connect="currentEndCountry" start-or-end="end" />
          <Dropdown class="dd" t="city" connect="currentEndCity" start-or-end="end" />
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
            <h1 style="font-size: 25px">Telefon numarası</h1>
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


    </div>


    <div class="add-btn-div">
      <button class="add primary-button" @click="$store.dispatch('validateFields')">Ekle <i style="margin: 0px 3px" class="fas fa-plus"></i></button>
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
  methods: {
    onUpdate (event) {
      // console.log(event)
      this.$store.commit('setFullPhoneNumber',{
        number: event.formattedNumber,
        isValidNumber: event.isValid,
      })
    }
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
    justify-content: space-around;
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

@media only screen and (max-width: 1158px){
  .dp{
    width: 100%;
  }
  .dd{
    width: 60%;
  }
  .text-area-root textarea {
    width: 80%;
  }
}

@media only screen and (max-width: 812px){
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

@media only screen and (max-width: 516px){
  .dp{
    width: 100%;
  }
  .dd{
    width: 60%;
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
