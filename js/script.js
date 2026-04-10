document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const revealElements = document.querySelectorAll(".hidden");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Navbar scroll effect
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll();

  // Scroll reveal animation
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observerInstance.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach((el) => {
    observer.observe(el);
  });

  // Active nav link by page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Close mobile menu after nav click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse =
          bootstrap.Collapse.getInstance(navbarCollapse) ||
          new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
});

// AUTO YEAR IN FOOTER
const yearElement = document.getElementById("year");

if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
}

const card = document.querySelector(".about-3d-card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 15;
  const rotateY = (x - centerX) / 15;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.03)
  `;

  // Light follow effect
  card.style.setProperty(
    "--light-x",
    `${(x / rect.width) * 100}%`
  );
  card.style.setProperty(
    "--light-y",
    `${(y / rect.height) * 100}%`
  );

  card.style.setProperty(
    "--light-opacity",
    1
  );

  card.style.setProperty(
    "--light",
    `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4), transparent 60%)`
  );

  card.style.setProperty(
    "background",
    "transparent"
  );

  card.style.setProperty(
    "--glow",
    `${x}px ${y}px`
  );

  card.style.setProperty(
    "--shadow",
    `${(x - centerX)/10}px ${(y - centerY)/10}px 30px rgba(0,0,0,0.2)`
  );

  card.style.boxShadow = `${(x - centerX)/10}px ${(y - centerY)/10}px 40px rgba(0,0,0,0.2)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  card.style.boxShadow = "0 25px 50px rgba(0,0,0,0.15)";
});

function changeMap(location){
  const map = document.getElementById("mapFrame");
  const btnKl = document.getElementById("btn-kl");
  const btnKajang = document.getElementById("btn-kajang");

  if(location === "kl"){
    map.src = "https://maps.google.com/maps?q=Residensi%20Aradia%20Kuala%20Lumpur&t=&z=15&ie=UTF8&iwloc=&output=embed";

    btnKl.classList.remove("btn-outline-success");
    btnKl.classList.add("btn-success");

    btnKajang.classList.remove("btn-success");
    btnKajang.classList.add("btn-outline-success");
  }

  if(location === "kajang"){
    map.src = "https://maps.google.com/maps?q=No.199%20Jalan%20Kajang%20Jaya%207%20Taman%20Kajang%20Jaya%20Kajang%20Selangor%2043000&t=&z=17&ie=UTF8&iwloc=&output=embed";

    btnKajang.classList.remove("btn-outline-success");
    btnKajang.classList.add("btn-success");

    btnKl.classList.remove("btn-success");
    btnKl.classList.add("btn-outline-success");
  }
}