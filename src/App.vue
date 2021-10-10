<template>
  <div id="app">
    <h2 style="text-align: center">
      I-+-+-+-+-+-+-+- Batalha bem louca -+-+-+-+-+-+-+-I
    </h2>
    <a href="">Voltar ao menu principal</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
