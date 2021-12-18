export const increment = (state, amount) => state.count += amount
export const decrement = (state, amount) => state.count -= amount
export const setPlayer = (state, player) => state.player = player
export const setInventory = (state, inventory) => state.inventory = inventory

export const equipItem = (state, index) => {
    const item = state.inventory.unequipedItems[index]
    if (
        item.minRequirements.strength <= state.player.strength + state.inventory.equipedItems.reduce(
            (strength, item) => strength + item.strength, 0) && // Deveria ser o getter: "playerStrength"
        item.minRequirements.dexterity <= state.player.dexterity + state.inventory.equipedItems.reduce(
            (dexterity, item) => dexterity + item.dexterity, 0) && // Deveria ser o getter: "playerDexterity"
        item.minRequirements.intelligence <= state.player.intelligence + state.inventory.equipedItems.reduce(
            (intelligence, item) => intelligence + item.intelligence, 0) && // Deveria ser o getter: "playerIntelligence"
        !state.inventory.equipmentSlots[item.type]
    ) {
        state.inventory.unequipedItems.splice(index, 1)
        state.inventory.equipedItems.push(item)
        state.inventory.equipmentSlots[item.type] = true
        state.player.currentStats.currentHealth = (state.player.basicStats.maxHealth + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerMaxHealth"
            (strength, item) => strength + item.strength, 0) + state.player.strength) * 20) / 100 * state.player.currentStats.currentHealthPercentage
        state.player.currentStats.currentMana = (state.player.basicStats.maxMana + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerMaxMana"
            (intelligence, item) => intelligence + item.intelligence, 0) + state.player.intelligence) * 5) / 100 * state.player.currentStats.currentManaPercentage
    } else {
        alert("Não é possível equipar o item")
    }

}
export const setState = (prevState, newState) => Object.assign(prevState, newState)

export const setCurrentStats = (state, percentage) => {
    state.player.currentStats.currentHealth = (state.player.basicStats.maxHealth + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerMaxHealth"
        (strength, item) => strength + item.strength, 0) + state.player.strength) * 20) / 100 * percentage

    state.player.currentStats.currentMana = (state.player.basicStats.maxMana + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerMaxMana"
        (intelligence, item) => intelligence + item.intelligence, 0) + state.player.intelligence) * 5) / 100 * percentage
}

export const unequipItem = (state, index) => {
    const forceRemovedItems = []
    const item = state.inventory.equipedItems[index] // Deveria ser a mutation: "removeItem"
    state.inventory.equipedItems.splice(index, 1)
    state.inventory.unequipedItems.push(item)
    state.inventory.equipmentSlots[item.type] = false

    state.player.currentStats.currentHealth = (state.player.basicStats.maxHealth + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerMaxHealth"
        (strength, item) => strength + item.strength, 0) + state.player.strength) * 20) / 100 * state.player.currentStats.currentHealthPercentage

    state.player.currentStats.currentMana = (state.player.basicStats.maxMana + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerMaxMana"
        (intelligence, item) => intelligence + item.intelligence, 0) + state.player.intelligence) * 5) / 100 * state.player.currentStats.currentManaPercentage

    for (let [
        forceUnequipIndex,
        forceUnequipItem,
    ] of state.inventory.equipedItems.entries()) {
        if (
            forceUnequipItem.minRequirements.strength >
            (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerStrength"
                (strength, item) => strength + item.strength, 0) + state.player.strength) ||
            forceUnequipItem.minRequirements.dexterity >
            (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerDexterity"
                (dexterity, item) => dexterity + item.dexterity, 0) + state.player.dexterity) ||
            forceUnequipItem.minRequirements.intelligence >
            (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerIntelligence"
                (intelligence, item) => intelligence + item.intelligence, 0) + state.player.intelligence)
        ) {
            const removedItem = state.inventory.equipedItems[forceUnequipIndex] // Deveria ser a mutation: "removeItem"
            state.inventory.equipedItems.splice(forceUnequipIndex, 1)
            state.inventory.unequipedItems.push(removedItem)
            state.inventory.equipmentSlots[removedItem.type] = false
            forceRemovedItems.push(removedItem)

            state.player.currentStats.currentHealth = (state.player.basicStats.maxHealth + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerMaxHealth"
                (strength, item) => strength + item.strength, 0) + state.player.strength) * 20) / 100 * state.player.currentStats.currentHealthPercentage

            state.player.currentStats.currentMana = (state.player.basicStats.maxMana + (state.inventory.equipedItems.reduce( // Deveria ser o getter: "playerMaxMana"
                (intelligence, item) => intelligence + item.intelligence, 0) + state.player.intelligence) * 5) / 100 * state.player.currentStats.currentManaPercentage
        }
    }
    if (forceRemovedItems.length) {
        alert(
            forceRemovedItems.reduce(
                (message, item) => message + `\n${item.name}`,
                ""
            ) + " foi desequipado por falta de algum status!"
        )
    }
}
