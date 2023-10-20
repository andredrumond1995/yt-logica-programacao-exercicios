// Análise lógica:
// O que é fatorial e como posso calculá-lo?
// R: Em outras palavras, o fatorial de n é o resultado
// da multiplicação de todos os números inteiros de 1 até n


// Programação da Resolução:

// 1 - Criar uma função chamada calcularFatorial que ceberá um número como parâmetro
// 2 - Inicializar uma variável chamada resultado com o valor 1
// 3 - Usar um loop de 1 até o número informado no parâmetro para multiplicar `resultado` pelo número
// atual
// 4 - Retornar o `resultado`como o fatorial do número dado.

function calcularFatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++){
        resultado = resultado * i;
    }

    return resultado;
}

console.log(calcularFatorial(5))