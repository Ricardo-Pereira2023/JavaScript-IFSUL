/*
String é um conjunto de caracteres, geralmente utilizada
para representar palavras, frases ou textos;

Strings são palavras, frases, textos, etc;

Em Javascript, strings nada mais são do que um vetor
de caracteres.
*/

const str = "Boa Tarde!"
console.log(str[0])
console.log(str[4])
console.log(str[7])

const l = str.length
// Função utilizada para mostrar o tamanho de uma variável
console.log(`O tamanho total da string é de ${l} caracteres.`)

const result = str.search("Tard")
// Função que identifica a posição do conteúdo que será passada como parâmetro.
console.log(`A posição da palavra Tarde está a partir do índice ${result}`)

const res = str.replace("Tarde", "Noite")
// Função que troca o nome que está dentro de uma string por outro.
console.log(res)

const upper = str.toUpperCase()
// Função que serve para passarmos todas as letras para maiúsculas.
console.log(upper)

const lower = str.toLowerCase()
// Função que serve para passarmos todas as letras para minúsculas.
console.log(lower)
