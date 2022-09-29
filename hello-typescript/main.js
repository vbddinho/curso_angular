// Execute tsc main.ts para transformar typescript em javascript puro
var minharVar = 'minha variavel';
function minhaFuncion(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
// arrow functions
var numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros);
// java script puro
console.log(numeros.map(function (valor) { return valor * 2; }));
// es 2015
console.log(numeros.map(function (valor) { return valor * 2; }));
// transfile famoso é o babel
// babeljs.io
// Classe em type script para javascript
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
