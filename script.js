const heading = document.querySelector('h1');

let position = 0;
const speed = 2;

function animateHeading() {
    position += speed;
    heading.style.marginLeft = position + 'px';

    if (position > window.innerWidth) {
        position = -heading.offsetWidth;
    }

    requestAnimationFrame(animateHeading);
}

animateHeading();