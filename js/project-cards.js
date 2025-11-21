document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // If the clicked card is already active, remove active class (collapse it)
            if (card.classList.contains('active')) {
                card.classList.remove('active');
            } else {
                // Otherwise, remove active from all other cards and add to this one
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });
    });
});
