export const hamburgerMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle('active');
    navMenu.classList.toggle("active");
}