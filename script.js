```javascript
/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


/* =========================
   CLOSE MOBILE MENU
   WHEN A LINK IS CLICKED
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const menu = document.getElementById("navLinks");

        menu.classList.remove("active");

    });

});


/* =========================
   SCROLL EFFECT
========================= */

const animatedElements = document.querySelectorAll(
    ".art-card, .service-card, .featured-content, .about-content"
);


const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(function(element) {

    observer.observe(element);

});


/* =========================
   IMAGE ERROR HANDLING
========================= */

const images = document.querySelectorAll("img");

images.forEach(function(image) {

    image.addEventListener("error", function() {

        console.log(
            "Image could not be loaded: " + image.src
        );

    });

});


/* =========================
   CURRENT YEAR
========================= */

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        "© " + year + " Aaron Artz. All Rights Reserved.";

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", function() {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
```
