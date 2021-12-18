export const DEFAULT_INVENTORY = {
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