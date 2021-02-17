

//------------------------contact.htmlの入力確認用コード
function check(){
    if (message_form.your_name.value === ""|| message_form.your_email.value === "" || message_form.your_message.value === ""){
        document.getElementById('check').textContent ='<必須項目を入力してください>';
        return false;
} else {
    document.getElementById('check').textContent ='<こちらの内容を送信してよろしいですか？>';
    // const bottun = document.getElementById('confirm-bottun').send.value;
    return false;
}
}

//---------------------------works.htmlのjQuery--Magnific popupのコード
//https://dimsemenov.com/plugins/magnific-popup/
$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});
});

