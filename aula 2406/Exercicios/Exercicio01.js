//Definindo a média;

let n1 = 0
let n2 = 0
let n3 = 0

let media = (n1 + n2 + n3) / 3

if (media >= 7 && media <= 10) {
    console.log("Parabéns! Você foi aprovado.")
} else if (media >= 5 && media < 7) {
    console.log("Você ficou de recuperação, Boa sorte!")
} else if (media < 5 && media >= 0) {
    console.log("Você reprovou. Estude mais no próximo ano!")
} else {
    console.log("Erro")
}
console.log("-------------------------------------------------------")
//--------------------------------------------------------

// 2° Tabela de IMC 
let altura = 1.80;
let peso = 150;
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Seu imc está em", imc.toFixed(2) + ",você está classificado com MAGREZA, comece uma dieta para regular seu peso!")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu imc está em", imc.toFixed(2) + ", considerado NORMAL. Parabéns, continue se alimentando bem!")
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Seu imc está em", imc.toFixed(2) + ", considerado como SOBREPESO, obesidade grau I, mas nada que uma dieta leve de perca de peso não possa ajudar!")
} else if (imc >= 30 && imc <= 39.9) {
    console.log("Seu imc está em", imc.toFixed(2) + ", considerado como OBESIDADE DE GRAU II. Você precisa de uma dieta séria!")
} else {
    console.log("Seu imc está em", imc.toFixed(2) + ", considerado OBESIDADE GRAVE DE GRAU III, procure um nutricionista urgente!")
}


console.log("-------------------------------------------------------")


//--------------------------------------------------------

//3° Comparação entre A e B

let num1 = 4
let num2 = 4

if (num1 > num2) {
    console.log("O número", num1, "é o maior!")
} else if (num2 > num1) {
    console.log("O número,", num2, "é o maior!")
} else if (num1 === num2) {
    console.log("Os números", num1, "e", num2, "são números equivalentes!")
}

console.log("-------------------------------------------------------")

//4° Reajuste salarial baseado nos filhos 
let salario = 3000
let quantidadeDependentes = 8
let ajuste30 = salario * 0.3
let ajuste40 = salario * 0.4
let novoSalario30 = ajuste30 + salario
let novoSalario40 = ajuste40 + salario


if (quantidadeDependentes === 0) {
    console.log("Você não possui dependentes nenhum reajuste feito!")
} else if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    console.log("Seu dependentes são", quantidadeDependentes, "então seu reajuste vai ser de 30%, ficando então com R$" + novoSalario30 + " de salário.")
} else if (quantidadeDependentes > 5) {
    console.log("Seus dependentes são", quantidadeDependentes, "então seu salário vai ter um reajuste de 40%, ficando então com R$:" + novoSalario40, "de salário!")
} else {
    console.log("Número desconhecido.")
}

console.log("-------------------------------------------------------")

// 5° Dias da semana




let dia = 7;
if (dia === 1) {
    console.log("Hoje é domingo, um dia do final de semana.")
} else if (dia === 2) {
    console.log("Hoje é Segunda, dia de semana.")
} else if (dia === 3) {
    console.log("Hoje é Terça, dia de semana.")

} else if (dia === 4) {
    console.log("Hoje é quarta, dia de semana.")

} else if (dia === 5) {
    console.log("Hoje é Quinta, dia de semana.")

} else if (dia === 6) {
    console.log("Hoje é Sexta, dia de semana.")

} else if (dia === 7) {
    console.log("Hoje é Sábado, um dia do final de semana.")
} else {
    console.log("Dia não reconhecido!")
}

console.log("-------------------------------------------------------")

//6° Ano bissexto

let ano = 2025

if (ano % 4 === 0 && ano % 100 != 0 || ano % 400 === 0) {
    console.log("O ano,", ano, "é um ano bissexto!")
} else {
    console.log("Ano comum")
}

console.log("-------------------------------------------------------")

let age = "0"

if (age >= 0 && age <= 130) {
    console.log("Você tem", age, "anos de idade")
} else {
    "Valor desconhecido"
}



console.log("-------------------------------------------------------")
//8° Saudação
let turno = "N-noturno"
if (turno == "M-matutino") {
    console.log("Bom dia!")
} else if (turno == "V-vespertino") {
    console.log("Boa tarde!")
} else if (turno == "N-noturno") {
    console.log("Boa noite!")
} else {
    console.log("Valor inválido")
}