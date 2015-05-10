$(document).ready(function() {

	var slider = $(".bxslider").bxSlider();

	$("#next").click(function(){
		slider.goToNextSlide();
		return false;
	});

	$("#previous").click(function(){
		slider.goToPrevSlide();
		return false;
	});
});