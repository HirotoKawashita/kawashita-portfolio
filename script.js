$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
  });
  
// 浮かび上がる動き
function fadeAnime(){
  $('.fadeInTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn');
    }else{
    $(this).removeClass('fadeIn');
    }
  });
}
// スクロールをしたら動く
$(window).scroll(function (){
  fadeAnime();
});

// 画面が読み込まれたら動く
$(window).on('load', function(){
  fadeAnime();
});

// タイピング
function TextTypingAnime() {
  $('.TextTyping').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var thisChild = "";
      if (scroll >= elemPos - windowHeight) {
        thisChild = $(this).children(); //spanタグを取得
        //spanタグの要素の１つ１つ処理を追加
        thisChild.each(function (i) {
          var time = 100;
          $(this).delay(time * i).fadeIn(time);
        });
      } else {
        thisChild = $(this).children();
        thisChild.each(function () {
          $(this).stop();
          $(this).css("display", "none");
        });
      }
  });
}


$(window).scroll(function () {
  TextTypingAnime();
});

// 画面が読み込まれたらすぐに動かす
$(window).on('load', function () {
var element = $(".TextTyping");
  element.each(function () {
      var text = $(this).html();
      var textbox = "";
      text.split('').forEach(function (t) {
        if (t !== " ") {
          textbox += '<span>' + t + '</span>';
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
  });
  TextTypingAnime();
});