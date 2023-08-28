$(document).ready(function () {
  // Đăng kí Click event cho nav-item
  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
  // Đăng kí Click event cho .categories h2
  $(".categories h2").click(function () {
    $(".categories h2").removeClass("active");
    $(this).addClass("active");
  });
});
