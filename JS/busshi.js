// busshi.js 物資補充担当者用JS

// ハンバーガーメニュー
(function ($) {
	var $nav = $('#navArea');
	var $btn = $('.toggle_btn');
	var $mask = $('#mask');
	var open = 'open'; // class
	// menu open close
	$btn.on('click', function () {
		if (!$nav.hasClass(open)) {
			$nav.addClass(open);
		} else {
			$nav.removeClass(open);
		}
	});
	// mask close
	$mask.on('click', function () {
		$nav.removeClass(open);
	});
})(jQuery);

// コンテンツ表示切替
$(function () {
	let menus = $(".menu"); // 全menuクラスを取得し、変数menusに配列で定義
	console.log(menus);
	$(".menu").on("click", function () {    // menuクリックでイベント発火
		$(".active").removeClass("active"); // activeクラスを消す
		$(this).addClass("active");         // クリックした箇所にactiveクラスを追加
		const index = menus.index(this);    // クリックした箇所がmenuの何番目か判定し、定数indexとして定義
		$(".content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
	})
})

// 校区名の設定
$('#koukuSet').change(function () {
	const koukumei = $('option:selected').val();
	const elem = document.getElementById('koukuName');
	elem.innerText = koukumei;
	document.getElementById("koukuHinan").value = koukumei;
	document.getElementById("koukuBusshi").value = koukumei;
	document.getElementById("koukuChat").value = koukumei;
})

// 空送信できない仕組み
// 参考 https://logic-a.com/2013/05/22/submit_false_on_textbox_text_none/

// 2.物資記録
$(function () {
	$('#sendBusshi').prop("disabled", true);
	$('#formBusshi input:required').change(function () {
		let flag = true;
		$('#formBusshi input:required').each(function (e) {
			if ($('#formBusshi input:required').eq(e).val() === "") {
				flag = false;
			}
		});
		if (flag) {
			$('#sendBusshi').prop("disabled", false);
		} else {
			$('#sendBusshi').prop("disabled", true);
		}
	});
});
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
