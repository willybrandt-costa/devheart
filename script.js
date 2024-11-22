let pulseCount = 0;

const heart = document.getElementById('heart');
const flowers = document.getElementById('flowers');
const message = document.getElementById('message');

heart.addEventListener('animationiteration', () => {
    pulseCount++;
    if (pulseCount === 5) {
        heart.style.animation = "explode 0.5s ease-in-out forwards";
        setTimeout(() => {
            heart.style.display = 'none';
            flowers.classList.remove('hidden'); // Mostra o buquê
            setTimeout(() => {
                flowers.style.display = 'none';
                message.classList.remove('hidden'); // Mostra a mensagem
            }, 3000); // Tempo para o buquê aparecer antes de exibir o texto
        }, 500); // Tempo para a explosão
    }
});
