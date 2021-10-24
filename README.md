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
2. Nome? Vida? Classe? - Feito
3. Bloquear entrar nessa tela se o player já existir! - Era pra tá funcionado mais não tá \_o_o_/
4. Fazer objetos do inventário - Não consegui fazer mostrar, mas o o objeto funciona
5. Na página de inventário, mostrar as propriedades do player, já com as propriedades dos itens somadas - Feito
6. Criar inventário default ao criar o player, e não na tela de inventário - Feito

## 2021-10-24
1. Mudar atributos para: Strength, Dexterity, Intelligence
    - Inventory padrão
    - Tela de inventory
2. Cada classe tem atributos fixos de base
    - Warrior: 15 Strength, 5 Dexterity, 0 Intelligence
    - Archer: 5 Strength, 10 Dexterity, 5 Intelligence
    - Mage: 5 Strength, 0 Dexterity, 15 Intelligence
3. O jogador pode escolher aonde adicionar 5 pontos entre os atributos no momento de criação
    - Mostrar na tela quantos pontos estão sobrando
    - Adicionar validação para garantir que apenas 5 pontos são atribuidos
         - Não pode tirar menos do que a base da classe
         - Não pode adicionar mais que 5 pontos no total
    - Adicionar um botão 'Reset Stats' que retorna desaloca todos os pontos
