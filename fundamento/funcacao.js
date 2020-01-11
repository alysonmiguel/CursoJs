console.log(typeof Object);

class Produto {}
console.log(typeof Produto);


// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(5,4)
imprimirSoma(5)


// funcao com retorno  

function soma (s,f) {
    return (s + f)
}

console.log(soma(3,2));


const imprimir = function (a, b){
    return a+b
}

const i = (a, b) => {
    return a+b
}

// variavel   paranmetros   function   retorno 
   const s  =   (a, b)        =>         a-b
    