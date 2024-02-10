window.addEventListener('scroll', function() {
    var parallax = document.querySelector('.parallax-container');
    var scrolled = window.pageYOffset;
    parallax.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
});
