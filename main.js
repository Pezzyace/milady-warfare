const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');
const navContainer = document.getElementById('nav-container');
const closeBtn = document.getElementById('close-nav');

window.addEventListener('scroll', () => {
  document.querySelector('.desktop-nav').classList.toggle('window-scroll', window.scrollY > 100);
})
window.addEventListener('scroll', () => {
  document.querySelector('.mobile-nav').classList.toggle('window-scroll', window.scrollY > 100);
})

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

hamburger.addEventListener("click", () => {
  navContainer.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  navContainer.style.display = "none";
})
navContainer.addEventListener("click", () => {
  navContainer.style.display = "none";
})