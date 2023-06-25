// ハンバーガーメニュー
jQuery(function ($) {
  $('.js-hamburger').on('click', function(){
    if($(this).hasClass('open')){
      $('.js-drawer').fadeOut();
      $(this).removeClass('open');
      $('html').removeClass('fixed');
    }else{
      $('.js-drawer').fadeIn();
      $(this).addClass('open');
      $('html').addClass('fixed');
    }
  });
});
// faqセクション
//アコーディオンをクリックした時の動作
jQuery(function ($) {
$('.faq__accordion-area-q').on('click', function() {//タイトル要素をクリックしたら
  $('.faq__accordion-area-a').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
  var findElm = $(this).next(".faq__accordion-area-a");//タイトル直後のアコーディオンを行うエリアを取得
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去    
  }else{//それ以外は
    $('.close').removeClass('close'); //クラス名closeを全て除去した後
    $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(500);//アコーディオンを開く
  }
});
});
// スクロールでフェイドインする
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.scrollanime').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight + 60) {
              $(this).addClass("fadeInDown");
          }
      });
  });
});
// 各セクションへスムーススクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('.s_01 a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
// ページトップボタンを押すとしたから上に上がる
$(function(){
  var topBtn=$('#pagetop');
  topBtn.hide();
  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
  })
