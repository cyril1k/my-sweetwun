function createConfetti() {
  const container = document.querySelector('.confetti-container');
  const colors = ['#FF69B4', '#FF1493', '#DB7093', '#FFC0CB']; // Pink shades for love
  const hearts = ['❤️', '💕']; // Heart Unicode characters
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('span');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.animationDuration = `${Math.random() * 3 + 1}s`;
    confetti.textContent = hearts[Math.floor(Math.random() * hearts.length)]; // Random heart
    container.appendChild(confetti);
  }
}

window.onload = createConfetti;