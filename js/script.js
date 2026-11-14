
// =====================================
// 1. AUTOMATIC COPYRIGHT YEAR
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =====================================
// 2. MOBILE NAVBAR AUTO CLOSE
// =====================================

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navbarMenu.classList.contains("show")) {

            const navbarCollapse = bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            navbarCollapse.hide();
        }

    });

});


// =====================================
// 3. ACTIVE NAVIGATION LINK
// =====================================

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);


// =====================================
// 4. BACK TO TOP BUTTON
// =====================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================
// 5. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".section-heading, .project-card, .about-image, .motto-box, .contact-info"
);

const revealObserver = new IntersectionObserver(
    function(entries, observer) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function(element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =====================================
// 6. CONSOLE WELCOME MESSAGE
// =====================================

console.log("Welcome to my Developer Portfolio!");
console.log("Designed and Developed by Mark Jaissser.");
