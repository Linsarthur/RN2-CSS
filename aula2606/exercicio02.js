/*
1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.


2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.

6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

7. Crie uma função que recebe a área de um circulo e mostra o nível:
Entre 1 e 20 => Nível I
Entre 21 e 40 => Nível II
Qualquer outro diâmetro => Nível inválido

8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

*/
console.log("------------------------------")
//1° Questão
function imc(peso, altura){
    let resultado = peso / altura ** 2;
    console.log(`IMC = ${resultado.toFixed(2)}`);
    return imc;

}
let indiceDeMassa = imc(40, 1.59);
imc(80, 1.8)
console.log("------------------------------")


console.log("------------------------------")
//2° Questão
function porcentagem(num){
    let a = num * 100;
    console.log(`Essa porcentagem é de: ${a}%`)
    
    return porcentagem
}
let result = porcentagem(0.456)

console.log("------------------------------")


console.log("------------------------------")
//3° questão

function isFalse(numero){
    return numero < 0 ;
}
console.log(isFalse(-2))
console.log(isFalse(2))

console.log("------------------------------")


console.log("------------------------------")
//4° Questão Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

function contar(maxValue){
    for(let i = 1; i <= maxValue; i++){
        console.log(`Contando... ${i}`)
    }
}

contar(10)
console.log("------------------------------")


console.log("------------------------------")
//5°Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.

function nomeCompleto(primeiro, segundo){
    return console.log(`Nome completo: ${primeiro } ${segundo} `)
    
}

nomeCompleto("Arthur", "Cavalcante")

console.log("------------------------------")

console.log("------------------------------")

//6° Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

function calc (r) {
    let pi = 3.14
    return console.log(`Área do círculo é igual a: ${pi * r ** 2}`)
}

calc(8)

console.log("------------------------------")

console.log("------------------------------")
//7° Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function calcArea (area) {
    if(area > 1 && area <= 20){
        console.log("Nível I")
    } else if(area > 20 && area <= 40){
        console.log("Nível II")
    } else{
        console.log("Nível inválido")
    }

}
calcArea(110)

console.log("------------------------------")

console.log("------------------------------")
// Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function transformar (string) {
    return console.log(string.toLowerCase()) 
    
}
transformar("ARTHUR")

console.log("------------------------------")

console.log("------------------------------")

//9° Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function find (string, caractere) {
    let contar = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === caractere)
            contar++

    }
    return console.log(contar)

}

find("hello world", "l")

