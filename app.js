const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.social-links');

  // Toggle menu on burger click
  burger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent document click from firing
    nav.classList.toggle('nav-active');
  });

  // Close menu when clicking anywhere on the page
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('nav-active') && !nav.contains(e.target)) {
      nav.classList.remove('nav-active');
    }
  });

  // Prevent clicks inside the menu from closing it
  nav.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

navSlide();