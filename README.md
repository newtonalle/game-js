# game-js

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# TODOs

## 2021-10-10
1. ~~Criar os inputs para as propriedades do player~~
2. ~~Nome? Vida? Classe?~~
3. ~~Bloquear entrar nessa tela se o player já existir!~~
4. ~~Fazer objetos do inventário~~
5. ~~Na página de inventário, mostrar as propriedades do player, já com as propriedades dos itens somadas~~
6. ~~Criar inventário default ao criar o player, e não na tela de inventário~~

## 2021-10-24
1. ~~Mudar atributos para: Strength, Dexterity, Intelligence~~
    - ~~Inventory padrão~~
    - ~~Tela de inventory~~
2. ~~Cada classe tem atributos fixos de base~~
    - ~~Warrior: 15 Strength, 5 Dexterity, 0 Intelligence~~
    - ~~Archer: 5 Strength, 10 Dexterity, 5 Intelligence~~
    - ~~Mage: 5 Strength, 0 Dexterity, 15 Intelligence~~
3. ~~O jogador pode escolher aonde adicionar 5 pontos entre os atributos no momento de criação~~
    - ~~Mostrar na tela quantos pontos estão sobrando~~
    - ~~Adicionar validação para garantir que apenas 5 pontos são atribuidos~~
         - ~~Não pode tirar menos do que a base da classe~~
         - ~~Não pode adicionar mais que 5 pontos no total~~
    - ~~Adicionar um botão 'Reset Stats' que retorna desaloca todos os pontos~~

## 2021-10-30
### Inventário
1. ~~Imprimir, abaixo do nome do item, os stats que ele dá~~
2. ~~Os itens podem ter um requerimento mínimo de um ou mais stats para permitir equipar~~
    - ~~Isso também precisa estar impresso na tela~~
    - Atenção para quando remover um item e diminuir os stats pode tornar outro item que está equipado como não equipado
3. ~~O item deve ser um componente separado (tipo o statspicker)~~
4. ~~O jogador tem 3 slots de item - capacete, armadura e arma~~
    - ~~Só pode ser equipado um item por slot~~
    - ~~O slot que o item ocupa também deve ser impresso no item~~
5. ~~Na tela de inventário mostrar também **vida máxima**, **defesa**, **mana máxima**,  **dano**~~ **Porém ainda é necessário ajustes e consertos**
    - ~~vida máxima = 200 + 20*strength~~
    - ~~defesa = 10 + 1*dexterity~~
    - ~~mana máxima = 100 + 5*intelligence~~
    - ~~dano = 30 + 1*<attributo principal da classe>~~
        - ~~warrior: attributo principal = strength~~
        - ~~archer: attributo principal = dexterity~~
        - ~~mage: attributo principal = intelligence~~
        - ~~Dentro da classe, além do baseStats deve ter o atributo principal~~
