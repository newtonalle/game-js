<template>
  <div>
    <h1>Criando novo jogador</h1>
    <br />
    <br />
    <p>Name</p>
    <input v-model="player.name" placeholder="Insira seu nome" />
    <br />
    <br />
    <p>Class</p>
    <select v-model="player.class">
      <option
        v-for="(playerClass, index) of playerClasses"
        :key="`class-${index}`"
        :label="playerClass.name"
        :value="playerClass"
      />
    </select>

    <stats-picker
      attributeLabel="Strength"
      :attribute.sync="player.strength"
      :minimumAttribute="selectedClassBaseStats.strength"
      :skillPoints.sync="player.skillPoints"
      :disabled="!player.class"
    />

    <stats-picker
      attributeLabel="Dexterity"
      :attribute.sync="player.dexterity"
      :minimumAttribute="selectedClassBaseStats.dexterity"
      :skillPoints.sync="player.skillPoints"
      :disabled="!player.class"
    />

    <stats-picker
      attributeLabel="Intelligence"
      :attribute.sync="player.intelligence"
      :minimumAttribute="selectedClassBaseStats.intelligence"
      :skillPoints.sync="player.skillPoints"
      :disabled="!player.class"
    />

    <br />

    <button
      @click="createPlayer"
      :disabled="
        player.name === '' || player.class === '' || player.skillPoints !== 0
      "
    >
      Criar Jogador!
    </button>

    <br />
    <br />

    <button
      @click="resetStats"
      :disabled="player.skillPoints === 5 || !player.class"
    >
      Resetar pontos
    </button>
    <span
      style="margin-left: 10px; font-weight: bold"
      v-text="this.player.skillPoints"
    ></span>
  </div>
</template>

<script>
const PLAYER_CLASSES = [
  {
    id: "mage",
    name: "Mago",
    mainStat: "intelligence",
    baseStats: {
      strength: 5,
      dexterity: 0,
      intelligence: 15,
    },
  },
  {
    id: "warrior",
    name: "Guerreiro",
    mainStat: "strength",
    baseStats: {
      strength: 15,
      dexterity: 5,
      intelligence: 0,
    },
  },
  {
    id: "archer",
    name: "Arqueiro",
    mainStat: "dexterity",
    baseStats: {
      strength: 5,
      dexterity: 10,
      intelligence: 5,
    },
  },
];

import StatsPicker from "./components/StatsPicker.vue";

export default {
  components: {
    StatsPicker,
  },
  data: () => ({
    player: {
      name: "",
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      basicStats: { maxHealth: 200, defense: 10, maxMana: 100, damage: 30 },
      class: null,
      skillPoints: 5,
    },
    playerClasses: PLAYER_CLASSES,
  }),
  // Watch tem funções que são executadas toda vez que o valor de um atributo muda
  watch: {
    "player.class"() {
      this.resetStats();
      // Adicionar lógica para setar os atributos base do jogador e resetar pontos livres
      // Usar a mesma função do botão de reset status
    },
  },
  // Computed são funções que são utilizadas como propriedades no resto do código
  computed: {
    selectedClassBaseStats() {
      if (this.player.class) {
        return this.player.class.baseStats;
      } else {
        return {};
      }
    },
  },

  methods: {
    resetStats() {
      this.player.skillPoints = 5;
      this.player.strength = this.player.class.baseStats.strength;
      this.player.dexterity = this.player.class.baseStats.dexterity;
      this.player.intelligence = this.player.class.baseStats.intelligence;
    },

    createPlayer() {
      this.$store.dispatch("newPlayer", {
        name: this.player.name,
        strength: this.player.strength,
        dexterity: this.player.dexterity,
        intelligence: this.player.intelligence,
        basicStats: this.player.basicStats,
        class: this.player.class,
      });
      this.$router.push({ path: "/" });
    },
  },
};
</script>