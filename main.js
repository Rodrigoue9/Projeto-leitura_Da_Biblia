function atualizarMensagemDiaria() {
    var agora = new Date();
    var dia = agora.getDate();
    var mes = agora.getMonth() + 1; // Meses começam do zero

    // Verificar a data atual e atualizar o conteúdo do h2
    if (dia === 9 && mes === 1) {
        document.getElementById('mensagemDiaria').innerText = "Pão de queijo";
        document.getElementById('Leitura').innerText = "Genesis";
    } else if (dia === 10 && mes === 1) {
        document.getElementById('mensagemDiaria').innerText = "Genesis";
        document.getElementById('Leitura').innerText = "Genesis";
    } else if (dia === 11 && mes === 1) {
        document.getElementById('mensagemDiaria').innerText = "Genesis";
        document.getElementById('Leitura').innerText = "33-34";
    } else if (dia === 12 && mes === 1) {
        document.getElementById('mensagemDiaria').innerText = "Genesis";
        document.getElementById('Leitura').innerText = "35-37";
    } else if (dia === 13 && mes === 1) {
        document.getElementById('mensagemDiaria').innerText = "Genesis";
        document.getElementById('Leitura').innerText = "38-40";
    } else if (dia === 14 && mes === 1) {
        document.getElementById('mensagemDiaria').innerText = "Genesis";
        document.getElementById('Leitura').innerText = "41-42";
    } else {
        // Caso contrário, não atualiza o conteúdo
        document.getElementById('mensagemDiaria').innerText = "";
    }
}

// Definir um temporizador para chamar a função a cada segundo
setInterval(atualizarMensagemDiaria, 1000);