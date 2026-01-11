const soundSuccess = new Audio('../success.wav');
const soundError = new Audio('../error.wav');
let isMuted = false;

soundSuccess.volume = 0.7;
soundError.volume = 0.1;

function toggleMute() {
    isMuted = !isMuted;
    const btn = document.getElementById('sound-toggle');
    if (btn) btn.innerText = isMuted ? '🔇' : '🔊';
}

function createPartyStars(elementId) {
    const card = document.getElementById(elementId);
    const rect = card.getBoundingClientRect();
    const points = [
        {x: rect.left, y: rect.top}, {x: rect.right, y: rect.top},
        {x: rect.left, y: rect.bottom}, {x: rect.right, y: rect.bottom}
    ];

    points.forEach(p => {
        for (let i = 0; i < 6; i++) {
            const star = document.createElement('div');
            star.className = 'star-particle';
            star.innerText = '⭐';
            star.style.left = p.x + 'px';
            star.style.top = p.y + 'px';
            const angle = Math.random() * Math.PI * 2;
            const dist = 80 + Math.random() * 80;
            star.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
            star.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
            star.style.animation = `explode 0.4s ease-out forwards`;
            document.body.appendChild(star);
            setTimeout(() => star.remove(), 400);
        }
    });
}

function showSharedRestMessage(containerId) {
    document.getElementById(containerId).innerHTML = `
        <div style="font-size: 3.5rem;">🌿</div>
        <h2 style="font-size: 1.8rem; margin: 10px 0;">הקשבה עצמית היא כוח.</h2>
        <p>המנוחה היא צורך חיוני ב-NVC.<br>מחכים לך כאן כשתרגיש/י רעננות.</p>
        <button style="margin-top:20px; width:100%; border: 1px solid #cbd5e0;" onclick="location.href='../index.html'">חזרה לתפריט</button>
    `;
}


function celebrateVictory() {
    // וידוא שהספרייה טעונה לפני ההפעלה
    if (typeof confetti !== 'undefined') {
        var duration = 3 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.8 },
                colors: ['#48bb78', '#4a90e2', '#ffd700']
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.8 },
                colors: ['#48bb78', '#4a90e2', '#ffd700']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}