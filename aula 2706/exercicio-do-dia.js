





//1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.

console.log('-----------------------------------------')
let nomedosAlunos = ["Arthur", "Matheus", "Davi", "Andrea", "Joaquim"]
let listadePresenca = ["Arthur", "Matheus", "Davi"]

function alunosPresentes(nomedosAlunos, listadePresenca) {
    let faltas = nomedosAlunos.filter(nomedoAluno => !listadePresenca.includes(nomedoAluno))
    return faltas;
}
let faltaram = alunosPresentes(nomedosAlunos, listadePresenca)
console.log(faltaram)

console.log('-----------------------------------------')

//2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
console.log("-----------------------------------------")
let numeros = [1, 2, 3, 4, 5]
function quadratica(numeros) {

    let test = numeros.map(element => element ** 2);

    return console.log(test)

}

quadratica(numeros)

console.log("-----------------------------------------")

//3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

let archiveNames = ["important.pdf", "COD.jpg", "WARZONE.txt", "CONTROLÃO.txt", "TEM QUE ACABAR.txt"]
let extension = ".txt"

function returExtension (archiveNames, extension) {
    let extensionEspicified = archiveNames.filter(archiveNames => archiveNames.endsWith(extension))  
    return console.log(extensionEspicified)
}

returExtension(archiveNames, extension)

// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

let numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Usando for...of:");
for (let numero of numeros4) {
    console.log(numero);
}

console.log("Usando for comum:");
for (let i = 0; i < numeros4.length; i++) {
    console.log(numeros4[i]);
}

//5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.
function filtrarStringsPorComprimento(strings) {
    // Filtra as strings com mais de 5 caracteres
    const stringsFiltradas = strings.filter(string => string.length > 5);
    
    // Retorna o novo array
    return stringsFiltradas;
}

// Exemplo de uso
const strings = ["curto", "maislonga", "cinco5", "pequena", "extremamenteLonga", "abc"];
const resultado = filtrarStringsPorComprimento(strings);
console.log(resultado); //


//6. Crie um array com 7 números. Percorra e indique qual o maior número deles.

let numeros6 = [3, 12, 7, 5, 19, 1, 8];

let maiorNumero = numeros6[0]; 

for (let i = 1; i < numeros6.length; i++) {
    if (numeros6[i] > maiorNumero) {
        maiorNumero = numeros6[i]; 
    }
}

console.log("O maior número é:", maiorNumero); 


// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.

function extrairDigitosVerificadores(cpf) {
    let digitosVerificadores = cpf.slice(-2);
    

    return digitosVerificadores;
}

let cpf = "056.985.990-23";
let digitos = extrairDigitosVerificadores(cpf);
console.log(digitos); // 


//8. Crie uma função que inverte uma string. Retorna ela invertida.

function inverterString(str) {
    
    let arrayDeCaracteres = str.split('');
    
   
    let arrayInvertido = arrayDeCaracteres.reverse();
    
   
    let stringInvertida = arrayInvertido.join('');
    
    
    return stringInvertida;
}


let exemplo = "Hello, world!";
let invertida = inverterString(exemplo);
console.log(invertida);

//9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.

function repetirPalavra(palavra, quantidade) {
    let resultado9 = ''; 

    
    for (let i = 0; i < quantidade; i++) {
        resultado9 += palavra; 
    }

    
    return resultado9;
}


let palavra = "batata";
let quantidade = 3;
let resultado9 = repetirPalavra(palavra, quantidade);
console.log(resultado9); 


//10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.

function compararStrings(string1, string2) {
    
    if (string1 === string2) {
        return true; 
    } else {
        return false; 
    }
}


let str1 = "teste";
let str2 = "teste";
let str3 = "diferente";

console.log(compararStrings(str1, str2)); 
console.log(compararStrings(str1, str3)); 


//11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'


function formatarData(dataArray, separador) {
    
    let dia = dataArray[0];
    let mes = dataArray[1];
    let ano = dataArray[2];

    
    let dataFormatada = `${dia}${separador}${mes}${separador}${ano}`;


    return dataFormatada;
}


let data = [20, 6, 2000];
console.log(formatarData(data, '.')); 
console.log(formatarData(data, '/')); 
console.log(formatarData(data, '-')); 


// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata' */

function busca(array, valorBusca, valorPadrao) {
    
    if (array.includes(valorBusca)) {
        return valorBusca;
    } else {
        return valorPadrao;
    }
}

// Exemplo de uso
const arrayExemplo = ['maçã', 'banana', 'laranja', 'uva'];
console.log(busca(arrayExemplo, 'banana', 'Não encontrado')); 
console.log(busca(arrayExemplo, 'pera', 'Não encontrado')); 
