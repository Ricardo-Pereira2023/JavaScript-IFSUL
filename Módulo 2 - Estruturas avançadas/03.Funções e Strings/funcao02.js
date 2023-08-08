function criarProduto(nome, quantidade) {
  return {nome: nome, quantidade: quantidade}
}
let produto = criarProduto("Martelo", 30)
console.log(produto)