const navigationHeight = document.querySelector(".navbar").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + 10 + "px"
);

$("nav a").on("click", function () {
  $("nav").find(".active").removeClass("active");
  $(this).addClass("active");
});
