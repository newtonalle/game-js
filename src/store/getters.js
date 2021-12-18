export const complexCounterCalculation = (state) => state.count ** 5 / 3 - 4

export const playerStrength = (state) => state.player.strength + state.inventory.equipedItems.reduce(
    (strength, item) => strength + item.strength, 0)

export const playerDexterity = (state) => state.player.dexterity + state.inventory.equipedItems.reduce(
    (dexterity, item) => dexterity + item.dexterity, 0)

export const playerIntelligence = (state) => state.player.intelligence + state.inventory.equipedItems.reduce(
    (intelligence, item) => intelligence + item.intelligence, 0)

export const playerMainStat = (state) => {
    switch (state.player.class.mainStat) {
        case 'strength':
            return playerStrength(state)
        case 'intelligence':
            return playerIntelligence(state)
        case 'dexterity':
            return playerDexterity(state)
    }
}



export const playerMaxHealth = (state) => state.player.basicStats.maxHealth + playerStrength(state) * 20

export const playerCurrentHealth = (state) => state.player.currentStats.currentHealth

export const playerCurrentHealthPercentage = (state) => state.player.currentStats.currentHealth / playerMaxHealth(state)

export const playerMaxMana = (state) => state.player.basicStats.maxMana + playerIntelligence(state) * 5

export const playerCurrentMana = (state) => state.player.currentStats.currentMana

export const playerCurrentManaPercentage = (state) => state.player.currentStats.currentMana / playerMaxMana(state)

export const playerDefense = (state) => state.player.basicStats.defense + playerDexterity(state) * 1

export const playerDamage = (state) => state.player.basicStats.damage + playerMainStat(state) * 1

export const isNewPlayer = (state) => state.player === null