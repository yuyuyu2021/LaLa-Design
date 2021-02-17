'use strict';

if (window.matchMedia( "(min-width: 950px)" ).matches) {
    /* ウィンドウサイズが 950px以上の場合のコードをここに */
    var  flag = 0;//------------ラウザの幅が変わった時にリロードする
    var currentWidth = window.innerWidth;
    $(window).resize(function(){
          if (currentWidth == window.innerWidth) {
              return;
          }
          if (flag > 0) {
              clearTimeout(flag);
          }

          flag = setTimeout(function () {
              location.reload();
          }, 200);
    });//------------------------------------------ここまで
$(function(){
	// スクロールの方向　-1の時には左、1の時には右
	let dir = -1;

	// スクロールのインターバル(何秒ごとにスクロールさせるか。3000ミリ秒に設定)
	var interval = 5000;

	// スクロールのスピード（1000ミリ秒に設定）
	var duration = 1500;

	// タイマー用の変数
	var timer;

	// リストの順番を変更（3番目を1番最初にする）
	$("#slide ul").prepend($("#slide li:last-child"));

	// リストの位置を変更（画像1枚分ずらす）
	$("#slide ul").css("left", -900);

	// 5000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
	timer = setInterval(slideTimer, interval);

	// slideTimer()関数
	function slideTimer(){
	  // スクロール方向の判断
	  if(dir == -1){
		// 画像1枚分左へスクロール
		$("#slide ul").animate({"left" : "-=900px"}, duration, function(){
		  // リストの順番を変更
		  $(this).append($("#slide li:first-child"));

		  // リストの位置を変更
		  $(this).css("left", -900);
		});
	  }else{
      clearInterval(timer);
		// 画像1枚分右へスクロール
		$("#slide ul").animate({"left" : "+=900px"}, duration, function(){
		  // リストの順番を変更
		  $(this).prepend($("#slide li:last-child"));

		  // リストの位置を変更
		  $(this).css("left", -900);

		  // 左方向へリセット
		  dir = -1;
		});
	  }
}
// 前へ戻るボタン
$("#prevBtn").click(function(){
  // スクロール方向の切り替え（右）
  dir = 1;

  // タイマーを停止して再スタート
  clearInterval(timer);
  timer = setInterval(slideTimer, interval);

  // 初回の関数実行
  slideTimer();
});

// 次へ進むボタン
$("#nextBtn").click(function(){
  // スクロール方向の切り替え（左）
  dir = -1;

  // タイマーを停止して再スタート
  clearInterval(timer);
  timer = setInterval(slideTimer, interval);

  // 初回の関数実行
  slideTimer();
});

})
}
 else {
  $(function(){
    var  flag = 0;
    var currentWidth = window.innerWidth;
    $(window).resize(function(){
          if (currentWidth == window.innerWidth) {
              return;
          }
          if (flag > 0) {
              clearTimeout(flag);
          }

          flag = setTimeout(function () {
              location.reload();
          }, 200);
    });
    // スクロールの方向　-1の時には左、1の時には右
    let screen = document.getElementById('slide').style.width;
    let screen_px = screen +'px';

    var dir = -1;

    // スクロールのインターバル(何秒ごとにスクロールさせるか。3000ミリ秒に設定)
    var interval = 5000;

    // スクロールのスピード（1000ミリ秒に設定）
    var duration = 1500;

    // タイマー用の変数
    var timer;

    // リストの順番を変更（3番目を1番最初にする）
    $("#slide ul").prepend($("#slide li:last-child"));

    // リストの位置を変更（画像1枚分ずらす）
    $("#slide ul").css("left", "-90vw");

    // 3000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
    timer = setInterval(slideTimer, interval);

    // slideTimer()関数
    function slideTimer(){
      // スクロール方向の判断
      if(dir == -1){
        // 画像1枚分左へスクロール
        $("#slide ul").animate({"left" : "-=90vw"}, duration, function(){
          // リストの順番を変更
          $(this).append($("#slide li:first-child"));

          // リストの位置を変更
          $(this).css("left", "-90vw");

        });
      }else{
        // 画像1枚分右へスクロール
        $("#slide ul").animate({"left" : "+=90vw"}, duration, function(){
          // リストの順番を変更
          $(this).prepend($("#slide li:last-child"));

          // リストの位置を変更
          $(this).css("left", "-90vw");

          // 左方向へリセット
          dir = -1;
        });
      }
    }
    // 前へ戻るボタン
    $("#prevBtn").click(function(){
      // スクロール方向の切り替え（右）
      dir = 1;

      // タイマーを停止して再スタート
      clearInterval(timer);
      timer = setInterval(slideTimer, interval);

      // 初回の関数実行
      slideTimer();
    });

    // 次へ進むボタン
    $("#nextBtn").click(function(){
      // スクロール方向の切り替え（左）
      dir = -1;

      // タイマーを停止して再スタート
      clearInterval(timer);
      timer = setInterval(slideTimer, interval);

      // 初回の関数実行
      slideTimer();
    });
  });
}
