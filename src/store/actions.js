import defaultState from './state'
import { DEFAULT_INVENTORY } from './constants'

export const doubleCount = (context) => context.commit('increment', context.state.count)

export const newPlayer = (context, player) => {
    player.currentStats = {
        currentHealth: 0,
        currentMana: 0
    }

    context.commit('setPlayer', player)
    context.commit('setInventory', DEFAULT_INVENTORY)

    context.commit('setPlayerHealth', context.getters.playerMaxHealth)
    context.commit('setPlayerMana', context.getters.playerMaxMana)
}

export const resetState = (context) => context.commit('setState', defaultState())

export const setInventory = (context, inventory) => context.commit('setInventory', inventory)

export const unequipItem = ({ commit, state, getters }, index) => {
    const forceRemovedItems = []
    const item = state.inventory.equipedItems[index] // Deveria ser a mutation: "removeItem"

    const currentHealthPercentage = getters.playerCurrentHealthPercentage
    const currentManaPercentage = getters.playerCurrentManaPercentage

    commit('unequipItem', { item, index })

    for (let [
        forceUnequipIndex,
        forceUnequipItem,
    ] of state.inventory.equipedItems.entries()) {
        if (
            forceUnequipItem.minRequirements.strength > getters.playerStrength ||
            forceUnequipItem.minRequirements.dexterity > getters.playerDexterity ||
            forceUnequipItem.minRequirements.intelligence > getters.playerIntelligence
        ) {
            forceRemovedItems.push(forceUnequipItem)
            commit('unequipItem', { item: forceUnequipItem, index: forceUnequipIndex })
        }
    }

    commit('setPlayerHealth', currentHealthPercentage * getters.playerMaxHealth)
    commit('setPlayerMana', currentManaPercentage * getters.playerMaxMana)

    if (forceRemovedItems.length) {
        alert(
            forceRemovedItems.reduce(
                (message, item) => message + `\n${item.name}`,
                ""
            ) + " foi desequipado por falta de algum status!"
        )
    }
}

export const equipItem = ({ state, commit, getters }, index) => {
    const item = state.inventory.unequipedItems[index]

    if (
        item.minRequirements.strength <= getters.playerStrength &&
        item.minRequirements.intelligence <= getters.playerIntelligence &&
        item.minRequirements.dexterity <= getters.playerDexterity &&
        !state.inventory.equipmentSlots[item.type]
    ) {
        const currentHealthPercentage = getters.playerCurrentHealthPercentage
        const currentManaPercentage = getters.playerCurrentManaPercentage

        commit('equipItem', { item, index })

        commit('setPlayerHealth', currentHealthPercentage * getters.playerMaxHealth)
        commit('setPlayerMana', currentManaPercentage * getters.playerMaxMana)
    } else {
        alert("Não é possível equipar o item")
    }

}