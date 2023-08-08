/*
Métodos Array
push() - É um método que adiciona um elemento ao final de um array;
pop() - É um método que remove o último elemento do array;
unshift() - É um método que adiciona um ou mais elementos no começo do array;
shift() - Remove o primeiro elemento de um array;
splice() - Remove ou altera um ou mais elementos de um array;
slice() - Retorna uma faixa de elementos de um array;
sort() - Ordena os dados em um array;
reverse() - Inverte as posições dos valores em um array;
concat() - Junta um ou mais arrays;
join() - Junta os valores de um array com um caractere de separador; 
*/

let meses = ["JAN", "FEV", "MAR", "ABR"]
let dolar = [5.37, 5.07, 5.06, 5.29]

console.log("VALOR DO DÓLAR:\n")

for (let i = 0; i < dolar.length; i++) {
  console.log(meses[i] + ": R$ " + dolar[i])
}
