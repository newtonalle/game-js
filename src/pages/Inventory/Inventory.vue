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
      • {{ equipament }}
      <span class="clickable" @click="equipItem(index)">E</span>
    </p>
    <h3>Equipamentos equipados</h3>
    <p
      v-for="(equipament, index) in this.inventory.equipedItems"
      :key="`equiped-${index}`"
    >
      • {{ equipament }}
      <span class="clickable" @click="unequipItem(index)">U</span>
    </p>
  </div>
</template>

<script>
// Criar um formato para um objeto de item:
// {nome: "Trevo", defesa: 1, ataque: 2, vida: 3, chanceDeCritico: 0.2}
const DEFAULT_INVENTORY = {
  equipedItems: [],
  unequipedItems: ["Trevo", "Cartola", "Casaco"], // tornar cada item em um item de verdade, não só nome de item
};

export default {
  data: () => ({
    inventory: {},
  }),
  methods: {
    equipItem(index) {
      let item;
      item = this.inventory.unequipedItems[index];
      this.inventory.unequipedItems.splice(index, 1);
      this.inventory.equipedItems.push(item);
      this.storeInventory(this.inventory);
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
  mounted() {
    const rawInventory = localStorage.getItem("game-inventory");
    if (rawInventory === null) {
      console.log("First time on inventory, populating default inventory");
      this.storeInventory(DEFAULT_INVENTORY);
      this.inventory = DEFAULT_INVENTORY;
    } else {
      console.log("Pre-existing inventory found, using that.");
      this.inventory = JSON.parse(rawInventory);
    }
  },
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
  font-weight: bold;
}
</style>