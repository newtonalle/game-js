// export const <nome da função> significa que toda vez que importarem este arquivo
// Precisa ser pedido explicitamente essa função
export const isNewPlayer = () => {
    return !localStorage.getItem('game-player')
}