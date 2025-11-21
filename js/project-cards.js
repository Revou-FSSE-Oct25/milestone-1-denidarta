document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                } else {
                    cards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                }
            }
        });
    });
});
