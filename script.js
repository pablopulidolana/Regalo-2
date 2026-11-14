const giftWrapper = document.getElementById('gift-wrapper');
const instruction = document.getElementById('instruction');
const finalCaption = document.getElementById('final-caption');
const sparklesContainer = document.getElementById('sparkles-container');

let isOpened = false;

function createSparkles() {
    const rect = giftWrapper.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2 - 20;

    const colors = ['#fcd34d', '#ff8fa3', '#ffffff', '#60a5fa'];

    for (let i = 0; i < 36; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        const angle = Math.random() * Math.PI * 2;
        const distance = 70 + Math.random() * 140;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 40;

        sparkle.style.left = `${originX}px`;
        sparkle.style.top = `${originY}px`;
        sparkle.style.background = colors[i % colors.length];
        sparkle.style.boxShadow = `0 0 10px ${colors[i % colors.length]}`;
        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);

        sparklesContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1250);
    }
}

giftWrapper.addEventListener('click', () => {
    if (isOpened) return;
    isOpened = true;

    // 1. Ocultar el texto superior
    instruction.classList.add('hidden');

    // 2. Abrir el lazo, levantar la tapa y sacar al osito
    giftWrapper.classList.add('opened');

    // 3. Lanzar destellos de luz
    setTimeout(createSparkles, 200);

    // 4. Mostrar el mensaje final debajo
    finalCaption.classList.add('visible');
});