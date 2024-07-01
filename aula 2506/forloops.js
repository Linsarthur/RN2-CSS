/*
    for(incialização; condição; atualização){
        //código que será repetido
    }

*/

for(cont = 0; cont < 10; cont++){
    console.log(cont)
} // Após executar o bloco ele faz a att

// for = sequencias
// while = repetição indefinida

//de 0 a 1000 pulando de 5 em 5
for(cont = 0; cont <= 1000; cont += 5){
    console.log(cont);
}

//de 1000 a 0 
for(cont = 1000; cont >= 0; cont--){
    console.log(cont)
}

//adaptando os exercicios da manhã utilizando o for
//exericio 1

for(c = 2; c<=10;  c += 2){
    console.log(c)
}

//exercicio2
let n = 7;
for(c = 1; c <= 10; c++){
    console.log(`${n} x ${c} = ${n * c}`)
}

//exercicio3
let soma = 0;
for(c = 1; c <=999; c++){
    if(c % 2 !== 0){
        soma += c;
    }
}

//interpolação:

console.log(`soma dos números ${soma}`);

//exercicio 4
let qt= 0;
for(c = 1; c <= 1000; c++){
    if(c % 9 === 0 ){
        console.log(`${c} é divisível por 9`)
        qt++;
    }
}
console.log(`Total = ${qt}`)