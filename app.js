// Handles the mobile burger menu — toggles the social links panel open/closed
// when the burger icon is clicked, and closes it when clicking outside the menu.
const navSlide = () => {
  const burger = document.querySelector('.burger');       // Grabs the burger icon element
  const socialLinks = document.querySelector('.social-links'); // Grabs the social links panel

  // Listen for a click on the burger icon
  burger.addEventListener('click', (e) => {
    e.stopPropagation(); // Stops the click from bubbling up to the document listener below
    socialLinks.classList.toggle('nav-active'); // Adds nav-active if missing, removes it if present
  });

  // Listen for a click anywhere on the page
  document.addEventListener('click', (e) => {
    if (socialLinks.classList.contains('nav-active') && !socialLinks.contains(e.target)) {
      // If the menu is open and the click was outside of it, close it
      socialLinks.classList.remove('nav-active');
    }
  });

  // Listen for clicks inside the social links panel
  socialLinks.addEventListener('click', (e) => {
    e.stopPropagation(); // Stops the click from reaching the document listener, so the menu stays open
  });
}

navSlide(); // Call the function to activate all the listeners