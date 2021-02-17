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


  // Only for development
  posts: true,
  isLogin: true,
})

export const getters = {}

export const mutations = {
  toggleSideMenu(state){
    state.sideMenu = !state.sideMenu
  },
  setCountries(state){

  }
}

export const actions = {
  async getAllCountries(context){
    await this.$axios.$get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then(result => {
        context.state.countries = result.data
      })
  },
  async getCitiesOfCountry(context,{ startOrEnd }){

    if(startOrEnd === "start"){
      await this.$axios.$post('https://countriesnow.space/api/v0.1/countries/cities',{
        country: context.state.currentStartCountry
      })
        .then(result => {
          context.state.startCities = result.data
          context.state.currentStartCity = result.data[0]
        })
    }

    else if(startOrEnd === "end"){
      await this.$axios.$post('https://countriesnow.space/api/v0.1/countries/cities',{
        country: context.state.currentEndCountry
      })
        .then(result => {
          context.state.endCities = result.data
          context.state.currentEndCity = result.data[0]
        })
    }

  },


  // trial(context){
  //   this.$router.push('/')
  //   console.log(this.$router.mode)
  // },
}
