<template>
  <div>
    <h1>Criando novo jogador</h1>
    <br />
    <br />
    <p>Name</p>
    <input v-model="player.name" placeholder="Insira seu nome" />
    <br />
    <br />
    <p>Strength</p>
    <input
      v-model="player.strength"
      type="number"
      placeholder="Strength"
      disabled
    />
    <button @click="adjustAttribute('strength', -1)">-</button>
    <button @click="adjustAttribute('strength', +1)">+</button>
    <br />
    <br />
    <p>Dexterity</p>
    <input
      v-model="player.dexterity"
      type="number"
      placeholder="Dexterity"
      disabled
    />
    <button @click="adjustAttribute('dexterity', -1)">-</button>
    <button @click="adjustAttribute('dexterity', +1)">+</button>
    <br />
    <br />
    <p>Intelligence</p>
    <input
      v-model="player.intelligence"
      placeholder="Intelligence"
      type="number"
      disabled
    />
    <button @click="adjustAttribute('intelligence', -1)">-</button>
    <button @click="adjustAttribute('intelligence', +1)">+</button>
    <br />
    <br />
    <p>Class</p>
    <select v-model="player.class">
      <option
        v-for="(playerClass, index) of playerClasses"
        :key="`class-${index}`"
        :label="playerClass"
        :value="playerClass"
      />
    </select>

    <br />
    <br />
    <button
      @click="createPlayer"
      :disabled="
        player.name === '' ||
        player.life === '' ||
        player.defense === '' ||
        player.attack === '' ||
        player.critChance === '' ||
        player.class === ''
      "
    >
      Criar Jogador!
    </button>
  </div>
</template>

<script>
const PLAYER_CLASSES = ["Mage", "Warrior", "Archer"];

const DEFAULT_INVENTORY = {
  equipedItems: [],
  unequipedItems: [
    {
      name: "Chapél",
      life: 10,
      defense: 3,
      attack: 1,
      critChance: 0.2,
    },

    {
      name: "Cartola",
      life: 20,
      defense: 6,
      attack: 2,
      critChance: 0.4,
    },

    {
      name: "Cone",
      life: 30,
      defense: 9,
      attack: 3,
      critChance: 0.6,
    },
  ], // tornar cada item em um item de verdade, não só nome de item
};

export default {
  data: () => ({
    player: {
      name: "",
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      class: "",
    },
    playerClasses: PLAYER_CLASSES,
  }),
  // Watch tem funções que são executadas toda vez que o valor de um atributo muda
  watch: {
    "player.class": (value) => {
      console.log("Watching", value);
      // Adicionar lógica para setar os atributos base do jogador e resetar pontos livres
      // Usar a mesma função do botão de reset status
    },
  },
  methods: {
    adjustAttribute(attribute, amount) {
      this.player[attribute] += amount;
    },
    createPlayer() {
      localStorage.setItem(
        "game-player",
        JSON.stringify({
          name: this.player.name,
          strength: this.player.strength,
          dexterity: this.player.dexterity,
          intelligence: this.player.intelligence,
          class: this.player.class,
        })
      );
      console.log("Creating new player, populating with default inventory");
      localStorage.setItem("game-inventory", JSON.stringify(DEFAULT_INVENTORY));
      this.$router.push({ path: "/" });
    },
  },
};
</script>