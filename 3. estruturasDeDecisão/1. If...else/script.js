// 02
function ordenarDecrescente(texto) {
    let num1;
    let num2;
    let num3;
    do {
        if ((num1 || num2 || num3) != undefined) return 'Há números iguais! Insira números diferentes!'; //retorna mensagem de erro
        num1 = Number(prompt("Informe um número:")); //prompt num1
        num2 = Number(prompt("Informe outro número:")); //prompt num2
        num3 = Number(prompt("Informe o último número:")); //prompt num3
    }
    while (num1 == num2 || num1 == num3 || num2 == num1 || num2 == num3 || num3 == num1 || num3 == num2) //verifica se são números iguais
    let number = [num1, num2, num3]; //array com valores
    return texto + number.sort((a, b) => b - a).join(" - "); //retorna em ordem decrescente
}

// 05
function verificarParOuImpar(num) {
    if (num % 2 == 0) { //verifica se é par
        return "Par!";
    } else { //verifica se é ímpar
        return "Ímpar!";
    }
}

// 06
function calcularCentenasDezenasUnidades(num) {
    const centenas = Math.floor(num / 100); //calcula centenas
    const dezenas = Math.floor((num - (centenas * 100)) / 10); //calcula dezenas 
    const unidades = Math.floor(num - (centenas * 100) - (dezenas * 10)); //calcula unidades

    let termoCentena;
    let termoDezena;
    let termoUnidade;

    (centenas <= 1) ? termoCentena = "centena" : termoCentena = "centenas"; //verifica o termo 
    (dezenas <= 1) ? termoDezena = "dezena" : termoDezena = "dezenas"; //verifica o termo 
    (unidades <= 1) ? termoUnidade = "unidade" : termoUnidade = "unidades"; //verifica o termo 

    if (num < 10) {
        return `${num} = ${unidades} ${termoUnidade}`;
    } else if (num < 100) {
        return `${num} = ${dezenas} ${termoDezena} e ${unidades} ${termoUnidade}`;
    } else if (num <= 1000) {
        return `${num} = ${centenas} ${termoCentena}, ${dezenas} ${termoDezena} e ${unidades} ${termoUnidade}`;
    } else {
        return "Este número é maior que 1.000! Informe um valor válido";
    }

}
// 07
function calcularNotas(saque) {
    while (saque < 10 || saque > 600) { //verifica se o dado recebido é o que se espera
        alert("Informe um saque válido!");
        saque = Number(prompt("Informe o valor que deseja sacar entre R$ 10,00 e R$ 600,00"));
    }
    const notas100 = Math.floor(saque / 100); //calcula notas de 100
    const notas50 = Math.floor((saque - (notas100 * 100)) / 50); //calcula notas de 50
    const notas10 = Math.floor((saque - (notas50 * 50) - (notas100 * 100)) / 10); //calcula notas de 10
    const notas5 = Math.floor((saque - (notas10 * 10) - (notas50 * 50) - (notas100 * 100)) / 5); //calcula notas de 5
    const notas1 = Math.floor((saque - (notas5 * 5) - (notas10 * 10) - (notas50 * 50) - (notas100 * 100)) % 10); //calcula notas de 1

    let termoCentena;
    let termoCinqueta;
    let termoDezena;
    let termoCinco;
    let termoUnidade;

    (notas100 <= 1) ? termoCentena = "nota" : termoCentena = "notas"; //verifica o termo 
    (notas50 <= 1) ? termoCinqueta = "nota" : termoCinqueta = "notas"; //verifica o termo 
    (notas10 <= 1) ? termoDezena = "nota" : termoDezena = "notas"; //verifica o termo 
    (notas5 <= 1) ? termoCinco = "nota" : termoCinco = "notas"; //verifica o termo 
    (notas1 <= 1) ? termoUnidade = "nota" : termoUnidade = "notas"; //verifica o termo 

    if (saque >= 100) {
        return `Para sacar a quantia de R$ ${saque.toFixed(2)}, o script fornece:\n ${notas100} ${termoCentena} de 100\n ${notas50} ${termoCinqueta} de 50\n ${notas10} ${termoDezena} de 10\n ${notas5} ${termoCinco} de 5 e\n ${notas1} ${termoUnidade} de 1.`;
    } else if (saque >= 50) {
        return `Para sacar a quantia de R$ ${saque.toFixed(2)}, o script fornece:\n ${notas50} ${termoCinqueta} de 50\n ${notas10} ${termoDezena} de 10\n ${notas5} ${termoCinco} de 5 e\n ${notas1} ${termoUnidade} de 1.`;
    } else {
        return `Para sacar a quantia de R$ ${saque.toFixed(2)}, o script fornece:\n ${notas10} ${termoDezena} de 10\n ${notas5} ${termoCinco} de 5 e\n ${notas1} ${termoUnidade} de 1.`;
    }
}

