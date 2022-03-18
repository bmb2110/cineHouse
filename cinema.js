let cinema = "CineHouse"
//console.log(cinema)


// let filme1 = {
//     codigo: 01,
//     titulo: "Superman",
//     duracao: 1.30,
//     atores: ["Clark Kent", "Mulher Maravilha"],
//     anoDeLancamento: 2014,
//     emCartaz: false
// }


// let filme2 = {

 
// let catalogo = [filme1, filme2]

// console.log(catalogo)


//  console.log(filmes)

//  function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
     
// catalogo.push({
//     codigo, titulo, duracao, atores, anoDeLancamento, emCartaz})

// }

// adicionarFilme(00, "Resident Evil", 1.45, ["Lion", "Ashiley"], 2010, false)

// console.log(catalogo)

const catalogo = require("./database/catalogo.json")
console.log(catalogo)

function buscarFilme(codigo, array){
    for (let i = 0; i < array.length; ++i){
        //console.log(array[i].codigo)
        if (array[i].codigo == codigo) {
            return array[i]
        }
       
    }  
}

buscarFilme(2, catalogo)


buscarFilme(01, catalogo)

console.log( buscarFilme(0, catalogo))

function alterarStatuaEmCartaz(codigo, array){
    for (let i = 0; i < array.length; ++i){

        if (array[i].codigo == codigo) {
            array[i].emCartaz = !array[i].emCartaz
            return array[i]
        }
       
    }  

}
console.log(alterarStatuaEmCartaz(0, catalogo))

console.log("Hello Word")