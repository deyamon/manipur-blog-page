// Quiz logic (only runs on interactive.html)
function evaluateQuiz() {
    const answers = {
        q1: 'loktak',
        q2: 'rasleela',
        q3: 'sangai'
    };

    let score = 0;
    let total = Object.keys(answers).length;

    Object.keys(answers).forEach(q => {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    });

    const resultEl = document.getElementById('quiz-result');
    if (resultEl) {
        resultEl.textContent = `You scored ${score} out of ${total}.`;
        if (score === total) {
            resultEl.textContent += ' Beautiful! You really know Manipur.';
        } else if (score === 0) {
            resultEl.textContent += ' No worries, every journey starts somewhere.';
        }
    }
}

const quizButton = document.getElementById('quiz-submit');
if (quizButton) {
    quizButton.addEventListener('click', evaluateQuiz);
}

// Simple month chips for festivals (interactive.html)
const monthChips = document.querySelectorAll('.month-chip');
const monthInfo = document.getElementById('month-info');
const monthImage = document.getElementById('month-image');

if (monthChips && monthChips.length > 0 && monthInfo) {
    monthChips.forEach(chip => {
        chip.addEventListener('click', () => {
            monthChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const month = chip.dataset.month;

            let text = '';
            let imgSrc = 'assets/img/fest-default.jpg';
            let imgAlt = 'Festival highlight in Manipur';

            switch (month) {
                case 'mar':
                    text = 'Yaoshang: Five-day spring festival with sports, music, colours, and Thabal Chongba.';
                    imgSrc = 'assets/img/fest-yaoshang.jpg';
                    imgAlt = 'Yaoshang festival celebration';
                    break;
                case 'apr':
                    text = 'Cheiraoba: Manipuri New Year, families clean homes and climb nearby hills for good fortune.';
                    imgSrc = 'assets/img/fest-cheiraoba.jpg';
                    imgAlt = 'Cheiraoba New Year rituals';
                    break;
                case 'may':
                    text = 'Lai Haraoba: A festival honouring local deities with Maibi dances and ritual performances.';
                    imgSrc = 'assets/img/fest-lai-haraoba.jpg';
                    imgAlt = 'Lai Haraoba traditional dance';
                    break;
                case 'nov':
                    text = 'Ningol Chakouba: Married daughters are invited back to their parental homes for a warm family feast.';
                    imgSrc = 'assets/img/fest-ningol-chakouba.jpg';
                    imgAlt = 'Ningol Chakouba family feast';
                    break;
                default:
                    text = 'Add a short note about major festivals in this month.';
                    imgSrc = 'assets/img/fest-default.jpg';
                    imgAlt = 'Festival highlight in Manipur';
            }

            monthInfo.textContent = text;

            if (monthImage) {
                monthImage.src = imgSrc;
                monthImage.alt = imgAlt;
            }
        });
    });
}
