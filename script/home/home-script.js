window.addEventListener("scroll", function () {
  const blockthree = document.querySelector(".block-three");
  blockthree.classList.toggle("topthree0", window.scrollY > 3850);
});