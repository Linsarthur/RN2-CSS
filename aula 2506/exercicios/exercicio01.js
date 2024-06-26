//1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.

let cont = 0;
while(cont <= 10){
    console.log(cont)
    cont += 2;

    
}

console.log("---------------------------------------------------")

//2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).

let cont2 = 1;
let n = 7;
while(cont2 <= 10){
    console.log(n + "x" + cont2, "=", cont2 * n)    
    cont2++;
}

//sempre lembrar que o contador tem que ficar no final do while para que ele adicione ao final mais um número e possa aumentar quando o a estrutura repetir.

console.log("---------------------------------------------------")

//3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

let cont3 = 1;
let soma = 0;

while(cont3 <= 999){
    if(cont3 % 2 !== 0){
        soma += cont3;
        
    }
    cont3++;
}
console.log("Soma dos impares", soma)
console.log("---------------------------------------------------")

//4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.


let cont4 = 1;
let qt  = 0;
while(cont4 <= 1000){
    if(cont4 % 9 === 0){
        console.log(cont4, "é divisível por 9.")
        qt++
    }
    cont4++;
}

console.log("Total= ", qt)

