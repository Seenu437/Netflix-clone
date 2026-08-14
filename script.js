const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  // If we scroll down past the initial banner area
  if (window.scrollY > 150) {
    navbar.classList.add('nav-black');
  } else {
    navbar.classList.remove('nav-black');
  }
});
