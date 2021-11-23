<template>
  <div>
    <br />
    <a href="/#/battle">Voltar para a batalha</a>
    <br />
    <h1>Inventário</h1>
    <br />
    <h3>Equipamentos não equipados</h3>
    <item
      v-for="(equipament, index) in this.inventory.unequipedItems"
      :key="`unequiped-${index}`"
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
      @toggleItem="equipItem(index)"
      :equiped="false"
    />
    <h3>Equipamentos equipados</h3>
    <item
      v-for="(equipament, index) in this.inventory.equipedItems"
      :key="`equiped-${index}`"
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
      equiped
      @toggleItem="unequipItem(index)"
    />
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
    <p>{{playerStats.maxHealth}}</p>
    <h4>Mana:</h4>
    <p>{{playerStats.maxMana}}</p>
    <h4>Defesa:</h4>
    <p>{{playerStats.defense}}</p>
    <h4>Dano:</h4>
    <p>{{playerStats.damage}}</p>
    <p>------------------</p>
  </div>
</template>

<script>
// Criar um formato para um objeto de item:
// {nome: "Trevo", defesa: 1, ataque: 2, vida: 3, chanceDeCritico: 0.2}

import Item from "./components/Item.vue";

export default {
  components: { Item },
  data: () => ({
    inventory: {},
    playerStats: {
      strength: 0,
      intelligence: 0,
      dexterity: 0,
    },
    player: {},
  }),
  watch: {
    // Esse watch também é executado quando o site é created, porque o inventário atualiza
    // e o watch pega logo de cara, atualizando o valor de PlayerStats para o valor do player + items
    // Apesar de isso resolver o problema que tinha, irei criar uma função que é executada quando o site é criado
    // e quando algum valor em inventory.UnequipedItems atualiza, se eu conseguir usar funções em Watch
    "inventory.unequipedItems"() {},
  },
  computed: {
    // Transforma o valor do objeto toda vez que qualquer variável muda, como um watch geral
    // Problema aqui, pois não consigo utilizar um objeto computed em Javascript, somente no HTML, o
    // que é um problema, portanto estou movendo o sistema para uma Watch
    exampleComputed() {
      return 0
    }
  },
  methods: {
    removeItem(index) {
      const item = this.inventory.equipedItems[index];
      this.inventory.equipedItems.splice(index, 1);
      this.inventory.unequipedItems.push(item);
      this.inventory.equipmentSlots[item.type] = false;

      this.recalculatePlayerStats()

      return item
    },
    recalculatePlayerStats() {
      this.playerStats = {
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
      
      this.playerStats.maxHealth = this.player.basicStats.maxHealth + this.playerStats.strength * 20
      this.playerStats.maxMana = this.player.basicStats.maxMana + this.playerStats.intelligence * 5
      this.playerStats.defense = this.player.basicStats.defense + this.playerStats.dexterity * 1;
      this.playerStats.damage = this.player.basicStats.damage + this.playerStats[this.player.class.mainStat] * 1
    },
    equipItem(index) {
      const item = this.inventory.unequipedItems[index];
      if (item.minRequirements.strength <= this.playerStats.strength &&
          item.minRequirements.dexterity <= this.playerStats.dexterity &&
          item.minRequirements.intelligence <= this.playerStats.intelligence &&
          !this.inventory.equipmentSlots[item.type]) {
        this.inventory.unequipedItems.splice(index, 1);
        this.inventory.equipedItems.push(item);
        this.inventory.equipmentSlots[item.type] = true;
        this.recalculatePlayerStats();
        this.storeInventory(this.inventory);
        console.log(this.inventory);
      } else {
        alert('Não é possível equipar o item')
      }
    },
    unequipItem(index) {
      this.removeItem(index)
      const forceRemovedItems = []
      

      for (let [forceUnequipIndex, forceUnequipItem] of this.inventory.equipedItems.entries()) {
        if (
          forceUnequipItem.minRequirements.strength > this.playerStats.strength ||
          forceUnequipItem.minRequirements.dexterity > this.playerStats.dexterity ||
          forceUnequipItem.minRequirements.intelligence > this.playerStats.intelligence
        ) {
          const removedItem = this.removeItem(forceUnequipIndex)
          forceRemovedItems.push(removedItem)
        }
      }
      if (forceRemovedItems.length) {
        alert(forceRemovedItems
          .reduce((message, item) => message + `\n${item.name}`, '') + 
          " foi desequipado por falta de algum status!"
        );
      }
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
    this.playerStats.strength = this.player.strength;
    this.playerStats.dexterity = this.player.dexterity;
    this.playerStats.intelligence = this.player.intelligence;

    this.recalculatePlayerStats()
  },
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
  font-weight: bold;
}
</style>