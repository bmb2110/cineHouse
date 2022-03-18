const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

// console.log(calculadora(10, 20, somar))

const dobro = (numeroA) => numeroA * 2;

const triplo = (numero) => numero * 3;

const aplicar = (numeroA, operacao) => operacao(numeroA);

// console.log(aplicar(2, triplo))

function dobro(numeroA) {numeroA * 2}


function triplo(numero) {numero * 3}


function aplicar(numeroA, operacao){operacao(numeroA)};

aplicar(2, dobro);

aplicar(4, triplo);