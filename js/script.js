/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

  const preloader = document.querySelector(".preloader");

  setTimeout(() => {

    if (preloader) {
      preloader.classList.add("hide");
    }

  }, 700);

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open");

  });


  document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

      menuToggle.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");

    });

  });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element, index) => {

  element.style.transitionDelay = `${Math.min(index * 0.04, 0.25)}s`;

  revealObserver.observe(element);

});


/* =========================
   HERO MOUSE PARALLAX
========================= */

const heroVisual = document.querySelector(".hero-visual");

if (heroVisual && window.innerWidth > 900) {

  heroVisual.addEventListener("mousemove", (event) => {

    const rect = heroVisual.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height -
      0.5;

    const vehicleStage =
      heroVisual.querySelector(".vehicle-stage");

    const floatingCard =
      heroVisual.querySelector(".floating-card");

    const floatingLabel =
      heroVisual.querySelector(".floating-label");


    if (vehicleStage) {

      vehicleStage.style.transform = `
        perspective(900px)
        rotateY(${x * 10 - 7}deg)
        rotateX(${y * -6 + 3}deg)
        translate(${x * 8}px, ${y * 8}px)
      `;

    }


    if (floatingCard) {

      floatingCard.style.transform = `
        translate(${x * -15}px, ${y * -10}px)
      `;

    }


    if (floatingLabel) {

      floatingLabel.style.transform = `
        translate(${x * 10}px, ${y * 8}px)
      `;

    }

  });


  heroVisual.addEventListener("mouseleave", () => {

    const vehicleStage =
      heroVisual.querySelector(".vehicle-stage");

    const floatingCard =
      heroVisual.querySelector(".floating-card");

    const floatingLabel =
      heroVisual.querySelector(".floating-label");


    if (vehicleStage) {

      vehicleStage.style.transform = `
        perspective(900px)
        rotateY(-7deg)
        rotateX(3deg)
      `;

    }


    if (floatingCard) {

      floatingCard.style.transform = "translate(0,0)";

    }


    if (floatingLabel) {

      floatingLabel.style.transform = "translate(0,0)";

    }

  });

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


if (contactForm) {

  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
      document.getElementById("name").value.trim();

    const company =
      document.getElementById("company").value.trim();


    if (!name || !company) {

      formMessage.textContent =
        "Please fill in the required fields.";

      return;

    }


    formMessage.textContent =
      "Thanks! Your request has been received for this demo.";

    contactForm.reset();

  });

}


/* =========================
   CARD TILT
========================= */

const cards =
  document.querySelectorAll(
    ".vehicle-card, .catalog-card"
  );


if (window.innerWidth > 900) {

  cards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width -
        0.5;

      const y =
        (event.clientY - rect.top) /
        rect.height -
        0.5;


      card.style.transform = `
        perspective(900px)
        rotateX(${y * -3}deg)
        rotateY(${x * 3}deg)
        translateY(-7px)
      `;

    });


    card.addEventListener("mouseleave", () => {

      card.style.transform = "";

    });

  });

}


/* =========================
   SMOOTH PAGE TRANSITION
========================= */

document.querySelectorAll("a").forEach(link => {

  const href = link.getAttribute("href");


  if (
    href &&
    href.endsWith(".html") &&
    !href.startsWith("#") &&
    !href.startsWith("http")
  ) {

    link.addEventListener("click", (event) => {

      event.preventDefault();

      document.body.classList.add("page-exit");

      setTimeout(() => {

        window.location.href = href;

      }, 250);

    });

  }

});