const heading = document.querySelector('h1'); // Get the heading element

let position = 0;
const speed = 2; // How fast the heading moves

function animateHeading() {
    position += speed;
    heading.style.marginLeft = position + 'px'; // Move the heading to the right

    // Get the width of the heading
    const headingWidth = heading.offsetWidth;

    // Get the width of the browser window
    const windowWidth = window.innerWidth;

    // Check if the heading has moved off the right side of the screen
    if (position > windowWidth) {
        // Reset the position to start from the left, just off-screen
        position = -headingWidth;
    }

    requestAnimationFrame(animateHeading); // Call this function again for the next frame
}

animateHeading(); // Start the animation