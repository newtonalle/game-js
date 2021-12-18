<template>
  <div>
    <br />
    <a href="/#/battle">Voltar para a batalha</a>
    <br />
    <h1>Inventário</h1>
    <br />
    <h3>Equipamentos não equipados</h3>
    <item
      v-for="(equipament, index) in this.localInventory.unequipedItems"
      :key="`unequiped-${index}`"
      :equipamentName="equipament.name"
      :equipamentType="equipament.type"
      :equipamentDexterity="equipament.dexterity"
      :equipamentIntelligence="equipament.intelligence"
      :equipamentStrength="equipament.strength"
      :equipamentMinRequirementsDexterity="equipament.minRequirements.dexterity"
      :equipamentMinRequirementsIntelligence="
        equipament.minRequirements.intelligence
      "
      :equipamentMinRequirementsStrength="equipament.minRequirements.strength"
      @toggleItem="equipItem(index)"
      :equiped="false"
    />
    <h3>Equipamentos equipados</h3>
    <item
      v-for="(equipament, index) in this.localInventory.equipedItems"
      :key="`equiped-${index}`"
      :equipamentName="equipament.name"
      :equipamentType="equipament.type"
      :equipamentDexterity="equipament.dexterity"
      :equipamentIntelligence="equipament.intelligence"
      :equipamentStrength="equipament.strength"
      :equipamentMinRequirementsDexterity="equipament.minRequirements.dexterity"
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
    <p>{{ playerStats.strength }}</p>
    <h4>Destreza:</h4>
    <p>{{ playerStats.dexterity }}</p>
    <h4>Inteligência:</h4>
    <p>{{ playerStats.intelligence }}</p>
    <h4>Classe:</h4>
    <p v-text="player.class.name"></p>
    <h4>Vida:</h4>
    <p>{{ playerStats.currentHealth }} / {{ playerStats.maxHealth }}</p>
    <h4>Mana:</h4>
    <p>{{ playerStats.currentMana }} / {{ playerStats.maxMana }}</p>
    <h4>Defesa:</h4>
    <p>{{ playerStats.defense }}</p>
    <h4>Dano:</h4>
    <p>{{ playerStats.damage }}</p>
    <p>------------------</p>
  </div>
</template>

<script>
import Item from "./components/Item.vue";

export default {
  components: { Item },
  data: () => ({
    localInventory: {},
  }),
  watch: {
    "inventory.unequipedItems"() {},
  },
  computed: {
    exampleComputed() {
      return 0;
    },

    player() {
      return this.$store.state.player;
    },

    inventory() {
      return this.$store.state.inventory;
    },
    playerStats() {
      return {
        strength: this.$store.getters.playerStrength,
        intelligence: this.$store.getters.playerIntelligence,
        dexterity: this.$store.getters.playerDexterity,

        maxHealth: this.$store.getters.playerMaxHealth,
        currentHealth: this.$store.getters.playerCurrentHealth,
        maxMana: this.$store.getters.playerMaxMana,
        currentMana: this.$store.getters.playerCurrentMana,
        defense: this.$store.getters.playerDefense,
        damage: this.$store.getters.playerDamage,
      };
    },
  },
  methods: {
    unequipItem(index) {
      this.$store.dispatch("unequipItem", index);
    },

    equipItem(index) {
      this.$store.dispatch("equipItem", index);
    },
  },
  created() {
    this.localInventory = this.inventory;
  },
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
  font-weight: bold;
}
</style>