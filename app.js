/* Mobile burger menu behavior
- Finds the burger button (`.burger`) and the mobile menu (`#mobile-menu`).
- Creates an invisible `.menu-overlay` that covers the viewport when the
menu is open. The overlay is used to detect clicks outside the open menu so we can close it.
- Clicking the burger toggles the menu and the overlay. Clicking the overlay closes the menu.
- ARIA attributes `aria-expanded` (on the button) and `aria-hidden` (on the menu) are updated for accessibility and screen readers.
*/

document.addEventListener('DOMContentLoaded', function () {
	// Find the elements we need. If they don't exist, exit early.
	const burger = document.querySelector('.burger');
	const mobileMenu = document.getElementById('mobile-menu');
	if (!burger || !mobileMenu) return; // nothing to do if markup is missing

	// Ensure there's a single overlay element used to detect outside clicks.
	// The overlay is invisible (CSS controls visibility) but receives clicks.
	let menuOverlay = document.querySelector('.menu-overlay');
	if (!menuOverlay) {
		menuOverlay = document.createElement('div');
		menuOverlay.className = 'menu-overlay';
		document.body.appendChild(menuOverlay);
	}

	// When the burger is clicked, toggle the open/closed state of the menu.
	burger.addEventListener('click', function () {
		// Read current 'expanded' state from the button's ARIA attribute.
		const expanded = burger.getAttribute('aria-expanded') === 'true';

		// Toggle ARIA state for assistive technologies.
		burger.setAttribute('aria-expanded', String(!expanded));

		// Show or hide the menu using the CSS class the stylesheet watches.
		mobileMenu.classList.toggle('show');
		burger.classList.toggle('open');

		// Set or clear aria-hidden on the menu (true when the menu is hidden).
		mobileMenu.setAttribute('aria-hidden', String(expanded));

		// Toggle the overlay so clicks outside will be captured when the menu is open.
		menuOverlay.classList.toggle('active');
	});

	// Clicking the overlay (anywhere outside the menu) should close the menu.
	// This handler mirrors the state changes performed when the burger is clicked.
	menuOverlay.addEventListener('click', function () {
		if (!mobileMenu.classList.contains('show')) return; // already closed

		// Remove the classes that indicate an open menu
		mobileMenu.classList.remove('show');
		burger.classList.remove('open');

		// Update ARIA attributes to indicate the menu is closed
		burger.setAttribute('aria-expanded', 'false');
		mobileMenu.setAttribute('aria-hidden', 'true');

		// Hide the overlay
		menuOverlay.classList.remove('active');
	});
});
