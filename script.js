const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const printButton = document.querySelector("[data-print]");

const updateHeader = () => {
  header.dataset.elevated = String(window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const nextState = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(nextState));
  navLinks.dataset.open = String(nextState);
});

navLinks.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.dataset.open = "false";
  }
});

printButton.addEventListener("click", () => {
  window.print();
});
