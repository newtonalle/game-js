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
    ], // tornar cada item em um item de verdade, não só nome de item
};

export const doubleCount = (context) => context.commit('increment', context.state.count)

export const newPlayer = (context, player) => {
    context.commit('setPlayer', player)
    context.commit('setInventory', DEFAULT_INVENTORY)
}

export const resetState = (context) => context.commit('setState', defaultState())

export const setInventory = (context, inventory) => context.commit('setInventory', inventory)