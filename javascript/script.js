const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("navbar--hidden");
    } else {
        nav.classList.remove("navbar--hidden");
    }

    lastScrollY = window.scrollY;
});


const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    "dark" 
    : "light"

  modeStatus.innerText = modeMessage;
}
modeToggle.addEventListener('click', toggleMode);
