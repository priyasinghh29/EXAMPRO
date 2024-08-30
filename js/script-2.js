document.addEventListener('DOMContentLoaded', (event) => {
    let timer;
    let timeLeft;
    let isRunning = false;

    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const pomodoroBtn = document.getElementById('pomodoro-btn');
    const breakBtn = document.getElementById('break-btn');
    const longBreakBtn = document.getElementById('long-break-btn');

    pomodoroBtn.addEventListener('click', () => setTimer(25));
    breakBtn.addEventListener('click', () => setTimer(5));
    longBreakBtn.addEventListener('click', () => setTimer(50));
    startBtn.addEventListener('click', startTimer);
    resetBtn.addEventListener('click', resetTimer);

    function setTimer(minutes) {
        if (isRunning) return;
        timeLeft = minutes * 60;
        updateDisplay();
    }

    function startTimer() {
        if (isRunning) return;
        isRunning = true;
        timer = setInterval(countdown, 1000);
    }

    function countdown() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            alert('Time is up!');
            return;
        }
        timeLeft--;
        updateDisplay();
    }

    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        timerDisplay.textContent = '25:00';
    }

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Set initial timer to 25 minutes
    setTimer(25);
});