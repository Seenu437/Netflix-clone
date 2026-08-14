const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  // If we scroll down more than 100 pixels
  if (window.scrollY > 100) {
    navbar.classList.add('nav-black');
  } else {
    navbar.classList.remove('nav-black');
  }
});
