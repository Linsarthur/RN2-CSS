/*
    Estruturas condicionais (If - else)
    if(condição){
        //Instruções caso verdadeiro
    }   else{
        //Instruções caso falso   
    }



*/

let idade = 15;

if(idade > 18){ // bloco verdadeiro
    console.log("Você é maior de 18 anos")
}   else{
    console.log("Você é menor de idade");

}

let media = 8.0;
let sabeIngles = false;
let aprovado = media >= 7;


if (aprovado  == true){
    console.log("Parabéns! Você foi aprovado.")
}   else{
    console.log("Que pena! Continue tentando")
}

if(aprovado && sabeIngles){
    console.log("Parabéns! Você foi contratado")
}   else{
    console.log("Você não foi contratado. Mais sorte na próxima!")
}

//Positivo, Negativo ou Zero

let numero = 0;

if (numero > 0) {
    console.log("O número", numero, "é positivo!");
} else if (numero < 0) {
    console.log("O número", numero, "é negativo!");
} else {
    console.log("O número é zero");
}

//impar ou par
let n = 7;
if (n % 2 == 0){
    console.log("O número é par")
} else{
    console.log("O número é impar")
}


//1 - domingo 2 - Segunda 3 - Terça 4 - Quarta 5 - Quinta 6 - Sexta 7 - Sábado

let dia = 2;
if(dia === 1){
    console.log("Hoje é Domingo.")
} else if (dia === 2){
    console.log("Hoje é Segunda.")
} else if( dia === 3){
    console.log("Hoje é Terça.")

} else if(dia === 4){
    console.log("Hoje é quarta.")
    
} else if(dia === 5){
    console.log("Hoje é Quinta.")

} else if(dia === 6){
    console.log("Hoje é Sexta.")
    
} else if(dia ===7){
    console.log("Hoje é Sábado.")
} else{
    console.log("Dia não reconhecido!")
}



console.log("Fim!")