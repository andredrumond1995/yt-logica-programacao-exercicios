// Análise Lógica:
// Como posso verificar se um número é par ou ímpar em Javascript?
// R: utilizando o operador lógico (%)

// Programação da Resolução:

// 1 - Criar uma função chamada verificarParOuImpar, que receberá um número como parâmetro
// 2 - Verificar se o número dividido por 2 tem resto igual a zero
// 3 - Se o resto for 0, retornar "Par". Caso contrário, retornar "Ímpar".

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Ímpar";
    }
};

console.log(verificarParOuImpar(3))