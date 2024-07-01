// 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.


let numero1 = [13, 22, 55, 21, 26]

function recebeNumeros (arr) {
    for(numPar1 of arr){
        if(numPar1 % 2 == 0){
            console.log(numPar1)
        } 
    }
    return recebeNumeros
}
recebeNumeros(numero1)


// Nessa questão a let numero1 foi criada para guardar os valores do array e colocar na function, for foi feito para checar cada índice da array e o if para realizar a condição de ser número par ou não para poder ser mostrado. 

//2 Escreva uma função que receba um array de números e retorne a soma de todos os números.

let arrayNumbers = [2, 3, 6, 8, 10];

function soma(num) {
    return num.reduce((adicao, num2) => adicao + num2, 0);
}
console.log(soma(arrayNumbers));

//depois de muito pesquisar eu fiz com o método reduce porque foi o que eu achei ser mais simples de se conseguir fazer.

//Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.

let palindromo = "arara"
function verificarPalindromo (palindromo) {
    let inverso = palindromo.split('').reverse().join('')
    if(inverso == palindromo){
       return console.log(true)
    } else{
        return console.log("Sei nem o que é")
    }
    
} 
verificarPalindromo(palindromo)

// criado o palindromo na primeira variável. function para guardar os parametros solicitados. criei outra variável para guardar a string, usei o split para separar cada caractere em arrays, o reverse para inverter e o join para transformar de volta em string. Após isso fiz a comparação e se fossem igual retornava true, else o comando não reconheceria.

//Escreva uma função que receba um array de números e retorne o menor número do array.

let menorNumero = [1, 2, 3, 4, 5]

function recebeNumero (minNum) {
    
    return console.log(Math.min(...minNum))
}
recebeNumero(menorNumero)

// Nessa aqui eu não sabia como fazer, então fiz uma pesquisa e descobri que o Math.min me retornaria o menor número do array e que para conseguir isso seria necessário o operador de espalhamento "...".

// Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3
function calculo () {
    let numeros = [7.0, 8.0, 9.0];
    let calculo = numeros.reduce((numero, total) => numero + total, 0);

    return console.log(calculo / numeros.length) 
}

calculo()

// Aqui eu fiz o array como o do exemplo e novamente usei o reduce para reduzir em um único valor o array e fazer a soma de cada posteriormente e dividir para pegar o resultado