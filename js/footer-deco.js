// Function to duplicate footer deco based on viewport width
function updateFooterDeco() {
    const container = document.getElementById('footer-deco-container');
    const viewportWidth = window.innerWidth;

    // Assume each footer-deco element has a width (adjust this value based on your SVG)
    // You can also dynamically get this after loading the first image
    const decoWidth = 200; // Adjust this to match your SVG width
    const decoHeight = 100; // Fixed height as requested

    // Calculate how many elements we need to fill the viewport
    const numberOfElements = Math.ceil(viewportWidth / decoWidth);

    // Clear existing elements
    container.innerHTML = '';

    // Create and append the required number of elements
    for (let i = 0; i < numberOfElements; i++) {
        const img = document.createElement('img');
        img.className = 'footer-deco';
        img.src = 'assets/decorative/footer-deco.svg';
        img.alt = 'footer-deco';
        img.style.height = decoHeight + 'px';
        img.style.zIndex = 100 - i; // First element gets highest z-index
        container.appendChild(img);
    }
}

// Initial call
updateFooterDeco();

// Update on window resize
let resizeTimeout;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateFooterDeco, 100);
});
