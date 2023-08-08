cargo = prompt("Digite o seu cargo: ")
salario = prompt("Digite o seu salário: ")

switch (cargo) {
  case "gerente":
    salario *= 1.15 // salário = salário * 1.15
    break

  case "supervisor":
    salario *= 1.1 // salário = salário * 1.10
    break

  default:
    salario *= 1.05 // salário = salário * 1.05
    break
}
document.write(
  "Salário do " +
    cargo +
    ": " +
    salario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
)

// console.log(
//   "Salário do " +
//     cargo +
//     ": " +
//     salario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
// )
