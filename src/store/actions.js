import defaultState from './state'


const DEFAULT_INVENTORY = {
    equipmentSlots: {
        helmet: false,
        armor: false,
        mainHand: false,
    },
    equipedItems: [],
    unequipedItems: [
        {
            name: "Capacete Viking",
            strength: 0,
            dexterity: 3,
            intelligence: 1,
            type: "helmet",
            minRequirements: {
                strength: 15,
                dexterity: 5,
                intelligence: 0,
            },
        },

        {
            name: "Colete",
            strength: 5,
            dexterity: 10,
            intelligence: 2,
            type: "armor",
            minRequirements: {
                strength: 0,
                dexterity: 0,
                intelligence: 0,
            },
        },

        {
            name: "Adaga",
            strength: 0,
            dexterity: 15,
            intelligence: 5,
            type: "mainHand",
            minRequirements: {
                strength: 0,
                dexterity: 0,
                intelligence: 0,
            },
        },
        {
            name: "Adaga II",
            strength: 0,
            dexterity: 15,
            intelligence: 5,
            type: "mainHand",
            minRequirements: {
                strength: 0,
                dexterity: 0,
                intelligence: 0,
            },
        },
    ],
};

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