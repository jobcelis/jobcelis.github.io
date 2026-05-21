const navSlide = () => {
  const burger = document.querySelector('.burger');
  const socialLinks = document.querySelector('.social-links');

  // Toggle menu on burger click
  burger.addEventListener('click', (e) => {
    e.stopPropagation(); 
    socialLinks.classList.toggle('nav-active');
  });

  // Close menu when clicking anywhere on the page
  document.addEventListener('click', (e) => {
    if (socialLinks.classList.contains('nav-active') && !socialLinks.contains(e.target)) {
      socialLinks.classList.remove('nav-active');
    }
  });

  // Prevent clicks inside the menu from closing it
  socialLinks.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

navSlide();