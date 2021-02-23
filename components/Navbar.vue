<template>
  <div>

    <transition name="side-menu-place">
      <div @click="$store.commit('toggleSideMenu')" v-if="$store.state.sideMenu" class="side-menu-place">

      </div>
    </transition>

    <transition name="side-menu">
      <div v-if="$store.state.sideMenu" class="side-menu">
        <div class="side-menu-head-sec">
          <nuxt-link to="/" tag="h2">CARGOGLOBAL</nuxt-link>
          <i class="fas fa-times" @click="$store.commit('toggleSideMenu')"></i>
        </div>
        <div class="side-menu-items">

          <nuxt-link to="/" tag="div" class="item">
              <i class="fas fa-stream"></i>
              Tüm İlanlar
          </nuxt-link>
          <nuxt-link v-if="$store.state.isLogin" to="/my-posts" tag="div" class="item">
            <i class="fas fa-user-alt"></i>
            Benim İlanlarım
          </nuxt-link>
          <nuxt-link to="/likes" tag="div" class="item">
            <i class="fas fa-heart"></i>
            Favori ilanlar
        </nuxt-link>


          <nuxt-link v-if="$store.state.isLogin" style="margin-top: 10px;border-radius: 3px;width: 170px;height: 50px" to="/new" tag="button" class="secondary-button">İlan ekle</nuxt-link>


          <div v-if="!$store.state.isLogin" class="side-menu-buttons">
              <nuxt-link tag="button" to="/login" style="margin-right: 15px;border-radius: 3px;cursor: pointer;width: 100px;height: 40px;display: flex;justify-content: center;align-items: center" class="secondary-button">Giriş yap</nuxt-link>
              <nuxt-link tag="button" to="/register" style="border-radius: 3px;cursor: pointer;width: 100px;height: 40px;display: flex;justify-content: center;align-items: center" class="primary-button">Kayıt ol</nuxt-link>
            </div>

        </div>
      </div>
    </transition>


      <div class="navbar-root">

        <i @click="$store.commit('toggleSideMenu')" class="menu-bars media fas fa-bars"></i>

        <nuxt-link to="/" tag="h2">CARGOGLOBAL</nuxt-link>

        <div class="links">
          <nuxt-link tag="a"  to="/">Tüm İlanlar</nuxt-link>
          <nuxt-link tag="a"  to="/my-posts" v-if="$store.state.isLogin">Benim İlanlarım</nuxt-link>
          <nuxt-link tag="a" to="/likes">Favori ilanlar</nuxt-link>

          <nuxt-link v-if="$store.state.isLogin" style="border-radius: 3px" to="/new" tag="button" class="secondary-button add-post">İlan ekle</nuxt-link>

          <nuxt-link v-if="!$store.state.isLogin" style="border-radius: 3px" to="/login" tag="button" class="secondary-button">Giriş yap</nuxt-link>
          <nuxt-link v-if="!$store.state.isLogin" style="border-radius: 3px" to="/register" tag="button" class="primary-button">Kayıt ol</nuxt-link>

          <label title='Ara (kısayol: "/")' for="asd" @click="toggleSearch()" style="border-radius: 3px;cursor: pointer;width: 50px;height: 40px;display: flex;justify-content: center;align-items: center" class="primary-button fas fa-search"></label>

        </div>

        <label title='Ara (kısayol: "/")' for="asd" @click="toggleSearch()" style="border-radius: 3px;cursor: pointer;width: 50px;height: 40px;display: flex;justify-content: center;align-items: center" class="media primary-button fas fa-search"></label>

      </div>

    <transition name="search">

      <div v-if="searchBox" class="search-section">
        <div class="search-box">
          <label for="asd" class="search-icon"><i class="fas fa-search"></i></label>
          <input autocomplete="off" v-model="$store.state.searchText" @keydown.enter="$router.push({path: '/search',query:{q:$store.state.searchText}})" id="asd" type="text" class="search-input" placeholder='Şehir,ülke,telefon numarası'>
        </div>
      </div>

    </transition>




  </div>
</template>

<script>
export default {
  data(){
    return {
      searchBox:false
    }
  },
  created() {
    // this.$store.dispatch('trial')
    // .then(result => {
    //   console.log(result.data)
    // })

    // this.$store.dispatch('trial')

    // console.log(this.$route.fullPath)

    if(process.client){
      window.addEventListener("keypress",async (e) => {
        if(e.key === "/"){
          e.preventDefault()
          await this.toggleSearch()
          try{
            document.querySelector(".search-input").focus()
          }catch (e) {}
        }
        else if(e.key === "\\"){
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          })
        }
      })
    }
  },
  methods:{
    toggleSearch(){
      this.searchBox = !this.searchBox
    },
  }
}
</script>

