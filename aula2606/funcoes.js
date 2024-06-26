/**
    Funções 

    function nome-da-funcao(){
        //bloco de código da função    
    }


 */

//Declarando função chamada "boasVindas"
function boasVindas() {
    console.log("Seja bem-vindo(a)")
    console.log("!!!!!!")
}

// boasVindas()

function exemplo02() {
    let a = 5;
    let b = 10;

    console.log(`A soma é ${a + b}`)
}

// exemplo02()

let num1 = 2;
let num2 = 5;

function exemplo03() {
    console.log(`A soma é ${num1 + num2}`)
}
exemplo03()
// num1 = 10;
// num2 = 15;
// exemplo03()
// num1 = 5;
// num2 = 40;
// exemplo03()


//parâmetros = entrada, ou seja, o que é necessário para executar

// function soma(a, b) {
//     console.log(`a soma de ${a} e ${b} é ${a + b}`)
// }
// soma(10, 8)


function media (n1, n2, n3){
    let resultado = (n1 + n2 + n3) / 3;
    console.log(`A média é ${resultado}`)
    //retorno = saída da função
    return resultado;
}


let mediaAluno1 = media(7.0, 6.0, 9.0);
let mediaAluno2 = media(8.0, 10.0, 6.0);
let mediaAluno3 = media(4.0, 5.0, 7.0);

console.log("Valores retornados: ")
console.log(mediaAluno1)
console.log(mediaAluno2)
console.log(mediaAluno3)