window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sscroll", window.scrollY > 100);
});