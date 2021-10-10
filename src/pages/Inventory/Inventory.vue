<template>
  <div>
    <br />
    <a href="/#/battle">Voltar para a batalha</a>
    <br />
    <h1>Inventário</h1>
    <br />
    <h3>Equipamentos não equipados</h3>
    <p
      v-for="(equipament, index) in this.inventory.unequipedEquipaments"
      :key="`unequiped-${index}`"
    >
      • {{ equipament }}
      <span class="clickable" @click="equipItem(index)">E</span>
    </p>
    <h3>Equipamentos equipados</h3>
    <p
      v-for="(equipament, index) in this.inventory.equipedEquipaments"
      :key="`equiped-${index}`"
    >
      • {{ equipament }}
      <span class="clickable" @click="unequipItem(index)">U</span>
    </p>
  </div>
</template>

<script>
// Lição
// 1 - Adicionar uma rota pra o inventory - Feito
// 2 - Criar objeto para o inventário - Feito
// 3 - Mostrar uma lista de equipamentos nesta página - Feito
// 4 - Fazer um botão de equipar/desequipar item para cada item do inventário - Feito
// 5 - Mostrar uma sessão com os itens equipados - Feito

export default {
  data: () => ({
    inventory: {
      equipedEquipaments: [],
      unequipedEquipaments: ["Trevo", "Cartola", "Casaco"], // tornar cada item em um item de verdade, não só nome de item
    },
  }),
  methods: {
    equipItem(index) {
      let item;
      item = this.inventory.unequipedEquipaments[index];
      this.inventory.unequipedEquipaments.splice(index, 1);
      this.inventory.equipedEquipaments.push(item);
    },
    unequipItem(index) {
      let item;
      item = this.inventory.equipedEquipaments[index];
      this.inventory.equipedEquipaments.splice(index, 1);
      this.inventory.unequipedEquipaments.push(item);
    },
  },
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
  font-weight: bold;
}
</style>