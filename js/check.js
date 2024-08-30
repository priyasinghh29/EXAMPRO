function assessMentalHealth() {
    const stressLevel = document.getElementById('stress-level').value;
    const sleepHours = document.getElementById('sleep-hours').value;
    const physicalActivity = document.getElementById('physical-activity').value;
    const socialActivity = document.getElementById('social-activity').value;

    let score = 0;

    if (stressLevel <= 3) score += 2;
    else if (stressLevel <= 6) score += 1;

    if (sleepHours >= 7) score += 2;
    else if (sleepHours >= 5) score += 1;

    if (physicalActivity >= 3) score += 2;
    else if (physicalActivity >= 1) score += 1;

    if (socialActivity >= 3) score += 2;
    else if (socialActivity >= 1) score += 1;

    let resultMessage = '';

    if (score >= 7) {
        resultMessage = 'Your mental health seems to be in a good state. Keep it up!';
    } else if (score >= 4) {
        resultMessage = 'Your mental health is average. Consider making some improvements.';
    } else {
        resultMessage = 'Your mental health seems to be poor. Please seek professional help.';
    }

    document.getElementById('result').innerText = resultMessage;
}