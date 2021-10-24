<template>
  <div>
    <h1>Menu principal</h1>
    <a href="/#/battle">Batalha</a><br />
    <a href="/#/tutorial-js">Tutorial</a> <br /><br />
    <button @click="clearLocalStorage">Limpar dados</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearLocalStorage() {
      const localStorageKeys = ["game-player", "game-inventory"];
      localStorageKeys.forEach((key) => localStorage.removeItem(key));
      this.$router.push({ path: "/new-player" });
    },
  },
};
</script>