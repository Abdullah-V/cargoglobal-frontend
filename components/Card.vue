<template>
  <div
    class="card-root"
    data-aos="zoom-in"
    data-aos-duration="600"
  >

      <hr>

    <h4 style="margin: 10px 0px;color: #454545">Çıkış:</h4>

    <Flag
      class="flag"
      code="AZ"
      style="margin-bottom: 5px"
    />


      <h2>Azerbaycan</h2> <div style="margin: 5px 0px"></div> <h2>Bakü</h2>

    <div style="margin: 5px 0px"></div>

      <h2>26.01.2021</h2>






    <hr style="margin-top: 30px">

    <h4 style="margin: 10px 0px;color: #454545">Varış:</h4>

    <Flag
      class="flag"
      code="TR"
      style="margin-bottom: 5px"
    />

    <h2>Türkiye</h2> <div style="margin: 5px 0px"></div> <h2>Rize</h2>

    <div style="margin: 5px 0px"></div>

    <h2>1.02.2021</h2>


    <div class="status">
      <span class="ball"></span>
      <div style="margin: 0px 5px"></div>
      <h3>Vardı</h3>
    </div>


    <div class="actions">
      <button @click="toggleLike()" v-if="!isLiked" class="like"> <i class="far fa-heart"></i>  86 </button>
      <button @click="toggleLike()" v-if="isLiked" class="like" style="color: var(--primary-color)"> <i class="fas fa-heart"></i>  86 </button>
      <nuxt-link to="/posts/1" tag="button" class="more primary-button">Daha fazla</nuxt-link>
    </div>


  </div>
</template>

<script>
export default {
  name: "Card",
  data(){
    return {
      isLiked: false
    }
  },
  methods: {
    toggleLike(){
      this.isLiked = !this.isLiked
    }
  }
}
</script>

<style scoped>

.card-root{
  width: 300px;
  height: 540px;
  background: white;
  border-radius: 10px;
  padding: 30px 0px;
  cursor: pointer;
  transition: 300ms all;

  margin: 30px;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-root:hover{
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.25);
}

.ball{
  background: #27AE60;
  width: 20px;
  height: 20px;
  border-radius: 10px;
}

.status{
  display: flex;
  margin-top: 15px;
  justify-content: center;
  color: #343434;
}

.actions{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.actions .like{
  font-size: 18px;
  width: 75px;
  height: 50px;
  border: 0;
  background: transparent;
  transition: 300ms all;
  border-radius: 3px;
  color: #393939;
}

.actions .like:hover{
  background: var(--tertiary-color);
  color: var(--primary-color);
}

.actions .more{
  width: 100px;
  border-radius: 3px;
}


</style>
