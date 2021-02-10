

$(function () {
  //ハンバーガーメニュー
  $(function () {
    $('.hamburger').click(function () {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
        //ハンバーガーメニューが開かれたとき
        $('.menuArea').fadeIn();
      } else {
        //ハンバーガーメニューが閉じるとき
        $('.menuArea').fadeOut();
      }
      //背景がクリックされたとき
      $('.menuBg').click(function () {
        $('.hamburger').removeClass('active');
        $('.menuArea').fadeOut();
      });
    });
  });
  //ホバーしたとき
  $('.work_portfolio').hover(
    function(){
      $('.work p').fadeIn();
      $('.work_portfolio img').css('opacity','0.4')
    },
    function(){
      $('.work p').fadeOut();
      $('.work_portfolio img').css('opacity','1');
    }
  );
  //モーダル
  $('#openModal').click(function () {
    $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function () {
    $('#modalArea').fadeOut();
  });

});

