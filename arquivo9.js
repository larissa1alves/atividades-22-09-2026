function calcularMediaArray(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }

    return soma / notas.length;
}

function avaliarAluno(aluno) {
    let media = calcularMediaArray(aluno.notas);

    if (media >= 60) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}