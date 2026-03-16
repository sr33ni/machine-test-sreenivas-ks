const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".burger");
const searchButton = document.querySelector(".search-icon")
const searchBox = document.querySelector(".search-box")
const navmenu = document.querySelector(".main-nav")
const navul = document.querySelector(".nav-ul")
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.classList.toggle("open");
  navul.classList.toggle("open")
  document.body.classList.toggle("fixed")
});
console.log(searchBox)
searchButton.addEventListener("click", () => {
  searchBox.classList.toggle("open");
})

window.onload = function () {
  function onScroll() {
    navmenu.classList.toggle("fixed-lg", window.scrollY > 170);
  }
  document.addEventListener('scroll', onScroll);
};
const elements = document.querySelectorAll(".box-inter");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

elements.forEach(element => {
  observer.observe(element);
});