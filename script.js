const navLinkEls = document.querySelectorAll(".nav_link");
const sectionELs = document.querySelectorAll(".section");
let currSection = "home";
window.addEventListener("scroll", () => {
  sectionELs.forEach((sectionEL) => {
    if (window.scrollY >= sectionEL.offsetTop - 200) {
      currSection = sectionEL.id;
    }
    if (window.scrollY == 0) {
      currSection = "home";
    }
  });

  navLinkEls.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currSection)) {
      document.querySelector(".active_nav").classList.remove("active_nav");
      navLinkEl.classList.add("active_nav");
    }
  });
});
