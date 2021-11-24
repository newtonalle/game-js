<template>
  <div>
    <h1>Tutorial VueX</h1>

    <h2>Contador 1</h2>
    <counter />

    <br /><br />
    <h2>Contador 2</h2>
    <counter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
export default {
  components: {
    Counter
  }
}
</script>