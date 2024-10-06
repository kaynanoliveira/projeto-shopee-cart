// Quais ações meu carrinho pode fazer


// ✅ -> Adicionar item ao carrinho
async function addItem(userCart, item){
    userCart.push(item)
}

// ✅ -> Calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:!")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`💲Preço: ${result}`)
}

// ✅ -> Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

// ✅ -> remover um item - diminui um item
async function removeItem(userCart, item){
    // 1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    // 2. caso não encontre o item
    if(indexFound == -1){
        console.log("Item não encontrado!")
        return
    }

    // 3. item > 1, subtrair um item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    // 4. caso item = 1, excluir item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return
    }
}

// Função para exibir a lista do carrinho
async function displayCart(userCart) {
    console.log("\nShopee Cart List:📝")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}