// 08
function testarLadosTriangulos(...lados) {
    let medidas = lados;

    if ((medidas[0] + medidas[1] > medidas[2]) || (medidas[0] + medidas[2] > medidas[1]) || (medidas[1] + medidas[2] > medidas[0])) {
        if (medidas[0] == medidas[1] && medidas[1] == medidas[2]) {
            return `Este triângulo é um equilátero!`;
        } else if ((medidas[0] == medidas[1] && medidas[1] != medidas[2]) || (medidas[0] == medidas[2] && medidas[2] != medidas[2]) || (medidas[1] == medidas[0] && medidas[0] != medidas[2]) || (medidas[1] == medidas[2] && medidas[2] != medidas[0]) || (medidas[2] == medidas[0] && medidas[0] != medidas[1]) || (medidas[2] == medidas[1] && medidas[1] != medidas[0])) {
            return `Este triângulo é um isóceles!`;
        } else if ((medidas[0] != medidas[1] && medidas[1] != medidas[2]) || (medidas[0] != medidas[2] && medidas[2] != medidas[2]) || (medidas[1] != medidas[0] && medidas[0] != medidas[2]) || (medidas[1] != medidas[2] && medidas[2] != medidas[0]) || (medidas[2] != medidas[0] && medidas[0] != medidas[1]) || (medidas[2] != medidas[1] && medidas[1] != medidas[0])) {
            return `Este triângulo é um escaleno!`;
        }
    } else {
        return "Não é possível obter um triângulo com essas medidas!";
    }
}
// 09
function calcularOperacao(operacao, ...num) {
    let resultado;
    let parImpar;
    let inteiroDecimal;
    let positivoNegativo;

    switch (operacao) {
        case "A": //adição 
            resultado = num1 + num2;
            break;
        case "S": //subtração
            resultado = num1 - num2;
            break;
        case "M": //multiplicação
            resultado = num1 * num2;
            break;
        case "D": //divisão
            resultado = num1 / num2;
            break;
        default: //inválido
            return "Operação Inválida!";
    }

    (resultado % 2 == 0) ? parImpar = "par" : parImpar = "ímpar"; //par ou ímpar
    (Math.sign(resultado) == 1) ? positivoNegativo = "positivo" : (Math.sign(resultado) == -1) ? positivoNegativo = "negativo" : positivoNegativo = "neutro"; //positivo ou negativo
    (Number.isInteger(resultado)) ? inteiroDecimal = "inteiro" : inteiroDecimal = "decimal"; //inteiro ou decimal

    return `O resultado é: ${resultado}. Ele é ${parImpar}, ${positivoNegativo} e ${inteiroDecimal}`; //retorno
}
// 10
function classificarSuspeita(...respostas) {
    const dados = [...respostas];
    let participacao = 0;
    for (let resposta of dados) {
        if (resposta == "S") {
            participacao++;
        }
    }
    if (participacao >= 0 && participacao < 2) {
        return "Classificação: Inocente";
    } else if (participacao == 2) {
        return "Classificação: Suspeito(a)";
    } else if (participacao >= 3 && participacao <= 4) {
        return "Classificação: Cúmplice";
    } else {
        return "Classificação: Assassino";
    }
}
// 11
function descontarCombustivel(litros, tipo) {
    let valor;
    let porcentagemPorLitro;

    if (tipo == "A" && litros <= 20) {
        valor = (litros * 6.10) - (litros * (6.10 * 0.03));
        porcentagemPorLitro = "e até 20L você recebe 3% de desconto por litro";
    } else if (tipo == "A" && litros > 20) {
        valor = (litros * 6.10) - (litros * (6.10 * 0.05));
        porcentagemPorLitro = "e acima de 20L você recebe 5% de desconto por litro";
    } else if (tipo == "G" && litros <= 20) {
        valor = (litros * 6.50) - (litros * (6.50 * 0.04));
        porcentagemPorLitro = "e até 20L você recebe 4% de desconto por litro";
    } else {
        valor = (litros * 6.50) - (litros * (6.50 * 0.06));
        porcentagemPorLitro = "e acima de 20L você recebe 6% de desconto por litro";
    }
    (tipo == "A") ? tipo = "álcool" : tipo = "gasolina";

    return `O valor a ser pago pelo cliente é de R$ ${valor.toFixed(2)}, pois o combustível é do tipo: ${tipo} ${porcentagemPorLitro}`;
}