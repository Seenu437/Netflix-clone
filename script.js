const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    navbar.classList.add('nav-black');
  } else {
    navbar.classList.remove('nav-black');
  }
});
