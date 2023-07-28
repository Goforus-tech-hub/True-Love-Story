document.addEventListener('DOMContentLoaded', function () {
    const animatedCartoon = document.getElementById('animatedCartoon');

    animatedCartoon.addEventListener('click', function () {
        animatedCartoon.classList.toggle('active');
    });
});
