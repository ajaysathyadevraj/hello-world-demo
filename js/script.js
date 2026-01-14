document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    const animate = (el) => {
        const target = parseFloat(el.dataset.target);
        const isDecimal = el.dataset.target.includes('.');
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current < target) {
                el.textContent = isDecimal ? current.toFixed(3) : Math.ceil(current);
                requestAnimationFrame(update);
            } else {
                el.textContent = isDecimal ? target.toFixed(3) : target;
            }
        };
        update();
    };

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !animated) {
            animated = true;
            counters.forEach(animate);
        }
    }, { threshold: 0.5 });

    const stats = document.querySelector('.stats-bar');
    if (stats) observer.observe(stats);
});
