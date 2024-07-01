/*
    Objetos = servem para estruturar dados;

    let variável = {
        propriedade1: valor1;
        propriedade2: valor2;
        propriedade3: valor3;    
    }
*/

//nome, peso e altura (propriedades do objeto)

let pessoa1 = {
    nome: "jose",
    idade: 20,
    peso: 70.5,
    altura: 1.75
};


let pessoa2 = {
    nome:"Arthur",
    idade: 22,
    peso: 65,
    altura: 1.8
};

//acesso de propriedades com o . ou [] sendo o [] melhor para realizar alterações, sendo mais dinâmico.

console.log(pessoa1.nome);
console.log(pessoa2.idade);
console.log(pessoa1["peso"]);
console.log(pessoa2["altura"]);
console.log(pessoa1.email);


// adicionando propriedades ao objeto
pessoa1["email"] = "arthur@email.com";
console.log(pessoa1);

pessoa2["email"] = "arthur2@email.com"
console.log(pessoa2)


//Alterando valores nas propriedades;

pessoa1.idade *= 2
console.log(pessoa1)

pessoa2["idade"] += 5;
console.log(pessoa2)


//removendo propriedades usando o delete;

delete pessoa2.email
delete pessoa1.email

console.log(pessoa1)
console.log(pessoa2)

