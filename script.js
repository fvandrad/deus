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

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Ajuste o threshold conforme necessário

    elements.forEach(el => observer.observe(el));
});