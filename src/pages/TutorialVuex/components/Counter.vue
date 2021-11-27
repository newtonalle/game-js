<template>
  <div>
    <p>Contador: {{ count }}</p>
    <p>Dobro do contador: {{ complexCounterCalculation }}</p>
    <button @click="incrementCounter">Incrementar</button>
    <button @click="decrementCounter">Decrementar</button>
    <button @click="doubleCounter">Dobrar</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    complexCounterCalculation() {
      return this.$store.getters.complexCounterCalculation;
    },
  },
  methods: {
    incrementCounter() {
      this.$store.commit("increment", 1);
    },
    decrementCounter() {
      this.$store.commit("decrement", 1);
    },
    doubleCounter() {
      this.$store.dispatch("doubleCount");
    },
  },
};
</script>
