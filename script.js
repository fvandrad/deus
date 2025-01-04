document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu-items');

    menuIcon.addEventListener('click', function() {
        menuItems.classList.toggle('active');
        menuIcon.classList.toggle('active');
        const expanded = menuIcon.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
        menuIcon.setAttribute('aria-expanded', expanded);
    });
});