<template>
  <div
    class="card-root"
    data-aos="zoom-in"
    data-aos-duration="600"
  >

    <hr>

    <h4 style="margin: 10px 0px;color: #454545">Çıkış:</h4>

    <img class="flag" :src="infos.startFlag" alt="flag image">


    <h2>{{ infos.startCountry }}</h2> <div style="margin: 5px 0px"></div> <h2>{{ infos.startCity }}</h2>

    <div style="margin: 5px 0px"></div>

    <h2><span v-if="new Date(infos.startDate).getDate() <= 9">0</span>{{ new Date(infos.startDate).getDate() }}.<span v-if="new Date(infos.startDate).getMonth() <= 9">0</span>{{ new Date(infos.startDate).getMonth() }}.{{ new Date(infos.startDate).getFullYear() }}</h2>






    <hr style="margin-top: 30px">

    <h4 style="margin: 10px 0px;color: #454545">Varış:</h4>

    <img class="flag" :src="infos.endFlag" alt="flag image">


    <h2>{{ infos.endCountry }}</h2> <div style="margin: 5px 0px"></div> <h2>{{ infos.endCity }}</h2>

    <div style="margin: 5px 0px"></div>

    <h2><span v-if="new Date(infos.endDate).getDate() <= 9">0</span>{{ new Date(infos.endDate).getDate() }}.<span v-if="new Date(infos.endDate).getMonth() <= 9">0</span>{{ new Date(infos.endDate).getMonth() }}.{{ new Date(infos.endDate).getFullYear() }}</h2>


    <div class="status" v-if="status === 'red'">
      <span class="ball" style="background: red;"></span>
      <div style="margin: 0px 5px"></div>
      <h3>Çıkmayı bekliyor</h3>
    </div>

    <div class="status" v-else-if="status === 'yellow'">
      <span class="ball" style="background: yellow;"></span>
      <div style="margin: 0px 5px"></div>
      <h3>Yolda</h3>
    </div>

    <div class="status" v-else-if="status === 'green'">
      <span class="ball" style="background: #27AE60;"></span>
      <div style="margin: 0px 5px"></div>
      <h3>Vardı</h3>
    </div>




    <div class="card-actions">
      <button @click="$store.dispatch('removePost',infos._id)" v-if="isMine" style="width: 65px;font-size: 20px;border-radius: 2px" class="secondary-button"> <i class="fas fa-trash"></i> </button>
      <button @click="toggleLike()" v-if="!isLiked" class="like"> <i class="far fa-heart"></i> {{ infos.likeCount }} </button>
      <button @click="toggleLike()" v-if="isLiked" class="like" style="color: var(--primary-color)"> <i class="fas fa-heart"></i>  {{ infos.likeCount }} </button>
      <nuxt-link :to="'/posts/' + infos._id" tag="button" class="more primary-button">Daha fazla</nuxt-link>
    </div>



  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["infos"],
  data(){
    return {
      isLiked: false,
      status: "",
      isMine: false,
    }
  },
  methods: {
    toggleLike(){
      if(this.isLiked) {
        this.infos.likeCount--
        this.isLiked = false
        this.$store.dispatch('toggleLike',{
          like: false,
          id: this.infos._id
        })
      }else {
        this.infos.likeCount++
        this.isLiked = true
        this.$store.dispatch('toggleLike',{
          like: true,
          id: this.infos._id
        })
      }
    },
    checkStatus(){
      const now = new Date()
      if(new Date(this.infos.startDate) >= now){
        this.status = "red"
      }
      else if(new Date(this.infos.startDate) <= now && new Date(this.infos.endDate) >= now){
        this.status = "yellow"
      }
      else if(now >= new Date(this.infos.endDate)) {
        this.status = "green"
      }
    }
  },
  created() {
    this.checkStatus()
    if(process.client){
      this.isLiked = JSON.parse(localStorage.getItem('likes')).includes(this.infos._id)
      this.isMine = JSON.parse(localStorage.getItem('posts')).includes(this.infos._id)
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
  padding: 18px 0px;
  cursor: pointer;
  transition: 300ms all;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.25);

}

.card-root:hover{
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.25);
}

.ball{
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

.card-actions{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.card-actions .like{
  font-size: 18px;
  width: 75px;
  height: 50px;
  border: 0;
  background: transparent;
  transition: 300ms all;
  border-radius: 3px;
  color: #393939;
}

.card-actions .like:hover{
  background: var(--tertiary-color);
  color: var(--primary-color);
}

.card-actions .more{
  width: 100px;
  border-radius: 3px;
}

.flag {
  width: 50px;
  height: 28px;
  border-radius: 3px;
  margin: 5px 0;

  /*-webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.25);*/
  /*-moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.25);*/
  /*box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.25);*/
}

</style>
