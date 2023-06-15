const navigationHeight = document.querySelector(".navbar").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + 10 + "px"
);

$("#brand").on("click", function () {
  $("nav").find(".active").removeClass("active");
});

$("#menu-collapse a").on("click", function () {
  $("nav").find(".active").removeClass("active");
  $(this).addClass("active");
});
