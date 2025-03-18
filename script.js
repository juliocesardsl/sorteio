function sortear() {
    const qtd_jogos = document.getElementById('qtd_jogos').value;
    const jogos_text = document.getElementById('jogos').value;
    const jogos = jogos_text.split('\n').map(jogo => jogo.trim()); // Remove espaços em branco
    //Remover linhas vazias do array
    const jogosFiltrados = jogos.filter(jogo => jogo !== '');

    if (jogosFiltrados.length > 0) {
        const sorteio = jogosFiltrados[Math.floor(Math.random() * jogosFiltrados.length)];
        document.getElementById('resultado').textContent = `O jogo sorteado foi: ${sorteio}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira pelo menos um jogo.';
    }
}