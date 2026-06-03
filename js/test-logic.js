// js/test-logic.js
let timeLeft = 1800; // 30 minutes in seconds
const timerDisplay = document.getElementById('timer');

function startTimer() {
    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (timerDisplay) {
            timerDisplay.innerText = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Your test is submitting automatically.");
            // Test khatam hone par result page par bhej rahe hain
            window.location.href = "result.html";
        }
        timeLeft--;
    }, 1000);
}

// Page load hote hi timer start
startTimer();
