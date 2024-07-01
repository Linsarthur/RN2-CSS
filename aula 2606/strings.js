// // Strings = cadeia de caracteres

// const nome = "Almir";
// const sobrenome = 'Batata';

// //Interpolação de string
// const nomeCompleto = `${nome} ${sobrenome}`
// console.log(nomeCompleto);

// //formação de strings
// let meuPet = "Fred";
// /*
// 0 -> "F"
// 1 -> "r"
// 2 -> "e" 
// 3 -> "d"
// */


let comida = "Batata Assada";

// console.log(comida [0]); //B
// console.log(comida [1]); //a
// console.log(comida [2]); //t
// console.log(comida [6]); // Espaço em branco
// console.log(comida [12]); //a -> Ultimo caractere
// console.log(comida [500]); // undefined -> Não existe essa posição na string

// //tamanho da string
// console.log(comida.length); // Total de caracteres da string
// console.log(comida[comida.length -1]); //Puxar o último indice sem saber a quantidade de índices presentes na string.


//Utilizando o for
for(i = 0; i < comida.length; i++){
    console.log(comida[i]); // Monstra um caractere por vez
}

//Funções de string
let palavra = "Java Script"
// console.log(palavra)
// let palavraMin = palavra.toLowerCase() //lowecase para deixar minúsculo
// console.log(palavraMin)
// console.log(palavra.toUpperCase()) //uppercase para deixar maiúsculo

console.log(palavra.charAt(5)) //Retorna o ídice 0

console.log(palavra.replace("Java", "Type"))
console.log(palavra.replace("J", "R"))
console.log(palavra.replace("a", "x")) //oberve que nesse replace, ele troca somente a primeira ocorrência, no caso o primeiro "a" que aparece.
console.log(palavra.replaceAll("a", "x")) //No replaceALL ele vai trocar todas as ocorrências que possuam a letra "a"


//----------------------------------------------------------------------




let frase = "Eu comi arroz, feijão, batata e carne"
console.log(frase.includes("carne")) //Retorna true ou false, caso exista ou não determinada palavra ou frase dentro de um texto. Pode ser adicionado estrutura condicional
if(frase.includes("alface")){
    console.log("Muito bem");
} else{
    console.log("Coma algo saudável");
}

let arquivo = "musica.mp3"
console.log(arquivo.endsWith("mp3")); //Verifica se termina com determinada ocorrencia, no caso "mp3"
console.log(arquivo.endsWith("mp4")); 
console.log(arquivo.startsWith("mus")); //Verifica se começa com determinada ocorrência, no caso "mus"

//slice
console.log(arquivo.slice(0, 2)); //Recorta a string do índice 0 ao 3
console.log(arquivo.slice(0, 4));
console.log(arquivo.slice(4, 6));