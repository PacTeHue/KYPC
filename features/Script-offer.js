
const offerDuration = 1;
const endTime = new Date(Date.now() + offerDuration * 24 * 60 * 60 * 1000);

const timerDisplay = document.getElementById('timer');
const getCodeButton = document.getElementById('getCodeButton');
const promoCodeDiv = document.getElementById('promoCode');
const codeDisplay = document.getElementById('code');

function generatePromoCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let promoCode = '';
    for (let i = 0; i < 8; i++) {
        promoCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return promoCode;
}

function updateTimer() {
    const now = new Date();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerDisplay.textContent = "Время вышло!";
        getCodeButton.disabled = true;
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerDisplay.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}

// Запуск таймера
let countdown = setInterval(updateTimer, 1000);

// Обработчик кнопки получения промокода
getCodeButton.addEventListener('click', () => {
    const promoCode = generatePromoCode();
    codeDisplay.textContent = promoCode;
    promoCodeDiv.style.display = 'block';
    getCodeButton.disabled = true;
});

updateTimer();