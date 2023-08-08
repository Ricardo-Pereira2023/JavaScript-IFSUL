/*
O que é uma MATRIZ?
Uma matriz (array bidimensional) é um tipo de dado estruturado
onde se tem um número fixo de componentes em duas dimensões.
Uma matriz apresenta dados em linhas e colunas.
Uma matriz 3 X 3 consegue armazenar 9 elementos.
*/

var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

for (let lin = 0; lin < 3; lin++) {
  for (let col = 0; col < 3; col++) 
    document.write(matriz[lin][col] + "  ")

  document.write("<br />")
}
