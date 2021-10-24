<template>
  <div>
    <br />
    <a href="/#/battle">Voltar para a batalha</a>
    <br />
    <h1>Inventário</h1>
    <br />
    <h3>Equipamentos não equipados</h3>
    <p
      v-for="(equipament, index) in this.inventory.unequipedItems"
      :key="`unequiped-${index}`"
    >
      • {{ equipament.name }}
      <span class="clickable" @click="equipItem(index)">E</span>
    </p>
    <h3>Equipamentos equipados</h3>
    <p
      v-for="(equipament, index) in this.inventory.equipedItems"
      :key="`equiped-${index}`"
    >
      • {{ equipament.name }}
      <span class="clickable" @click="unequipItem(index)">U</span>
    </p>
    <h3>Status</h3>
    <h3 v-text="gearedPlayer.name"></h3>
    <h4>Vida:</h4>
    <p v-text="playerStats.life"></p>
    <h4>Defesa:</h4>
    <p v-text="playerStats.defense"></p>
    <h4>Ataque:</h4>
    <p v-text="playerStats.attack"></p>
    <h4>Chance de Crítico:</h4>
    <p v-text="playerStats.critChance"></p>
    <h4>Classe:</h4>
    <p v-text="gearedPlayer.class"></p>
  </div>
</template>

<script>
// Criar um formato para um objeto de item:
// {nome: "Trevo", defesa: 1, ataque: 2, vida: 3, chanceDeCritico: 0.2}

export default {
  data: () => ({
    inventory: {},
    player: {},
    gearedPlayer: {},
  }),
  computed: {
    playerStats() {
      return {
        life:
          this.player.life +
          this.inventory.equipedItems.reduce(
            (life, item) => life + item.life,
            0
          ),
        defense:
          this.player.defense +
          this.inventory.equipedItems.reduce(
            (defense, item) => defense + item.defense,
            0
          ),
        attack:
          this.player.attack +
          this.inventory.equipedItems.reduce(
            (attack, item) => attack + item.attack,
            0
          ),
        critChance:
          this.player.critChance +
          this.inventory.equipedItems.reduce(
            (critChance, item) => critChance + item.critChance,
            0
          ),
      };
    },
  },
  methods: {
    equipItem(index) {
      let item;
      item = this.inventory.unequipedItems[index];
      this.inventory.unequipedItems.splice(index, 1);
      this.inventory.equipedItems.push(item);
      this.storeInventory(this.inventory);
      console.log(this.inventory);
      this.calculateGearedPlayer();
    },
    unequipItem(index) {
      let item;
      item = this.inventory.equipedItems[index];
      this.inventory.equipedItems.splice(index, 1);
      this.inventory.unequipedItems.push(item);
      this.storeInventory(this.inventory);
      this.calculateGearedPlayer();
    },
    storeInventory(inventory) {
      localStorage.setItem("game-inventory", JSON.stringify(inventory));
    },
    storeGearedPlayer(gearedPlayer) {
      localStorage.setItem("game-geared-player", JSON.stringify(gearedPlayer));
    },
    calculateGearedPlayer() {
      this.gearedPlayer = this.player;
      this.storeGearedPlayer(this.gearedPlayer);
    },
  },
  created() {
    const rawInventory = localStorage.getItem("game-inventory");
    const rawPlayer = localStorage.getItem("game-player");
    console.log("Pre-existing player found, using that.");
    this.player = JSON.parse(rawPlayer);
    console.log(this.player);
    console.log("Pre-existing inventory found, using that.");
    this.inventory = JSON.parse(rawInventory);
    this.calculateGearedPlayer();
  },
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
  font-weight: bold;
}
</style>