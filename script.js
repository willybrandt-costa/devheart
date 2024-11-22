let pulseCount = 0;

const heart = document.getElementById('heart');
const flowers = document.getElementById('flowers');

heart.addEventListener('animationiteration', () => {
    pulseCount++;
    if (pulseCount === 5) {
        heart.style.display = 'none';
        flowers.classList.remove('hidden');
    }
});
