<template>
  <div class="item">
    <hr class="rounded" />
    <p style="font-weight: bold">• {{ equipamentName }}</p>
    <p>Tipo: {{ equipamentType }}</p>
    <p>Força: {{ equipamentStrength }}</p>
    <p>Destreza: {{ equipamentDexterity }}</p>
    <p>Inteligência: {{ equipamentIntelligence }}</p>
    <p style="font-weight: bold">Requisitos para equipar:</p>
    <p>Força Mínima: {{ equipamentMinRequirementsStrength }}</p>
    <p>Destreza Mínima: {{ equipamentMinRequirementsDexterity }}</p>
    <p>Inteligência Mínima: {{ equipamentMinRequirementsIntelligence }}</p>
    <button @click="toggleItem">{{ actionLabel }}</button>
  </div>
</template>

<script>
export default {
  props: {
    equipamentName: String,
    equipamentType: String,
    equipamentStrength: Number,
    equipamentDexterity: Number,
    equipamentIntelligence: Number,
    equipamentMinRequirementsStrength: Number,
    equipamentMinRequirementsDexterity: Number,
    equipamentMinRequirementsIntelligence: Number,
    equiped: Boolean,
  },

  data: () => ({}),

  computed: {
    actionLabel() {
      return this.equiped ? "Desequipar" : "Equipar";
    },
  },

  methods: {
    toggleItem() {
      this.$emit("toggleItem");
    },
  },

  mounted() {},
};
</script>

<style scoped>
hr.rounded {
  border-top: 8px solid #bbb;
  border-radius: 5px;
}
div.item {
  width: 400px;
  margin: auto;
}
</style>