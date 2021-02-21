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
  fullPhoneNumber: "",
  isValidPhoneNumber: false,
  additionalInformation: "",
  dataForFilterFLag: [],
  startFlag: "https://restcountries.eu/data/aze.svg",
  endFlag: "https://restcountries.eu/data/tur.svg",
  errors: [],


  // Only for development
  posts: true,
  haveSimilar: false,
  isLogin: true,
})

export const getters = {
  // TODO: add 'getFlagURLofCountry' actions here.
}

export const mutations = {
  toggleSideMenu(state){
    state.sideMenu = !state.sideMenu
  },
  setCountries(state){},
  setFullPhoneNumber(state,payload){
    state.fullPhoneNumber = payload.number
    state.isValidPhoneNumber = payload.isValidNumber
  },

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
  getFlagURLofCountry(context,startOrEnd) {
    if(startOrEnd === "start"){
      return context.state.dataForFilterFLag.filter(el => el.name.toLowerCase().startsWith(context.state.currentStartCountry.toLowerCase()))[0].flag
    }
    else if(startOrEnd === "end"){
      return context.state.dataForFilterFLag.filter(el => el.name.toLowerCase().startsWith(context.state.currentEndCountry.toLowerCase()))[0].flag
    }
  },
  validateFields(context) {
    window.scrollTo({
      top: 0,
      left: 0,
    })
    var s = context.state
    s.errors = []
    if((s.startDate && s.endDate) && (s.startDate <= s.endDate) && (s.isValidPhoneNumber)){
      console.log(true)
    }else {
      if(!s.startDate || !s.endDate){
        s.errors.push("Tarih alanları zorunludur.")
      }
      else if(s.startDate > s.endDate){
        s.errors.push("Çıkış tarihi varış tarihinden büyük olamaz.")
      }
      if(!s.isValidPhoneNumber){
        s.errors.push("Telefon numarası geçersiz.")
      }
      console.log(false)
    }
  }



  // trial(context){
  //   this.$router.push('/')
  //   console.log(this.$router.mode)
  // },
}
