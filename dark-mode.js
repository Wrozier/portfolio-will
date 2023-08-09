// dark-mode.js

const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
const body = document.body;

darkModeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
