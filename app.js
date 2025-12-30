const burger = document.querySelector('.header-burger');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.mobile-nav a.nav-link');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}
burger.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        toggleMenu();
    }
});
