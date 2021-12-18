export const complexCounterCalculation = (state) => state.count ** 5 / 3 - 4

export const playerStrength = (state) => state.player.strength + state.inventory.equipedItems.reduce(
    (strength, item) => strength + item.strength, 0)

export const playerDexterity = (state) => state.player.dexterity + state.inventory.equipedItems.reduce(
    (dexterity, item) => dexterity + item.dexterity, 0)

export const playerIntelligence = (state) => state.player.intelligence + state.inventory.equipedItems.reduce(
    (intelligence, item) => intelligence + item.intelligence, 0)



export const playerMaxHealth = (state) => state.player.basicStats.maxHealth + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerStrength"
    (strength, item) => strength + item.strength, 0) + state.player.strength) * 20

export const playerCurrentHealth = (state) => state.player.currentStats.currentHealth

export const playerMaxMana = (state) => state.player.basicStats.maxMana + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerIntelligence"
    (intelligence, item) => intelligence + item.intelligence, 0) + state.player.intelligence) * 5

export const playerCurrentMana = (state) => state.player.currentStats.currentMana

export const playerDefense = (state) => state.player.basicStats.defense + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerDexterity"
    (dexterity, item) => dexterity + item.dexterity, 0) + state.player.dexterity) * 1

export const playerDamage = (state) => state.player.basicStats.damage + state.inventory.equipedItems.reduce( // Deveria ser o getter: ""player" + state.player.class.mainStat"
    (atribute, item) => atribute + item[state.player.class.mainStat], 0) + state.player[state.player.class.mainStat] * 1

export const isNewPlayer = (state) => state.player === null