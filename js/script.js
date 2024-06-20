$(".btn2>li").first().addClass("check");
$(".slide>ul>li").eq(0).siblings().hide();
let nth = 0;
const MAX = $(".btn2>li").length - 1;
let auto = 0;

$(".slide>ul>li").hide().eq(0).show();

function autoplay() {
  if (auto == 0) {
    auto = setInterval(function () {
      nth++;
      if (nth > MAX) nth = 0;
      $(".slide>ul>li:first-child")
        .fadeOut(500)
        .next()
        .fadeIn(500)
        .end()
        .appendTo(".slide>ul");
      $(".btn2>li").removeClass("check").eq(nth).addClass("check");
    }, 3000);
  }
}
autoplay();
/* 자동실행 멈춤 재실행 */
$("#main_banner")
  .mouseover(function () {
    clearInterval(auto);
    auto = 0;
  })
  .mouseout(function () {
    autoplay();
  });
$(".btn2>li").click(function () {
  let checkBtn = $(this).index();
  if (nth == checkBtn) return;
  $(".btn2>li").removeClass("check").eq(checkBtn).addClass("check");

  nth == checkBtn;
});
// 체크버튼 클릭
$(".btn2>li").click(function () {
  let checkBtn = $(this).index();
  if (nth == checkBtn) return;
  $(".btn2>li").removeClass("check").eq(checkBtn).addClass("check");
  $(".slide>ul>li").eq(nth).fadeOut(500);
  $(".slide>ul>li").eq(checkBtn).fadeIn(500);
  nth = checkBtn;
});
