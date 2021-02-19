export const strict = false

export const state = () => ({
  sideMenu: false,
  countries: [],
  startCities: [],
  endCities: [],
  currentStartCountry: "Azerbaijan",
  currentStartCity: "Baku",
  currentEndCountry: "Turkey",
  currentEndCity: "Ankara",
  startDate: new Date(),
  endDate: new Date(),
  phoneNumber: "",
  additionalInformation: "",
  dataForFilterFLag: [],


  // Only for development
  posts: true,
  isLogin: true,
})

export const getters = {
  // TODO: add 'getFlagURLofCountry' actions here.
}

export const mutations = {
  toggleSideMenu(state){
    state.sideMenu = !state.sideMenu
  },
  setCountries(state){}
  // TODO: define all mutations
}

export const actions = {
  async getAllCountries(context){
    await this.$axios.$get('https://countriesnow.space/api/v0.1/countries/')
      .then(result => {
        context.state.countries = result.data
        context.state.startCities = result.data[12].cities
        context.state.endCities = result.data[181].cities
      })
  },
  getFlagURLofCountry(context) {
    return context.state.dataForFilterFLag.filter(el => el.name.toLowerCase().startsWith(context.state.currentStartCountry.toLowerCase()))[0].flag
  },



  // trial(context){
  //   this.$router.push('/')
  //   console.log(this.$router.mode)
  // },
}
