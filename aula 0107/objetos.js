//objetos -> são estruturas para representar dados

let pessoa = {
    nome: "Arthur Cavalcante",
    CPF: "999.999.999-99",
    dataNascimento: "02/09/2001",

    contato: { //objeto aninhado
        email:"linsarthur02@gmail.com",
        telefone:"(85) 9-9999-9999",
        fax: "+9 999 999 9999"


    },
    endereco: {
        estado: "Ceará",
        cidade:"Fortaleza",
        cep:"888888888",
        rua:"XXXXXXX",
        numero: "1234"
    },
    objetivosProfissionais: ["Home office", "Desenvolvedor Senior", "Exterior" ],
    formacao: [
        {nome: "Ensino médio", periodo: "2000-2003"},
        {nome: "Técnico de informática", periodo: "2003-2005"},
        {nome: "Bacharelado em Computação", periodo: "2005-2010"}
    ]
}
// console.log(pessoa.contato.email)
// console.log(pessoa.endereco.estado)
// console.log(pessoa.objetivosProfissionais)
console.log(pessoa.formacao[0])


//crie um objeto para representar as propriedades de um aluno.
//nome
//serie
//materias (nome da materia, nome do professor)
//notas
const aluno = {
    nome: "Arthur",
    serie:"9°",
    materias: [
        {materia: "Português", professor:"Marcela"},
        {materia: "Matemática", professor:"Saulo"},
        {materia: "Física", professor:"Carlos"}
    ],
    notas:[
        {materia: "Português", nota: 7.5},
        {materia: "Matemática", nota: 9.0},
        {materia: "Física", nota: 10.0}
    ]
}

console.log(aluno)
console.log(aluno.materias)
console.log(aluno.materias[0])
console.log(aluno.notas[0])