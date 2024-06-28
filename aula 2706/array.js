/*
    Array -> 
    [] -> array vazio
    [1, 2, 3, 4, 5] -> array preenchido
    ["Batata", "Batata doce"] -> com strings
 */

    let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
    console.log(figuras);// Ver os elemetos dentro de um array
    console.log(figuras[3]) // -------------> acessando um elemento de um array

    let numeros = [1, 3.2, 5.4, 7.5, 9];
    console.log(numeros); // Ver os elemetos dentro de um array
    console.log(numeros[4]); //----> Acessando um elemento do array

    //alterar os elementos do array

    let notas = [6.5, 8.0, 9.0];
    console.log("Antes da alteração", notas);
    notas[1] = 8.5;
    notas[2] += 0.5; //---> acrescentando 0.5 ao indice 2
    notas[0]++; // ----> acrescentando 1 ao indice 0
    console.log("Depois da alteração", notas);

    //tamanho(length);
let arr1 = [];
let arr2 = [1, 2, 3, 4];
console.log(arr1.length)
console.log(arr2.length)

//percorrer o array
for(let i = 0; i < arr2.length; i++){
    console.log(i)
}

let alunos = ["Alberto", "Ana", "Beatriz", "Carlos"]
for(let i = 0; i < alunos.length; i++){
    console.log(`O aluno ${i} é ${alunos[i]}`)
}

//for-of --> cria uma variável para percorrer todo os elementeos do array e assume cada um dos valores por vez
let frutas = ["abacaxi", "laranja", "manga", "abacate"]
for (let f of frutas) {
    console.log(f)
}

for(let i in frutas){ //Percorre os índices
    console.log(frutas[i]);
}