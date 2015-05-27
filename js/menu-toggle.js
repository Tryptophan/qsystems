$('.menu-toggle').click(function() {
	if ($('.tab-container').css('display') == 'none') {
		$('.tab-container').slideDown();
	}
	else {
		$('.tab-container').slideUp();
	}
});