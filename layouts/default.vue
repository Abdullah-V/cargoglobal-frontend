<template>



    <transition-group style="width: 100%;height: 100%;display: block" name="fade" appear>
      <Navbar key="na" />
      <Nuxt key="nu" style="margin-top: 60px" />
      <Footer key="foo" />
      <button key="but" title='Yukarı git (kısayol: "\")' @click="amk()" class="primary-button scroll-top-btn"><i class="fas fa-arrow-up"></i></button>
    </transition-group>



</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default {
  components:{
    Navbar,
    Footer
  },
  methods: {
    amk(){
      if(process.client){
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }
    }
  },
  created() {


    this.$axios.$get("https://restcountries.eu/rest/v2/all")
    .then(result => {
      this.$store.state.dataForFilterFLag = result
    })

    this.$store.dispatch('getAllCountries')

    if(process.client){

      // window.onerror = function(message, source, lineno, colno, error) {
      //   console.log("lanet olsun")
      // };


      window.addEventListener("scroll",() => {

        var sh = window.pageYOffset
        var btn = document.querySelector(".scroll-top-btn")


        if(sh >= 456){
          btn.classList.add("active")
        }else if(sh < 456){
          btn.classList.remove("active")
        }
      })
    }
  }
}
</script>

<style>
.fade-enter-active {
  animation: fade-in 500ms ease-in-out forwards;
}

.fade-leave-active{
  animation: fade-out 500ms ease-in-out forwards;
}

.fade-enter{
  opacity: 0;
}

.fade-leave{
  opacity: 1;
}

@keyframes fade-in {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes fade-out {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}


/* scroll button */


.scroll-top-btn{
  pointer-events: none;
  opacity: 0;
  position: fixed;
  bottom: 4%;
  right: 3%;
  z-index: 2;
  width: 60px;
  height: 60px;
  border-radius: 35px;
  font-size: 26px;
  transition: all 0.5s;
}

.scroll-top-btn.active {
  bottom: 6%;
  opacity: 1;
  pointer-events: auto;
}



</style>
