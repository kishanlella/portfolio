// ===== Typing Effect =====

const roles = [
    "Aspiring Data Analyst",
    "Power BI Developer",
    "SQL Enthusiast",
    "Python Programmer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {
    if (!typing) return;

    let current = roles[roleIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, deleting ? 50 : 120);
}

typeEffect();


// ===== Scroll Animation =====

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ===== Active Navbar =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


// ===== Back To Top Button =====

const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


// ===== Current Year =====

const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML = "© " + new Date().getFullYear() + " Lella Kishan Chandra Dev | Data Analyst Portfolio";
}