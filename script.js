let jogadorAtual = 'X'; // Define o jogador inicial

// Seleciona todas as células
const celulas = document.querySelectorAll('.celula');

// Adiciona um evento de clique a cada célula
celulas.forEach(celula => {
    celula.addEventListener('click', () => {
        // Verifica se a célula está vazia
        if (celula.textContent === '') {
            celula.textContent = jogadorAtual; // Marca a célula com o jogador atual
            
            // Muda a cor da célula dependendo do jogador
            if (jogadorAtual === 'X') {
                celula.style.backgroundColor = "red"; // Para 'X', a cor é vermelha
            } else {
                celula.style.backgroundColor = "blue"; // Para 'O', a cor é azul
            }
            
            // Verifica se o jogador atual venceu
            if (verificarVencedor()) {
                // Reinicia o jogo após o vencedor
                setTimeout(() => {
                    alert(`Jogador ${jogadorAtual} venceu!`);
                    reiniciarJogo();
                }, 100); // Delay para mostrar o alerta
            } else {
                // Alterna o jogador
                jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; 
            }
        } else {
            alert("Esta célula já está ocupada!"); // Feedback se a célula já estiver ocupada
        }
    });
});

// Função para reiniciar o jogo
function reiniciarJogo() {
    celulas.forEach(celula => {
        celula.textContent = '';
        celula.style.backgroundColor = '';
    });
    jogadorAtual = 'X';
}

// Função para verificar se há um vencedor
function verificarVencedor() {
    return (
        (celulas[0].textContent === jogadorAtual && celulas[1].textContent === jogadorAtual && celulas[2].textContent === jogadorAtual) ||
        (celulas[3].textContent === jogadorAtual && celulas[4].textContent === jogadorAtual && celulas[5].textContent === jogadorAtual) ||
        (celulas[6].textContent === jogadorAtual && celulas[7].textContent === jogadorAtual && celulas[8].textContent === jogadorAtual) ||
        (celulas[0].textContent === jogadorAtual && celulas[3].textContent === jogadorAtual && celulas[6].textContent === jogadorAtual) ||
        (celulas[1].textContent === jogadorAtual && celulas[4].textContent === jogadorAtual && celulas[7].textContent === jogadorAtual) ||
        (celulas[2].textContent === jogadorAtual && celulas[5].textContent === jogadorAtual && celulas[8].textContent === jogadorAtual) ||
        (celulas[0].textContent === jogadorAtual && celulas[4].textContent === jogadorAtual && celulas[8].textContent === jogadorAtual) ||
        (celulas[2].textContent === jogadorAtual && celulas[4].textContent === jogadorAtual && celulas[6].textContent === jogadorAtual)
    );
}

// Adiciona evento de clique no botão de reiniciar
document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);