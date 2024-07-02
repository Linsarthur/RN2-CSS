//1. Crie uma função arrow que recebe dois números e retorna o maior deles
const recebeNumeros = (num, num2) =>{
    if (num > num2){
        return console.log(`O número ${num} é maior que o número ${num2}`);
    } else{
        return console.log(`O número ${num2} é maior que o número ${num}.`);
    };
} 
return recebeNumeros(10, 5)

//2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula

let semMaiusculas = ['eu', 'acho', 'que', 'consegui'];

semMaiusculas.forEach((semMaiuscula, aumentoLetra) => {
    semMaiusculas[aumentoLetra] = semMaiuscula[0].toUpperCase() + semMaiuscula.slice(1)
})
console.log(semMaiusculas)






//3. Use map para transformar um array de números, multiplicando cada número por 5.
let valores = [1, 2, 3, 4, 5, 6];

let novosValores = valores.map((valor) => {
    console.log(valor * 5)
})



//4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.
let idades = [18, 15, 12, 21, 5];

const permissoes = idades.filter(permissao => {
    if(permissao >= 18){
        console.log(`Você tem permissão, idade:${permissao}`)
    //
     }
    return idades
})



//5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.

let livro = {
    titulo: "48 Leis do Poder",
    autor: "Robert Greene",
    informacoes:{
        editora: "Editora ROCCO LTDA",
        ano: 1998

    }
}

console.log(livro.informacoes.editora)





//6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.



const [fruta1, fruta2] = ["maça", "pera", "uva", "salada mista"];
console.log(fruta1)
console.log(fruta2)






//7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.