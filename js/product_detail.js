// 상수(대체로 대문자) 설정 - #lnb의 위치값
const LNBPOS = $(".con2").offset();
// offset은 위치값 #lnb의 위치값은 top:800px, left:0
console.log(".con2의 초기 위치값", LNBPOS);
// 상수 설정 - #lnb의 위치값 중 top값
const LNBTOP = $(".con2").offset().top;
// offset().top는 위치값 중에서 top값
console.log(".con2의 초기 top값", LNBTOP);
// scroll()은 스크롤이벤트

$(window).scroll(function () {
  // 변수 설정 - 스크롤하여 움직인 Y값
  let scrollY = $(window).scrollTop();
  console.log("스크롤하여 움직인 Y값", scrollY);
  if (scrollY >= 4400) {
    // position, top, z-index
    console.log(".con2 원래대로");
    $(".con2").css({ position: "absolute", top: 4640 });
  } else {
    // position 원래대로
    console.log(" .con2 fixed");
    $(".con2").css({ position: "fixed", top: 240 });
  }
});
