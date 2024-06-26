for(let nTab = 1; nTab <=10; nTab++){
    console.log("---------------");
    console.log(`Tabuada do ${nTab}`);
    console.log("---------------")
    for(let mult = 1 ; mult <= 10; mult++) {
        console.log(`${nTab} x ${mult} = ${nTab * mult}`)
    }
}

console.log("-------------------------------------")

//exercicio 2


let a = 0;
let b = 1;

for(let i = 0; i < 10; i++){
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
}

//exercicio 3 

for(let num = 10; num >= 1; num--){
    console.log(num)
}

//exercicio 4

let f = 5;
let produto = 1;

for(let c = 1; c <=f; c++){
    produto = produto * c
}
console.log(produto)
    
    
//exercicio 5
let contador = 0;
for(let cont2 = 1; cont2 <= 100; cont2++){
    if(cont2 % 7 === 0){
        console.log(cont2)
        contador++
    }
    // console.log(cont2)
}

//exercicio 6 
let conta6 = 0;
for(let cont6 = 50; cont6 <= 100; cont6++){
    conta6 += cont6
    
}
console.log(`A soma dos números é: ${conta6}`)

//exercicio 7
let linha ="";
let altura = 5;
for(let c = 0; c < 5; c++ ){
    linha = linha + "❤️";
    console.log(linha);
}