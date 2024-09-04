function validarNumber(...number) {
    for (num of number) {
        while (isNaN(number) || number == "") {
            return ("Informe um número válido!");
        }
    }
}

function ordenarDecrescente(...number) {
    let numbers = number;
    return numbers.reverse((a, b) => { return b - a }).join(" - ");
}

function verificarParOuImpar(num) {
    if (num % 2 == 0) {
        return "Par!";
    } else {
        return "Ímpar!";
    }
}

function calcularCentenasDezenasUnidades(num) {
    const centenas = Math.floor(num / 100);
    const dezenas = Math.floor((num - (centenas * 100)) / 10);
    const unidades = Math.floor(num - (centenas * 100) - (dezenas * 10));

    let termoCentena;
    let termoDezena;
    let termoUnidade;

    (centenas <= 1) ? termoCentena = "centena" : termoCentena = "centenas";
    (dezenas <= 1) ? termoDezena = "dezena" : termoDezena = "dezenas";
    (unidades <= 1) ? termoUnidade = "unidade" : termoUnidade = "unidades";

    if (num < 10) {
        return `${num} = ${unidades} ${termoUnidade}`;
    } else if (num < 100) {
        return `${num} = ${dezenas} ${termoDezena} e ${unidades} ${termoUnidade}`;
    } else if (num <= 1000) {
        return `${num} = ${centenas} ${termoCentena}, ${dezenas} ${termoDezena} e ${unidades} ${termoUnidade}`;
    } else {
        return "Este número é maior que 1.000!";
    }
}

function calcularNotas(saque) {
    while (saque < 10 || saque > 600) {
        alert("Informe um saque válido!");
        saque = Number(prompt("Informe o valor que deseja sacar entre R$ 10,00 e R$ 600,00"));
    }
    const notas100 = Math.floor(saque / 100);
    const notas50 = Math.floor((saque - (notas100 * 100)) / 50);
    const notas10 = Math.floor((saque - (notas50 * 50) - (notas100 * 100)) / 10);
    const notas5 = Math.floor((saque - (notas10 * 10) - (notas50 * 50) - (notas100 * 100)) / 5);
    const notas1 = Math.floor((saque - (notas5 * 5) - (notas10 * 10) - (notas50 * 50) - (notas100 * 100)) % 10);

    let termoCentena;
    let termoCinqueta;
    let termoDezena;
    let termoCinco;
    let termoUnidade;

    (notas100 <= 1) ? termoCentena = "nota" : termoCentena = "notas";
    (notas50 <= 1) ? termoCinqueta = "nota" : termoCinqueta = "notas";
    (notas10 <= 1) ? termoDezena = "nota" : termoDezena = "notas";
    (notas5 <= 1) ? termoCinco = "nota" : termoCinco = "notas";
    (notas1 <= 1) ? termoUnidade = "nota" : termoUnidade = "notas";

    if (saque >= 100) {
        return `Para sacar a quantia de R$ ${saque.toFixed(2)}, o script fornece:\n ${notas100} ${termoCentena} de 100\n ${notas50} ${termoCinqueta} de 50\n ${notas10} ${termoDezena} de 10\n ${notas5} ${termoCinco} de 5 e\n ${notas1} ${termoUnidade} de 1.`;
    } else if (saque >= 50) {
        return `Para sacar a quantia de R$ ${saque.toFixed(2)}, o script fornece:\n ${notas50} ${termoCinqueta} de 50\n ${notas10} ${termoDezena} de 10\n ${notas5} ${termoCinco} de 5 e\n ${notas1} ${termoUnidade} de 1.`;
    } else {
        return `Para sacar a quantia de R$ ${saque.toFixed(2)}, o script fornece:\n ${notas10} ${termoDezena} de 10\n ${notas5} ${termoCinco} de 5 e\n ${notas1} ${termoUnidade} de 1.`;
    }
}