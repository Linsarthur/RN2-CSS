/*  Estrutura de repetição = loops = laço
    Essas estruturas possuem alguns elementos:
        ° Condição de parada
        ° Valor incial (variável de controle)
        ° Atualização


    Wilhe = enquanto
        while(condição){
            // O código que será repetido
        }

*/

// while(true){
//     console.log("Batata");
// }

let numero = 0;


while(numero < 10){
    console.log(numero);
    numero++;
}

let numero2 = 0;

while(numero2 <= 50){
    console.log(numero2);
    numero2 = numero2 + 5; 
}


let numero3 = 100;
while (numero3 >= 0){
    console.log(numero3)
    numero3 -= 1
}


let cont = 1;
let soma = 0;
while(cont <= 10){
    soma = soma + cont;
    cont++;
}
console.log(soma);

console.log("Fim")