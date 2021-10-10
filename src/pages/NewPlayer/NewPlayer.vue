<template>
  <div>
    <h1>Criando novo jogador</h1>
    <br />
    <button @click="createPlayer">Criar Jogador!</button>
  </div>
</template>

<script>
// Lição
// 1 - Criar os inputs para as propriedades do player
// 2 - Nome? Vida? Classe?
// 3 - Bloquear entrar nessa tela se o player já existir!

export default {
  data: () => ({
    player: {
      name: "Carlitos",
      life: 100,
    },
  }),
  methods: {
    createPlayer() {
      localStorage.setItem("game-player", JSON.stringify(this.player));
      this.$router.push({ path: "/" });
    },
  },
};
</script>