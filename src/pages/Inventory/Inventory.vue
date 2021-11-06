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
      <items
        :equipamentName="equipament.name"
        :equipamentType="equipament.type"
        :equipamentDexterity="equipament.dexterity"
        :equipamentIntelligence="equipament.intelligence"
        :equipamentStrength="equipament.strength"
        :equipamentMinRequirementsDexterity="
          equipament.minRequirements.dexterity
        "
        :equipamentMinRequirementsIntelligence="
          equipament.minRequirements.intelligence
        "
        :equipamentMinRequirementsStrength="equipament.minRequirements.strength"
      />
      <span class="clickable" @click="equipItem(index)">E</span>
    </p>
    <h3>Equipamentos equipados</h3>
    <p
      v-for="(equipament, index) in this.inventory.equipedItems"
      :key="`equiped-${index}`"
    >
      <items
        :equipamentName="equipament.name"
        :equipamentType="equipament.type"
        :equipamentDexterity="equipament.dexterity"
        :equipamentIntelligence="equipament.intelligence"
        :equipamentStrength="equipament.strength"
        :equipamentMinRequirementsDexterity="
          equipament.minRequirements.dexterity
        "
        :equipamentMinRequirementsIntelligence="
          equipament.minRequirements.intelligence
        "
        :equipamentMinRequirementsStrength="equipament.minRequirements.strength"
      />
      <span class="clickable" @click="unequipItem(index)">U</span>
    </p>
    <p>------------------</p>
    <h3>Status</h3>
    <h3 v-text="player.name"></h3>
    <h4>Força:</h4>
    <p v-text="playerStats.strength"></p>
    <h4>Destreza:</h4>
    <p v-text="playerStats.dexterity"></p>
    <h4>Inteligência:</h4>
    <p v-text="playerStats.intelligence"></p>
    <h4>Classe:</h4>
    <p v-text="player.class.name"></p>
    <h4>Vida:</h4>
    <p v-text="player.basicStats.maxHealth + playerStats.strength * 20"></p>
    <h4>Defesa:</h4>
    <p v-text="player.basicStats.defense + playerStats.dexterity * 1"></p>
    <h4>Mana:</h4>
    <p v-text="player.basicStats.maxMana + playerStats.intelligence * 5"></p>
    <h4>Dano:</h4>
    <p
      v-text="player.basicStats.damage + playerStats[player.class.mainStat] * 1"
    ></p>
    <p>------------------</p>
  </div>
</template>

<script>
// Criar um formato para um objeto de item:
// {nome: "Trevo", defesa: 1, ataque: 2, vida: 3, chanceDeCritico: 0.2}

import Items from "./components/Items.vue";

export default {
  components: { Items },
  data: () => ({
    inventory: {},
    player: {},
    gearedPlayer: {},
  }),
  computed: {
    playerStats() {
      return {
        strength:
          this.player.strength +
          this.inventory.equipedItems.reduce(
            (strength, item) => strength + item.strength,
            0
          ),
        dexterity:
          this.player.dexterity +
          this.inventory.equipedItems.reduce(
            (dexterity, item) => dexterity + item.dexterity,
            0
          ),
        intelligence:
          this.player.intelligence +
          this.inventory.equipedItems.reduce(
            (intelligence, item) => intelligence + item.intelligence,
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
    },
    unequipItem(index) {
      let item;
      item = this.inventory.equipedItems[index];
      this.inventory.equipedItems.splice(index, 1);
      this.inventory.unequipedItems.push(item);
      this.storeInventory(this.inventory);
    },
    storeInventory(inventory) {
      localStorage.setItem("game-inventory", JSON.stringify(inventory));
    },
  },
  created() {
    //this.playerBasicStats();
    const rawInventory = localStorage.getItem("game-inventory");
    const rawPlayer = localStorage.getItem("game-player");
    console.log("Pre-existing player found, using that.");
    this.player = JSON.parse(rawPlayer);
    console.log(this.player);
    console.log("Pre-existing inventory found, using that.");
    this.inventory = JSON.parse(rawInventory);
  },
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
  font-weight: bold;
}
</style>