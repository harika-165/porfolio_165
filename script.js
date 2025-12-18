// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// Simple alert on contact click
document.getElementById("contact").addEventListener("click", () => {
    alert("Thanks for visiting my portfolio!");
});

// Change header text color on click
document.querySelector("header").addEventListener("click", () => {
    document.querySelector("header h1").style.color = "#00adb5";
});
