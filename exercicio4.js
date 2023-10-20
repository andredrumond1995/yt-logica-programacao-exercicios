// Problema: Crie uma função que calcule a soma dos elementos em um array.

// Análise lógica:
// Pergunta: Como posso somar todos os elementos em um array?
// R: vamos utilizar o for

// Programação da Resolução:

// 1 - Criar uma função chamada `calcularSomaArray` que receberá um array de números como parâmetro
// 2 - inicializar uma variável chamada soma com o valor 0
// 3 - Usar um loop para iterar sobre o array e adicionar cada elemento à variável soma
// 4 - Retornar o valor de soma como resultado

function calcularSomaArray(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma = soma + array[i];
  }

  return soma;
}

console.log(calcularSomaArray([1, 1, 1, 1]));
