function filterMentors(keyword) {
    const mentorCards = document.querySelectorAll('.mentor-card');
    mentorCards.forEach(card => {
        const mentorName = card.querySelector('h2').innerText.toLowerCase();
        if (mentorName.includes(keyword.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}