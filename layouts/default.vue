<template>

  <transition-group name="fade" appear>
    <Navbar key="na" />
    <Nuxt key="nu" style="margin-top: 60px"/>
  </transition-group>

</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  components:{
    Navbar
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



</style>
