/*
Funções - Conceito
- De modo geral, função é um "subprograma" que pode ser chamado
por um código externo à função;

- Uma função também pode ser chamada por um código interno
a essa função, que é a idéia de recursão. Funções recursivas;

- Uma função é composta por um conjunto de instruções que
executa uma tarefa ou calcula um valor;

- Valores podem ser passados para uma função, que por sua
vez retorna um valor resposta.
*/

function quadrado(n) {
  quad = n * n
  return quad
}
let valor = 5
result = quadrado(valor)
console.log(result)