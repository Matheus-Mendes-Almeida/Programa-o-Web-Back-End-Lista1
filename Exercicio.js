//  Questão 1

function fatorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * fatorial(num - 1);
}

//  Questão 2

function sequenciaMensagens(mensagem, N) {
    let resultado = '';
    for (let i = 0; i < N; i++) {
        resultado += mensagem + ' ';
    }
    return resultado.trim();
}

//  Questão 3

function operacaoBasica(valor1, valor2, operacao) {
    switch (operacao) {
        case 'adição':
            return valor1 + valor2;
        case 'subtração':
            return valor1 - valor2;
        case 'multiplicação':
            return valor1 * valor2;
        case 'divisão':
            if (valor2 === 0) return null; // Prevenção da divisão por zero
            return valor1 / valor2;
        default:
            return null; // Operação inválida
    }
}

//  Questão 4

function tabuada(num) {
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(num * i);
    }
    return resultados;
}

//  Questão 5

function inverteNumero(num) {
    let invertido = parseInt(num.toString().split('').reverse().join(''));
    return invertido;
}

//  Questão 6

function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contagem = 0;
    for (let char of str) {
        if (vogais.includes(char)) {
            contagem++;
        }
    }
    return contagem;
}

//  Questão 7

function validaSequencia(seq) {
    let pilha = [];
    for (let char of seq) {
        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' && pilha[pilha.length - 1] === '(') {
            pilha.pop();
        } else if (char === ']' && pilha[pilha.length - 1] === '[') {
            pilha.pop();
        } else {
            return false;
        }
    }
    return pilha.length === 0;
}

//  Questão 8

function gerarObjetosAleatorios(n) {
    const nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda'];
    let lista = [];
    for (let i = 0; i < n; i++) {
        lista.push({
            id: i + 1,
            nome: nomes[Math.floor(Math.random() * nomes.length)],
            idade: Math.floor(Math.random() * (90 - 18 + 1)) + 18
        });
    }
    return lista;
}

//  Questão 9

function calcularMediaIdades(lista) {
    let soma = lista.reduce((acumulador, pessoa) => acumulador + pessoa.idade, 0);
    return soma / lista.length;
}

//  Questão 10

function ordenarObjetos(lista, atributo) {
    return lista.sort((a, b) => (a[atributo] > b[atributo]) ? 1 : ((a[atributo] < b[atributo]) ? -1 : 0));
}