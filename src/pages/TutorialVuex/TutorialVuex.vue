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
import Counter from "./components/Counter.vue";
export default {
  components: {
    Counter,
  },
};
// Vuex é usado para simplificar a parte de conter dados do site, por meio de um sistema simples de comunicação entre
// componentes

// O Vuex transforma as variáveis (let/var variableName) em states que são contidos em formatos de objetos
//(const state = {
//counterA: 1,
//counterB: 3,
//counterC: 9
//})
// Para chamar um state a sintaxe usada é (objectStateName.stateName) igual a sintaxe de chamar objetos.

// O Vuex transforma as funções (functionName (paramether) {function}) em múltiplas mutations
// Para cada mutation: (const mutationName = (state, newState) => stateName.oldState = newState)
// O state sempre deve ser passado como parâmetro para que a mutation acesse o state e o altere ou
// acesse suas informações.
// O segundo parâmetro geralmente é passado como o novo valor do state específico.
// Para chamar uma mutation a sintaxe usada é (actionContextName.commit('mutationName', newStateForTheMutation))

// O Vuex cria getters e actions:

// Os getters servem para conter funções mais complexas com retornos dentro do estoque, por exemplo:
// complexGetter = (state) => objectStateName.stateName * 333 + 8
// E chamando o getter usando a sintaxe:
// ($store.gettersStorageName.getterName)

// As actions servem para acessar múltiplas mutations de uma vez, como se
// fosse um conjunto de ações que são rodadas.

// Para cada action:
// (const actionName = (context) => context.commit('mutationName', context.objectStateName.statename))
// Uma action pode ser chamada usando a sintaxe ($store.dispatch('actionName')) ativando toda a corrente e ações.

// A corrente segue na ordem:
// -> (Alteram States) -> Ativam Actions -> Ativam Mutations -> (Usam getters) -> Alteram States e o ciclo continua...
</script>