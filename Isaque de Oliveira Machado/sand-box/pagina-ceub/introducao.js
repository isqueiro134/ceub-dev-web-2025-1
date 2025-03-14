// se precisar comentar use //

var ola = "Olá Mundo! JS";
console.log(ola);

function log(valor){
    console.log(valor);
}

//Tipos de variáveis

var valor = 10;
log(typeof valor); //Number

var palavra = "Isaque";
log(typeof palavra); //String

var isOK = true;
log(typeof isOK); //Boolean

var meuObj = {}; 
log(typeof meuObj); //Object

var meuArray = [];
log(typeof meuArray); //Array

var nulo = null;
log(typeof nulo); //Null

var variavelFlamengo;
log(typeof variavelFlamengo); //Undefined


//Escopo da variável
function compararEscopo(){
    if (true) {
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";

        log(varDentro); //Funciona
        log(letDentro); //Funciona
        log(constDentro); //Funciona
    }
    log(palavra); //Funciona! (Global)
    log(varDentro); //Funciona! (Escopo)
    log(letDentro); // Erro! (Acesso somente no bloco)
    log(constDentro); // Erro! (Acesso somente no bloco)

}

compararEscopo();


//Operações Simples
const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

log(n1 == n2); //false
log(n1 == valorNumericoStr); //true
log(n1 === valorNumericoStr); //false

log(((n2 > n1) || (n2 > n1)) && (1 > 2)); //false

//Manipulação de Arrays
let frutas = ["Maçã", "Banana", "Laranja"];
log(frutas.length) //3
log(frutas[1]) //Banana

//Adicionando novo item
frutas.push("Manga")
log(frutas);

//Remover o último item
frutas.pop;

//Estruturas condicionais

//Estrutura de repetição
for (let loop = 0; loop < 5; loop++) {
    log(`Meu valor no loop: ${loop}`);
}

let valorWhile = 0;
while (valorWhile < 5) {
    log(`Meu valor no loop: ${valorWhile}`);
    valorWhile++;
}

