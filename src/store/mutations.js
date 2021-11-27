export const increment = (state, amount) => state.count += amount
export const decrement = (state, amount) => state.count -= amount
export const setPlayer = (state, player) => state.player = player
export const setInventory = (state, inventory) => state.inventory = inventory
export const setState = (prevState, newState) => Object.assign(prevState, newState)