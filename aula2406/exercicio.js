//Conversão de °F em °C

let tempFahrenheit = 85;
let grauCelsius = (tempFahrenheit - 32) / 1.8

console.log("A temperatura em °C é: "+ grauCelsius.toFixed(2))


//Media ponderada

let nota1 = 9.5
let nota2 = 7.5
let nota3 = 6.0
let nota4 = 5.0
let nota5 = 10.0

// let peso1 = 3 
// let peso2 = 2 
// let peso3 = 1 
// let peso4 = 4 
// let peso5 = 5 

let media = (nota1 * 3 + nota2 * 2 + nota3 * 1 + nota4 * 4 + nota5 * 5) / 15



console.log("A Média é: " + media.toFixed(1))