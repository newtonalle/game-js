<template>
  <div class="hello">
    <h1>Oi</h1>
    <button @click="variables">Variaveis</button> <br />
    <button @click="variableTypesUpToArray">
      Tipos de variáveis (inteiro a array)
    </button>
    <br />
    <button @click="variableTypesObjects">Tipos de variáveis (objetos)</button>
    <br />
    <button @click="variableTypesFunctions">
      Tipos de variáveis (funções)
    </button>
    <br />
    <button @click="variableTypes">Tipos de variáveis (combinando tudo)</button>
    <br />
    <button @click="advancedObjects">Objetos - Avançado</button> <br />
    <button @click="classes">Classes</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    variables() {
      // Variaveis não tem tipos declarados! A unica diferença é o const ou o let

      // Const é para variáveis que não podem mudar de valor
      const x = 1;
      // x = 2; Isso daria erro, pois a variavel estaria trocando de valor
      console.log("const", x);

      // Let é ao contrario, você pode mudar o valor mais de uma vez
      let y = 1;
      console.log("Let", y);
      y = 2;
      console.log("Let", y);
    },
    variableTypesUpToArray() {
      // Variaveis podem ser numericas, string, array, objeto ou função
      // Variavel numerica
      const varNum = 123.123;
      console.log("Variavel numerica", varNum);

      // Variavel string
      const varStr = "Oi Carlos";
      console.log("Variavel string", varStr);

      // Variavel array
      // Tipos de variavel são definidos pelos valores apenas
      const x = [1];
      console.log("Variavel array inteiro", x);

      // Os arrays nem sempre precisam ter o mesmo tipo, pode usar tipos diferentes no mesmo array
      // Isso não é uma boa prática
      const y = [1, "abcd", 2.32, null];
      console.log("Array com vários tipos", y);

      // Arrays tem métodos padrões para interagir com eles
      console.log("Tamanho da variável x", x.length);

      // Elementos podem ser adicionados no final do array usando push
      x.push(2);
      console.log("Tamanho da variável x", x.length);
      console.log("Variavel array inteiro", x);

      // Elementos podem ser removidos do final do array usando pop
      x.pop();
      console.log("Tamanho da variável x", x.length);
      console.log("Variavel array inteiro", x);

      // Elementos podem ser adicionados no começo do array usando unshift
      x.unshift(3);
      console.log("Tamanho da variável x", x.length);
      console.log("Variavel array inteiro", x);

      // Elementos podem ser adicionados em qqr posição usando o splice
      x.splice(1, 0, 5);
      console.log("Tamanho da variável x", x.length);
      console.log("Variavel array inteiro", x);

      // O splice pode deletar elemento do valor usando o segundo parametro
      x.splice(1, 1);
      console.log("Tamanho da variável x", x.length);
      console.log("Variavel array inteiro", x);
    },
    variableTypesObjects() {
      // No javascript tudo é um objeto, desde números, strings, arrays, tudo.
      // As variáveis podem ser um objeto genérico com chave e valor
      const pessoa = {
        nome: "Carlos",
        idade: 13,
        linguagens: ["C", "C++", "Javascript"],
        mae: {
          nome: "Carlita",
          idade: 48,
        },
      };
      console.log(pessoa);

      // Podemos adicionar novos atributos a um objeto ou modificar atributos existentes só usando .
      pessoa.escola = "Escola municipal da pqp";
      pessoa.idade = 14;
      console.log(pessoa);

      // Podemos deletar atributos usando delete
      delete pessoa.escola;
      console.log(pessoa);

      // Tem um jeito abreviado de criar objetos usando variávies
      const nome = "Carlos";
      const pessoa2 = {
        nome, // é equivalente a nome: nome
      };
      console.log(pessoa2);
    },
    variableTypesFunctions() {
      // Variveis podem ser funções
      const funcao = (arg1) => {
        console.log("Dentro da função", arg1);
      };

      function funcao2(arg1) {
        console.log("Dentro da função 2", arg1);
      }

      funcao(123);
      funcao2(456);
    },
    variableTypes() {
      // Podemos combinar todos os tipos de variavel em uma só variavel
      const pessoas = [
        {
          nome: "Carlos",
          escola: "Escola municipal da pqp",
          idade: 13,
          linguagens: ["C", "C++", "Javascript"],
          peidar(volume) {
            console.log("Peidando no volume", volume);
          },
        },
        {
          nome: "Claudio",
          escola: "Escola da vida",
          idade: 13,
          linguagens: ["Javascript"],
          peidar() {
            console.log("Claudio nao peida");
          },
        },
      ];
      console.log(pessoas);
      pessoas[0].peidar(9999);
    },
    advancedObjects() {
      // Um objeto pode sofrar uma operação de spread para pegar atributos especificos
      const pessoa = {
        nome: "Carlos",
        idade: 13,
        linguagens: ["C", "C++", "Javascript"],
        mae: {
          nome: "Carlita",
        },
        escola: "Escola municipal da pqp",
      };

      // Posso pegar um atributo do objeto usando {} e faz uma copia do atributo do objeto com o mesmo nome
      // No caso de arrays ou objetos, eles são passados por referência, então ao usar métodos que modificam eles
      // por exemplo, push ou ., a variavel original também vai ser modificada
      let { nome, linguagens, mae, ...resto } = pessoa;
      console.log(nome, linguagens, mae);
      console.log("Resto", resto);

      nome = "Joao";
      linguagens.push("Python");
      mae.nome = "Carlota";
      console.log(pessoa);

      // Esse mesmo mecanismo pode ser usado em arrays usando [] ao inves de {}
      const array = [100, 300, 500, 1000];
      const [num1, num2, ...restoArray] = array;
      console.log(num1, num2);
      console.log("Resto", restoArray);
    },
    classes() {
      class Pessoa {
        constructor(nome, idade) {
          this.nome = nome;
          this.idade = idade;
        }

        peidar(volume) {
          console.log(`${this.nome} está peidando no volume ${volume}`);
        }
      }

      const pessoa = new Pessoa("Carlos", 13);
      console.log(pessoa);
      pessoa.peidar(123);
    },
  },
};
</script>

<style scoped>
</style>
