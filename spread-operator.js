let frutas = ["maçã","banana","uva"]

let frutasDois = ["laranja","abacate","mamão"]

let listaCompleta = [...frutas, ...frutasDois]

let pessoa = {
    nome: "Bruno",
    idade: 25
}

let infoPessoal = {
    tel: "11957274879",
    rg: 505722744,
    ...pessoa
}

function letras(...paramns){
    console.log(paramns)
}

letras("a","b","h")

