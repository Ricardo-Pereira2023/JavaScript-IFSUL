var idade
idade = prompt("Digite a sua idade: ")

if (idade >= 18) {
  var maiorIdade = true
  document.write('Maior de idade. Pode dirigir! ')
} else {
  var maiorIdade = false
  document.write('Menor de idade. :( ')
}

// if (maiorIdade) {
//   // Se permanecer apenas o nome da variável, será avaliado como maiorIdade = true;
//   document.write("Maior de idade. Pode dirigir! ")
// } else {
//   // Aqui será avaliado como maiorIdade = false;
//   document.write("Menor de idade. :( ")
// }
