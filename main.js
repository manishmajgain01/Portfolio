const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "20px",
  origin: "bottom",
  duration: 400,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right"
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 100,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".header__content h3", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".intro__image", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".intro__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".intro__content .section__header", {
  ...scrollRevealOption,
  delay: 100,
});
ScrollReveal().reveal(".intro__description", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".intro__grid", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".intro__content h4", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".intro__flex div", {
  ...scrollRevealOption,
  delay: 500,
  interval: 100,
});

ScrollReveal().reveal(".journey__grid > div > div", {
  ...scrollRevealOption,
  interval: 100,
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

const setActiveFilter = (category) => {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });

  projectCards.forEach((card) => {
    const isVisible = category === "all" || card.dataset.category === category;
    card.style.display = isVisible ? "grid" : "none";
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button.dataset.category);
  });
});

setActiveFilter("all");

ScrollReveal().reveal(".project-card", {
  ...scrollRevealOption,
  interval: 100,
  distance: "30px",
  origin: "bottom",
});

ScrollReveal().reveal(".banner__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 100,
});
ScrollReveal().reveal(".banner__btn", {
  ...scrollRevealOption,
  delay: 200,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});
