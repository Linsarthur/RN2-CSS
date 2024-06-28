let nums = [];

console.log(nums);
//adicionando elementos ao final de um array --> push
nums.push(4);
nums.push(5);
nums.push(10);

console.log(nums);
nums.push(1000);
console.log(nums);

//removendo o último elemento --> pop

nums.pop();
nums.pop();
console.log(nums);

//Inserir no início  --> unshift
let notas = [6.5, 7.9, 9.0];
console.log(notas);

notas.unshift(8.0);
notas.unshift(4.5);
notas.unshift(7.0);
console.log(notas)

//Remover do início --> shift
notas.shift();
notas.shift();
console.log(notas);


// Juntar o array e montar uma string --> join

let enderecoIP = [192, 168, 1, 1];
console.log(enderecoIP.join("."))

let data = ["27", "06","2024"];
let dataString = data.join("/")
console.log(dataString)

//concaternar arrays

let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Webcam", "Teclado"];

let p3 = p2.concat(p1);
console.log(p3)

// Array reverso

let n = [1, 2, 3];
let nInvertido = n.reverse();
console.log(nInvertido);

// Includes --> se o valor existe ou não no array
 let pessoas = ["joão", "josé", "ana"];
 if(pessoas.includes("josé")){
    console.log("José está presente");
 } else{
    console.log("Sei nem quem é");
 }

 //split para strings

 let frase = "Eu vou estudar React";
 let dataInicio = "27/06/2000";
 let palavraEspecial = "BATATA";

 let fraseArray = frase.split(" ");
console.log(fraseArray);

let dataArray = dataInicio.split("/");
console.log(dataArray)

//inverter a string 
console.log(palavraEspecial.split("").reverse().join(""))

//indexOf -> retorna o indice de um elemento
let figuras = ["coração", "estrela", "ok", "não"]
console.log(figuras.indexOf("ok"));
console.log(figuras.indexOf("estrela"));
console.log(figuras.indexOf("não"));

//slice --> "cortar" um array
let fig1 = figuras.slice(1,3)
console.log(fig1)

