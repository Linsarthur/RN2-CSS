/* 
Operadores relacionais 
    Retorna boolean

    < Menor que
    > Maior que
    <= Menor ou igual
    >= Maior ou igual
    == Igual a
    === Igual a e mesmo tipo
    !== Diferente a e o mesmo tipo
    != Diferente


*/

let a = 3;
let b = 5;

console.log(a < b); // True
console.log(a > b); // False
console.log(b > a); // True
console.log(b >= a); // True
console.log(b >= 5); // True
console.log(a <= b); // True
console.log(a <= 3); // True
console.log(b > 5); // False
console.log(a == b); // False
console.log(a != b); // True


console.log(a == "3"); // True, possue o mesmo valor

//Estritamente igual: compara valor e tipo
console.log(a === "3"); // False, possuem o mesmo valor mas tipos diferentes

//Estritamente diferente
console.log(a != "3") // True
console.log(a !== "3") // False
