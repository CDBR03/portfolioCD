window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollTopTo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
