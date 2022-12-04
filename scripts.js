const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')
const navLink = document.getElementsByClassName('nav-link')

function toggle_menu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

hamburger.addEventListener('click', toggle_menu);

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))