<style>

.search-enter{}
.search-leave{}

.search-enter-active{
  animation: in 400ms ease-in-out forwards;
}
.search-leave-active{
  animation: out 400ms ease-in-out forwards;
}


@keyframes in {
  from{
    top: 0px;
    opacity: 0;
  }
  to{
    top: 60px;
    opacity: 1;
  }
}


@keyframes out {
  from{
    top: 60px;
    opacity: 1;
  }
  to{
    top: 0px;
    opacity: 0;
  }
}





.search-section{
  position: fixed;
  top: 60px;
  right: 10px;
  width: 315px;
  height: 60px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.search-box{
  width: 95%;
  height: 40px;
  border-radius: 20px;
  background: #ececec;
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
}

.search-icon{
  padding-left: 5px;
  cursor: pointer;
  color: #98a5b1;
}

.search-input{
  width: 90%;
  height: 100%;
  border: 0px;
  background: transparent;
  margin-left: 5px;
  font-size: 18px;
  font-weight: 400;
  padding-left: 9px;
}





.navbar-root{
  width: 100%;
  height: 60px;
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  z-index: 2;

  -webkit-box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.45);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.45);
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.45);
}

.links a{
  color: black;
  text-decoration: none;
  font-weight: bold;
  transition: 200ms all;
}

.navbar-root h2,
.side-menu-head-sec h2{
  background: linear-gradient(to right, var(--secondary-color), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}

.links {
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.links a{
  margin: 0px 15px;
}

.links button {
  width: 100px;
  height: 40px;
  display: inline-block;
}

.links a:hover,
.links a:focus{
  color: var(--primary-color);
}

a.nuxt-link-exact-active{
  color: var(--primary-color);
}

.media{
  display: none !important;
}

.menu-bars{
  font-size: 28px;
  transition: 350ms all;
  color: black;
  cursor: pointer;
}

.menu-bars:hover,
.menu-bars:focus {
  color: var(--primary-color);
}

/* Side menu styles */

.side-menu{
  background: white;
  width: 305px;
  height: 100vh;
  z-index: 4;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 40px 20px 20px 15px;
}

.side-menu-place{
  width: 100%;
  height: 100%;
  z-index: 3;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,.5);
}

.side-menu .side-menu-head-sec{
  display: flex;
  justify-content: space-between;
}

.side-menu .side-menu-head-sec i{
  font-size: 23px;
  transition: 200ms all;
  cursor: pointer;
}

.side-menu .side-menu-head-sec i:hover{
  color: var(--primary-color);
}

.side-menu .side-menu-items{
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
}

.side-menu .side-menu-items .item{
  margin: 10px 0px;
  width: 220px;
  height: 50px;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 300ms all;
}

.side-menu .side-menu-items .item i{
  margin: 0px 10px;
}


.side-menu .side-menu-items .item:hover{
  background: var(--tertiary-color);
  color: var(--primary-color);
}

.side-menu .side-menu-items .item i{
  margin: 0px 10px;
}

.side-menu .side-menu-items div.nuxt-link-exact-active{
  background: var(--tertiary-color);
  color: var(--primary-color);
}

.side-menu-buttons{
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}


/* Side menu animations */

.side-menu-place-leave-active{
  animation: place-out 400ms ease-in-out forwards;
}

.side-menu-place-enter-active{
  animation: place-in 400ms ease-in-out forwards;
}

@keyframes place-in {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes place-out {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}







.side-menu-leave-active{
  animation: side-out 500ms ease-in-out forwards;
}

.side-menu-enter-active{
  animation: side-in 500ms ease-in-out forwards;
}


@keyframes side-in {
  from{
    opacity: 0;
    left: -70%;
  }
  to{
    opacity: 1;
    left: 0%;
  }
}

@keyframes side-out {
  from{
    opacity: 1;
    left: 0%;
  }
  to{
    opacity: 0;
    left: -70%;
  }
}




/* Media query */


@media only screen and (max-width: 1152px) {
  .links{
    width: 80%;
  }
}


@media only screen and (max-width: 878px) {
  /*.links{*/
  /*  display: none;*/
  /*}*/
  .navbar-root{
    padding: 10px;
  }
}



@media only screen and (max-width: 848px) {
  .links{
    display: none;
  }
  .media{
    display: flex !important;
  }
  .navbar-root{
    padding: 10px 30px;
  }
}

@media only screen and (max-width: 545px){
  .search-section{
    width: 100%;
    right: 0px;
  }
}

@media only screen and (max-width: 1208px){
  .add-post{
    margin: 0px 20px;
  }
}

</style>
