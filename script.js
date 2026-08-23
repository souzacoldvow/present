const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });

    const links = mobileMenu.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    });
}


/* Pequeno efeito de entrada */

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".hero-content, .hero-character, .chapter-card, .intro-section"
    );

    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";

        setTimeout(() => {

            element.style.transition =
                "opacity .8s ease, transform .8s ease";

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }, 150 + index * 100);

    });

});