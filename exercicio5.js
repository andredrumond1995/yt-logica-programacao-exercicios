//Análise Lógica:
// Como posso encontrar o maior número em um array?
// R: inicializar uma variável com um valor inicial e atualizá-la se encontrar um número maior
// durante a iteração

// Programação da Resolução:
// 1 - criar uma função chamada encontrarMaiorNumero que receberá um array de números como parâmetro
// 2 - inicializar uma variável chamada maximo com o primeiro elemento do array
// 3 - usar um loop para iterar sobre o array
// 4 - se o elemento atual for maior que maximo, atualizaremos maximo com o valor do elemento
// 5 - retornar maximo como o maior numero encontrado

function encontrarMaiorNumero(array) {
  let maximo = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
    }
  }

  return maximo;
}

console.log(encontrarMaiorNumero([1, 1, 1, 8787]));
