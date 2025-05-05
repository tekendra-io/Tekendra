const hamburger = document.getElementById('hamburger');
const nav_link = document.getElementById('navLinks');

hamburger.addEventListener('click', () =>{
    nav_link.classList.toggle('active');
})