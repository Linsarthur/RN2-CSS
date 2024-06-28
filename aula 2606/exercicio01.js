//1°questão

let troca = "Hello"
let espaco = ""
for(let i = troca.length - 1; i >= 0; i--){
    espaco += troca[i]
}
console.log(espaco)

console.log("-------------------------------")

//2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"

let frase = "Hello world"
console.log(frase.replace("world", "###"))


//3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com

let email = "codigoteste@soulcode.com"
if(email.endsWith("soulcode.com")){
    console.log("Dominio da soulcode reconhecido carregando domínio...")
} else{
    console.log("Dominio desconhecido")
}