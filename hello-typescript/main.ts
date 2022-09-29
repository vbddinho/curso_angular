// Execute tsc main.ts para transformar typescript em javascript puro

var minharVar = 'minha variavel';

function minhaFuncion(x,y){

    return x + y;
}

let num = 2;
const PI = 3.14;


// arrow functions

var numeros = [1,2,3,4,5,6,7];
console.log(numeros);

// java script puro
console.log(numeros.map(function(valor){return valor*2}) )

// es 2015
console.log(numeros.map(valor => valor *2 ))

// transfile famoso é o babel
// babeljs.io

// Classe em type script para javascript
class Matematica {

    soma(x,y){
        return x + y;
    }
}

// Tipagem de variavel


var n1: string = 'asdadfasd';
//n1 = 3; // gera erro


var n2: any = 1213123;
