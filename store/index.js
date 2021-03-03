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
  posts: true,
  searchText: "",


  // Only for development
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
  getAllPosts(context) {
    this.$axios.$post( "https://cargoglobal-api.herokuapp.com/api/all",{
      API_KEY: process.env.API_KEY
    })
      .then(result => {
        context.state.posts = result
      })
  },
  getFlagURLofCountry(context,startOrEnd) {
    try{
      if(startOrEnd === "start"){
        return context.state.dataForFilterFLag.filter(el => el.name.toLowerCase().startsWith(context.state.currentStartCountry.toLowerCase()))[0].flag
      }
      else if(startOrEnd === "end"){
        return context.state.dataForFilterFLag.filter(el => el.name.toLowerCase().startsWith(context.state.currentEndCountry.toLowerCase()))[0].flag
      }
    }catch (e){}
  },
  newPost(context) {
    window.scrollTo({
      top: 0,
      left: 0,
    })
    var s = context.state
    s.errors = []
    if((s.additionalInformation.length <= 200) && (s.startDate && s.endDate) && (s.startDate <= s.endDate) && (s.isValidPhoneNumber)){
      this.$axios.$post("https://cargoglobal-api.herokuapp.com/api/new",{
        startCountry: s.currentStartCountry,
        endCountry: s.currentEndCountry,
        startCity: s.currentStartCity,
        endCity: s.currentEndCity,
        startFlag: s.startFlag,
        endFlag: s.endFlag,
        startDate: s.startDate,
        endDate: s.endDate,
        phoneNumber: s.fullPhoneNumber,
        additionalInformation: s.additionalInformation,
        API_KEY: process.env.API_KEY
      })
        .then(result => {
          context.state.posts.unshift(result)
          context.dispatch('addToLocalStorageArray',{
            lsk: "posts",
            itemToAdd: result._id,
          })
          this.$router.push("/posts/" + result._id)
        })
      context.dispatch('resetInputs')
      // console.log(true)
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
      if(s.additionalInformation.length > 200){
        s.errors.push("Ek bilgiler metninin uzunluğu 200'den fazla olmamalıdır.")
      }
      // console.log(false)
    }
  },
  removePost(context,postID) {
    this.$axios.$post("https://cargoglobal-api.herokuapp.com/api/remove",{
      postID,
      API_KEY: process.env.API_KEY
    })
      .then(result => {
        // console.log("from removePost request" + result)
      })
    context.dispatch('removeFromLocalStorageArray',{
      lsk: "posts",
      itemToRemove: postID
    })
    context.dispatch('removeFromLocalStorageArray',{
      lsk: "likes",
      itemToRemove: postID
    })
    context.state.posts = context.state.posts.filter(el => el._id !== postID)
  },
  toggleLike(context,payload){
    this.$axios.$post("https://cargoglobal-api.herokuapp.com/api/toggleLike",{
      like: payload.like,
      id: payload.id,
      API_KEY: process.env.API_KEY
    })
      .then(result => {
        // console.log("response from toggleLike")
      })
    if(payload.like) {
      context.dispatch('addToLocalStorageArray',{
        lsk: "likes",
        itemToAdd: payload.id
      })
    }
    else if(!payload.like) {
      context.dispatch('removeFromLocalStorageArray',{
        lsk: "likes",
        itemToRemove: payload.id
      })
    }
  },
  resetInputs(context) {
    var s = context.state
    s.startDate = new Date()
    s.endDate = new Date()
    s.additionalInformation = ""
  },
  addToLocalStorageArray(context,payload){
    var arr = JSON.parse(localStorage.getItem(payload.lsk)) // lsk: Local Storage Key
    arr.push(payload.itemToAdd)
    localStorage.setItem(payload.lsk,JSON.stringify(arr))
  },
  removeFromLocalStorageArray(context,payload) {
    var arr = JSON.parse(localStorage.getItem(payload.lsk)) // lsk: Local Storage Key
    arr.splice(arr.indexOf(payload.itemToRemove),1)
    localStorage.setItem(payload.lsk,JSON.stringify(arr))
  }
}
