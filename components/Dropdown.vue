<template>
  <div class="selectdiv">
    <label>
      <select @change="selectchange($event)" v-model="$store.state[connect]" v-if="t === 'country'">
        <option :value="item.country" v-for="item in $store.state.countries">

          {{ item.country }}

<!-- <img class="flag" :src="item.flag" alt=""> -->

        </option>

      </select>

      <select v-model="$store.state[connect]" v-if="t === 'city'">
        <option v-if="startOrEnd === 'start'" :value="item" v-for="item in $store.state.startCities">

          {{ item }}

        </option>

        <option v-if="startOrEnd === 'end'" :value="item" v-for="item in $store.state.endCities">

          {{ item }}

        </option>

      </select>
    </label>
  </div>
</template>

<script>

export default {
  props: ["t","connect","startOrEnd"],
 async created() {
    var startOrEnd = this.startOrEnd

    // await this.$store.dispatch("getCitiesOfCountry",{
    //   startOrEnd
    // })
 },
  methods: {
    selectchange(e){
      var startOrEnd = this.startOrEnd
      // console.log(e.target.value)
      var r = this.$store.state.countries.filter(el => el.country === e.target.value)
      // console.log(r[0].cities)

      // this.$store.dispatch('getFlagURLofCountry')
      // .then(result => {
      //   this.$store.commit('setFlags', {
      //     startOrEnd,
      //     result
      //   })
      //   // console.log(result)
      // })


      if(startOrEnd === "start"){
        this.$store.state.startCities = r[0].cities
        this.$store.state.currentStartCity = r[0].cities[0]
        this.$store.dispatch('getFlagURLofCountry',startOrEnd)
        .then(result => {
          this.$store.state.startFlag = result
        })
      }

      else if(startOrEnd === "end"){
        this.$store.state.endCities = r[0].cities
        this.$store.state.currentEndCity = r[0].cities[0]
        this.$store.dispatch('getFlagURLofCountry',startOrEnd)
          .then(result => {
            this.$store.state.endFlag = result
          })
      }

      // this.$store.state.startCities = cities

      // this.$store.dispatch("getCitiesOfCountry",{
      //   startOrEnd
      // })
    }
  }
}
</script>

<style scoped>

.selectdiv {
  position: relative;

  float: left;
  width: 40%;
}

select::-ms-expand {
  display: none;
}

.selectdiv:after {
  content: '<>';
  font: 17px "Consolas", monospace;
  color: #333;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  right: 11px;

  top: 18px;
  padding: 0 0 2px;
  border-bottom: 1px solid #999;

  position: absolute;
  pointer-events: none;
}

.selectdiv select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  display: block;
  width: 100%;
  max-width: 320px;
  height: 50px;
  float: right;
  margin: 5px 0px;
  padding: 0px 24px;
  font-size: 16px;
  line-height: 1.75;
  color: #333;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  -ms-word-break: normal;
  word-break: normal;
}

</style>
