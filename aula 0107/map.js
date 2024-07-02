// Exemplo: Use map para transformar os valores do array abaixo.
const valores = [1, 2, 3, 4, 5, 6, 7];

const novoValores = valores.map((valor) => {
    // Se o valor for par faz valor * 2, se for ímpar faz valor / 2
    if(valor % 2 === 0){
        return valor * 2
    } else{
        return valor / 2
    }
    
});
console.log(novoValores)