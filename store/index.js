export const state = () => ({
  isLogin: true,
  sideMenu: false,
  posts: []
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
