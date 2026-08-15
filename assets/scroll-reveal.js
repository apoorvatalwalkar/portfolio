// Scroll-triggered reveal for case study pages.
// Adds .reveal to every .cs-section on load (progressive enhancement —
// if this script fails to run, sections just stay fully visible), then
// uses IntersectionObserver to add .is-visible as each section scrolls
// into view. See the .reveal rules in styles.css for the actual animation.
(function () {
    var sections = document.querySelectorAll('.cs-section');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    sections.forEach(function (el) {
        el.classList.add('reveal');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    sections.forEach(function (el) {
        observer.observe(el);
    });
})();
