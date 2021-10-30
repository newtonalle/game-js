<template>
  <div>
    <p>{{ attributeLabel }}</p>
    <input
      v-model="localAttribute"
      type="number"
      :placeholder="attributeLabel"
      disabled
    />
    <button
      @click="adjustAttribute(-1)"
      :disabled="disabled || attribute <= minimumAttribute"
    >
      -
    </button>
    <button
      @click="adjustAttribute(1)"
      :disabled="disabled || localSkillPoints <= 0"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  // Props são as propriedades que o componente recebe quando 'chamado' por outro componente
  props: {
    attributeLabel: String,
    attribute: Number,
    minimumAttribute: Number,
    skillPoints: Number,
    disabled: Boolean,
  },

  data: () => ({
    localAttribute: 0,
    localSkillPoints: 0,
  }),

  watch: {
    attribute(value) {
      this.localAttribute = value;
    },

    localAttribute(value) {
      // Se o nome do evento for update:<prop>, onde <prop> é o que o componente recebeu como parametro
      // isso libera para o pai, usar um modificador no parametro que vai automaticamente detecter esse evento
      // e atualizar o valor do parametro no pai.
      this.$emit("update:attribute", value);
    },

    skillPoints(value) {
      this.localSkillPoints = value;
    },

    localSkillPoints(value) {
      this.$emit("update:skillPoints", value);
    },
  },

  methods: {
    adjustAttribute(amount) {
      this.localAttribute += amount;
      this.localSkillPoints -= amount;
    },
    pointsCheckMinimum() {
      return this.attribute <= this.minimumAttribute;
    },
    pointsCheckMaximum() {},
  },

  mounted() {
    this.localAttribute = this.attribute;
    this.localSkillPoints = this.skillPoints;
  },
};
</script>