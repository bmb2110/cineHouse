let pessoa = {
nome: "Bruno",
idade: 25,
altura: 1.87
}

let json = JSON.stringify(pessoa)

console.log(json)

let objetoDeNovo = JSON.parse(json)

console.log(objetoDeNovo)