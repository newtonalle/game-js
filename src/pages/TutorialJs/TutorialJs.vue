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
    <button @click="advancedArrays">Arrays - Avançado</button> <br />
    <button @click="classes">Classes</button>

    <br /><br />
    <button @click="incrementLocalStorage">Incrementar local storage</button>

    <br /><br />
    <button @click="json">JSON tutorial</button>
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

      // Object entries
      // Retorna um array em que cada posição é um atributo do objeto no formato (nome atributo, valor atributo)
      console.log('Entries', Object.entries(pessoa))
    },
    advancedArrays() {
      // Existem 3 principais métodos para usar com arrays, o foreach, o map e o reduce
      const array = [10, 20, 30, 40];
      let returnValue;
      // forEach é uma abreviação de um loop nos elementos do array.
      // Ele recebe como parâmetro uma função que recebe como parâmetro o elemento e o índice de cada interação
      // no array
      // forEach não retorna nada
      returnValue = array.forEach((el, index) => {
        console.log(`forEach - El=${el} index=${index}`);
      });
      console.log(`forEach - Returned value is ${returnValue}`);
      // É equivalente a
      for (const el of array) {
        console.log(`for of - El=${el}`);
      }

      // Map funciona quase igual ao forEach, porém ele retorna um array com o mesmo tamanho do array original,
      // porém com os elementos retornados pela função que é passada como parametro
      returnValue = array.map((el, index) => {
        console.log(`map - El=${el} index=${index}`);
        return el + index;
      });
      console.log(`map - Returned value is`, returnValue);

      // Reduce funciona quase igual ao forEach também, porém ele retorna um objeto acumulado entre as iterações
      // no array, de acordo com o retorno da função que é passada como parâmetro
      // Ele também tem um parâmetro a mais (além da função que passamos nos outros) com o valor inicial do reduce.
      // A função que é passada como parametro (callback) recebe como primeiro parametro o valor retornado
      // da iteração anterior.

      // Por exemplo, a soma
      returnValue = array.reduce((acc, el, index) => {
        console.log(`reduce - Acc=${acc} El=${el} index=${index}`);
        return acc + el;
      }, 0);
      console.log(`reduce - Returned value is`, returnValue);

      // Por exemplo, a multiplicacao
      returnValue = array.reduce((acc, el, index) => {
        console.log(`reduce - Acc=${acc} El=${el} index=${index}`);
        return acc * el;
      }, 1);
      console.log(`reduce - Returned value is`, returnValue);

      // Posso retornar um objeto, não precisa ser um numero
      // {10: 0, 20: 1, 30: 2, 40: 3}
      returnValue = array.reduce((acc, el, index) => {
        console.log(`reduce - Acc=${acc} El=${el} index=${index}`);
        // acc[el] = index;
        // return acc;
        return { ...acc, [el]: index };
      }, {});
      console.log(`reduce - Returned value is`, returnValue);

      console.log('Entries', array.entries())
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
    incrementLocalStorage() {
      // Para interagir com o armazenamento local do browser, usamos 2 funções
      // localStorage.getItem e localStorage.setItem
      let value = localStorage.getItem("tutorial_value"); // Sempre que pega do localstorage, objeto vem como string
      console.log("Value was", value);
      if (!value) {
        value = 0;
      }
      value = parseInt(value) + 1;
      console.log("Value is", value);
      localStorage.setItem("tutorial_value", value);
    },
    json() {
      // JSON é um formato de arquivo utilizado para representar objetos.
      // Ele é muito semelhante a um objeto do node {chave: "valor"}.
      // Existem funções do javascript na biblioteca JSON que transformam um objeto em JSON e vice versa.
      const obj = {
        name: "Claudio",
        surname: "Bochecha",
      };
      console.log("Obj", obj);

      // A versão "JSON" é uma string do objeto é obtida usando JSON.stringify
      const jsonObj = JSON.stringify(obj);
      console.log("Obj on JSON", jsonObj);

      // É possível converter uma string no formato 'JSON' para um objeto do node usando JSON.parse
      const objFromJson = JSON.parse(jsonObj);
      console.log("Obj parsed from JSON", objFromJson);
    },
  },
  // Ciclo de vida dos componentes
  // https://br.vuejs.org/v2/guide/instance.html
  created() {
    // Quando um componente é criado em memória, ele passa pela função created
    console.log("Im being created!");
  },
  mounted() {
    // Quando um componente que está em memória é renderizado na tela, ele passa pela função mounted
    console.log("Im being mounted!");
  },
  destroyed() {
    // Quando um componente é deletado
    console.log("Im being destroyed!");
  },
};
</script>

<style scoped>
</style>
