<template>
  <div>
    <h1>Menu principal</h1>
    <a href="/#/battle">Batalha</a><br />
    <a href="/#/tutorial-js">Tutorial JS</a> <br />
    <a href="/#/tutorial-vuex">Tutorial VueX</a> <br /><br />
    <button @click="clearState">Limpar dados</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearState() {
      this.$store.dispatch("resetState");
      this.$router.push({ path: "/new-player" });
    },
  },
};
</script>