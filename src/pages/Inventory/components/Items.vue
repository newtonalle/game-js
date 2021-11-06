<template>
  <div>
    <p>------------------</p>
    <p style="font-weight: bold">• {{ equipamentName }}</p>
    <p>Tipo: {{ equipamentType }}</p>
    <p>Força: {{ equipamentStrength }}</p>
    <p>Destreza: {{ equipamentDexterity }}</p>
    <p>Inteligência: {{ equipamentIntelligence }}</p>
    <p style="font-weight: bold">Requisitos para equipar:</p>
    <p>Força Mínima: {{ equipamentMinRequirementsStrength }}</p>
    <p>Destreza Mínima: {{ equipamentMinRequirementsDexterity }}</p>
    <p>Inteligência Mínima: {{ equipamentMinRequirementsIntelligence }}</p>
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
  },

  data: () => ({}),

  watch: {},

  methods: {},

  mounted() {},
};
</script>