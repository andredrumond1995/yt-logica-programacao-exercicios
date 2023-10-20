// Pergunta: O que é um palíndromo e como posso verificar se uma palavra é um palíndromo?
// R: Um palíndromo é uma palavra, frase, número ou outra sequência de caracteres
// que permanece a mesma quando lida de trás para frente.

// Programação da Resolução:
// 1 - Criar uma função chamada verificarPalindromo que ceberá uma palavra como parâmetro
// 2 - Converter a palavra em um array de caracteres, inverter o array e
// juntar os caracteres de volta em uma string
// 3 - Comprar a palavra original com a palavra invertida
// 4 - Se forem iguais, a palavra é um palíndroma. Caso contrário, não é.

function verificarPalindromo(palavra) {
  const palavraInvertida = palavra.split('').reverse().join('');

  if (palavra === palavraInvertida) {
    return true;
  } else {
    return false;
  }
}

console.log(verificarPalindromo('radar'));
