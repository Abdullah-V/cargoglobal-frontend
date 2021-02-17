<template>
  <div class="selectdiv">
    <label>
      <select @change="selectchange()" v-model="$store.state[connect]" v-if="t === 'country'">
        <option :value="item.name" v-for="item in $store.state.countries">

          {{ item.name }}

<!--          <img class="flag" :src="item.flag" alt="">-->

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
    await this.$store.dispatch('getAllCountries')
    await this.$store.dispatch("getCitiesOfCountry",{
      startOrEnd
    })
 },
  methods: {
    selectchange(){
      var startOrEnd = this.startOrEnd
      this.$store.dispatch("getCitiesOfCountry",{
        startOrEnd
      })
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
