function navtoggle() {
    const navbar = document.getElementById("navbar");
    if (navbar.style.display == "none") {
        navbar.style.display = "block"
    } else {
        navbar.style.display = "none"
    };
};

function responsivemenu() {
    const navbar = document.getElementById("navbar");
    const navbutton = document.getElementById("navbutton");
    const titleblock = document.getElementById("titleblock");
    if (window.innerWidth >= 900) {
        navbar.style.display = "block";
        navbutton.style.display = "none";
        titleblock.style.display = "block";
    } else if (window.innerWidth < 900) {
        navbar.style.display = "none";
        navbutton.style.display = "block";
        titleblock.style.display = "none";
    };
};
window.addEventListener("resize", responsivemenu);