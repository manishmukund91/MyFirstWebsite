const heading = document.querySelector('h1'); // Get the heading element

let position = 0;
const speed = 2; // How fast the heading moves

function animateHeading() {
    position += speed;
    heading.style.marginLeft = position + 'px'; // Move the heading to the right

    // Make it loop back to the left when it goes off-screen (optional)
    if (position > window.innerWidth) {
        position = -heading.offsetWidth;
    }

    requestAnimationFrame(animateHeading); // Call this function again for the next frame
}

animateHeading(); // Start the animation