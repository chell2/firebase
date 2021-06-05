// index.js 統括本部用JS

// ニュースティッカー
// 参考 https://step-learn.com/article/jquery/020-newsticker.html

var timer;

// newstickerの設定用オブジェクト
ticker = {};
ticker.totalList = 0;   // li要素の数(リスト数)
ticker.numList = 0;     // 現在のリスト番号
ticker.time = 1000;     // アニメーションの秒数
ticker.interval = 4000; // setInterval()の間隔

// load
$(window).on('load', function () {
	ticker.totalList = $('#ul_news li').length;  // リスト数
	ticker.width = $('.tick').css('width');    // 横幅
	ticker.height = $('.tick').css('height');  // 長さ
	var str = $('#ul_news li:first').html();   // a要素
	$('#div_ticker4').html(str);
	timer = setInterval('showNews()', ticker.interval);
});

function showNews() {

	// リストの順番を決める
	ticker.numList++;
	if (ticker.numList > ticker.totalList - 1) {
		ticker.numList = 0;
	}

	var str = $('#ul_news li').eq(ticker.numList).html(); // a要素を取得

	// 下から上  ------------------------------
	$('#div_ticker4 a').animate({ top: '-' + ticker.height }, ticker.time, 'linear', function () {
		$('#div_ticker4').html(str);
		$('#div_ticker4 a').css('top', ticker.height).animate({ top: '0' }, ticker.time, 'linear');
	});
}

// 空送信できない仕組み
// 3.チャット
$(function () {
	$('#sendChat').prop("disabled", true);
	$('#formChat input:required').change(function () {
		let flag = true;
		$('#formChat input:required').each(function (e) {
			if ($('#formChat input:required').eq(e).val() === "") {
				flag = false;
			}
		});
		if (flag) {
			$('#sendChat').prop("disabled", false);
		} else {
			$('#sendChat').prop("disabled", true);
		}
	});
});
