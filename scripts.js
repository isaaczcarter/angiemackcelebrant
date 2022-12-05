const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLink = document.getElementsByClassName('nav-link');

function toggle_menu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

hamburger.addEventListener('click', toggle_menu);

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

let weddings_dropdown = document.getElementById('weddings-dropdown');
let funerals_dropdown = document.getElementById('funerals-dropdown');
let services_other_dropdown = document.getElementById('services-other-dropdown');

let down_arrows = document.getElementsByClassName('down-arrow');

let weddings_dropdown_button = document.getElementById('weddings-dropdown-button');
let funerals_dropdown_button = document.getElementById('funerals-dropdown-button');
let other_dropdown_button = document.getElementById('other-dropdown-button');

function weddings_dropdown_toggle(){
    weddings_dropdown.classList.toggle('hidden');
}

function funerals_dropdown_toggle(){
    funerals_dropdown.classList.toggle('hidden');
}

function other_dropdown_toggle(){
    services_other_dropdown.classList.toggle('hidden');
}

weddings_dropdown_button.addEventListener('click', weddings_dropdown_toggle)
funerals_dropdown_button.addEventListener('click', funerals_dropdown_toggle)
other_dropdown_button.addEventListener('click', other_dropdown_toggle)


//Converts service section into a dropdown assortment to save screen space on smaller devices
function convert_to_dropdown(){
    weddings_dropdown.classList.add('hidden');
    funerals_dropdown.classList.add('hidden');
    services_other_dropdown.classList.add('hidden');
    for(x=0; x<down_arrows.length; x++){
        down_arrows[x].classList.remove('hidden');
    }
}

//Converts service section back to full display
function convert_to_fullDisplay(){
    weddings_dropdown.classList.remove('hidden');
    funerals_dropdown.classList.remove('hidden');
    services_other_dropdown.classList.remove('hidden');
    for(x=0; x<dropdown_buttons.length; x++){
        dropdown_buttons[x].classList.add('hidden');
    }
}

// Calls function at certain screen size, below or above 930px
var limitFunc = function(){
    if (window.innerWidth<930)
       convert_to_dropdown()
    
    else
       convert_to_fullDisplay()
};

window.addEventListener("resize", limitFunc);
window.addEventListener("onload", limitFunc);