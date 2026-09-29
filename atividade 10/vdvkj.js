function verificarAprovacao(nota) {
    return nota >= 60;
}

function contarAprovados(listaAlunos) {
    let totalAprovados = 0;

    for (let aluno of listaAlunos) {
        if (verificarAprovacao(aluno.nota)) {
            totalAprovados++;
        }
    }

    return totalAprovados;
}

function executarAnalise() {
    let listaAlunos = [];

    for (let i = 0; i < 4; i++) {
        let nome = prompt("Digite o nome do aluno " + (i + 1) + ":");
        let nota = Number(prompt("Digite a nota de " + nome + ":"));

        listaAlunos.push({
            nome: nome,
            nota: nota
        });
    }

    let totalAprovados = contarAprovados(listaAlunos);

    console.log("Total de alunos aprovados: " + totalAprovados);
}

executarAnalise();
