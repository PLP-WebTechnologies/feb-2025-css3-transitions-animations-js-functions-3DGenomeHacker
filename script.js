const animateBtn = document.getElementById('animateBtn');
const colorPicker = document.getElementById('colorPicker');
const savedColorMsg = document.getElementById('savedColorMsg');

// Load saved color from localStorage on page load
window.onload = () => {
  const savedColor = localStorage.getItem('favoriteColor');
  if (savedColor) {
    colorPicker.value = savedColor;
    savedColorMsg.textContent = `Your saved color is ${savedColor}`;
  }
};

// Add bounce animation when button is clicked
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('bounce');
  
  // Remove the class after animation ends so it can be triggered again
  animateBtn.addEventListener('animationend', () => {
    animateBtn.classList.remove('bounce');
  }, { once: true });
});

// Save color to localStorage when changed
colorPicker.addEventListener('input', (e) => {
  const color = e.target.value;
  localStorage.setItem('favoriteColor', color);
  savedColorMsg.textContent = `Your saved color is ${color}`;
});
