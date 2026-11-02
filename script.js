// Select the navigation menu and toggle button

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// Open and close the mobile navigation menu

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Update accessibility state
    const isExpanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);

});


// Close the menu after clicking a navigation link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});