export const increment = (state, amount) => state.count += amount
export const decrement = (state, amount) => state.count -= amount
export const setPlayer = (state, player) => state.player = player
export const setInventory = (state, inventory) => state.inventory = inventory

export const setState = (prevState, newState) => Object.assign(prevState, newState)

export const setPlayerHealth = (state, health) => state.player.currentStats.currentHealth = health

export const setPlayerMana = (state, mana) => state.player.currentStats.currentMana = mana

export const equipItem = (state, { item, index }) => {
    state.inventory.unequipedItems.splice(index, 1)
    state.inventory.equipedItems.push(item)
    state.inventory.equipmentSlots[item.type] = true
}

export const unequipItem = (state, { item, index }) => {
    state.inventory.equipedItems.splice(index, 1)
    state.inventory.unequipedItems.push(item)
    state.inventory.equipmentSlots[item.type] = false
}
