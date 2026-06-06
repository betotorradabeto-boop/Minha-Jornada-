const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Faz o canvas ocupar a tela inteira do celular/PC
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// O que vai chover na tela
const chars = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// Começa todas as gotas no topo
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    // Fundo preto translúcido cria o efeito de "rastro" nos números
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Verde brilhante
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        // Pega um 0 ou 1 aleatório
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Desenha o número na tela
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Se a gota passou do fim da tela e der "sorte", ela volta pro topo
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        // Move a gota pra baixo
        drops[i]++;
    }
}

// Roda a função draw a cada 33 milissegundos
setInterval(draw, 33);

// Se o usuário virar o celular de pé para deitado, a tela se ajusta
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
