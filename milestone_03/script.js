// Smooth scroll + active nav highlighting

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Hero button -> scroll to Register section

const heroBtn = document.getElementById("hero-register-btn");
if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    const registerSection = document.getElementById("register");
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" });
    }

    navLinks.forEach(l => l.classList.remove("active"));
    document
      .querySelector('.nav-link[href="#register"]')
      ?.classList.add("active");
  });
}

//  submit alert (demo only)

const fakeSubmitBtn = document.getElementById("fake-submit");
if (fakeSubmitBtn) {
  fakeSubmitBtn.addEventListener("click", () => {
    alert("This is a demo form only.\nPlease use your official blood service website to register.");
  });
}
