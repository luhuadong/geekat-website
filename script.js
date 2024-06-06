document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.stars');

    function createStars() {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;
            starContainer.appendChild(star);
        }
    }

    createStars();

    const text = "极客艾特";
    let index = 0;

    function typeText() {
        const typedText = document.getElementById('typed-text');
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 500);
        }
    }

    typeText();
});
