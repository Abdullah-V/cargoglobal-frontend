<template>
  <div class="index-root">

    <div style="height: 100px;display: flex;align-items: center;justify-content: center;flex-direction: column">
      <h1 style="font-size: 40px">Tüm ilanlar</h1>
      <hr style="width: 150px;margin-top: 20px">
    </div>

    <div class="cards">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>

      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>

      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>

  </div>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "index",
  components: {
    Card
  }
}
</script>

<style scoped>

.index-root{
  max-width: 100vw;
  min-height: 100vh;
  height: auto;
  padding: 15px 0px;
  background: #f8f8f8;
}

.cards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>
