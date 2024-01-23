const btn = document.querySelector('.menu');
const logo = document.querySelector('.logoLink');
const menu = document.querySelector('.left-menu');
const settings = document.getElementById('setting');

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
        menu.style.width = '4.4rem';
        logo.style.opacity = '0';
    }
    else {
        menu.style.width = '13rem';
        logo.style.opacity = '1';
    }
})