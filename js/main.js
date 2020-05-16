// scroll reveal
window.sr = ScrollReveal();

sr.reveal(".btn", {
  duration: 2000,
  delay: 2000,
  origin: "bottom"
});

sr.reveal("demo", {
  duration: 2000,
  viewFactor: 0.8
});

$(window).bind("scroll", function() {
  if ($(window).scrollTop() > 100) {
    $("#arrow").hide("slow");
  }
});

//Select DOM Items

const menuBtn = document.querySelector(".menu-btn");

const menu = document.querySelector(".menu");

const menuNav = document.querySelector(".menu-nav");

const navItems = document.querySelectorAll(".nav-item");

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
