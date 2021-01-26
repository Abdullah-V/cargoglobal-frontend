export const state = () => ({
  isLogin: false,
  sideMenu: false
})

export const getters = {}

export const mutations = {
  toggleSideMenu(state){
    state.sideMenu = !state.sideMenu
  }
}

export const actions = {
  trial(context){
    // this.$router.push('/')
    // console.log(this.$router.mode)
  }
}
