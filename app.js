const navSlide = () => {
  const burger = document.querySelector('.burger');
  const socialLinks = document.querySelector('.social-links');

  // Check if elements exist to avoid errors
  if (!burger || !socialLinks) return;

  // Toggle menu
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    socialLinks.classList.toggle('nav-active');
  });

  // Close menu when clicking anywhere else on the screen
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = socialLinks.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (socialLinks.classList.contains('nav-active') && !isClickInsideMenu && !isClickOnBurger) {
      socialLinks.classList.remove('nav-active');
    }
  });
};

// Fire only when DOM is ready to prevent layout jumps
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', navSlide);
} else {
  navSlide();
}