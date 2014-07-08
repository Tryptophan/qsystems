// Slider Functions
var count = $("#slider-images img").size();

var sliderIndex = 1;
var sliderNext = 2;

$(document).ready(function(){
	startSlider();
});

function startSlider() {
	count = $("#slider-images img").size();

	loop = setInterval(function() {

		if(sliderNext > count){
			sliderNext = 1;
			sliderIndex = 1;
		}

		$("#slider-images img").fadeOut();
		$("#slide-" + sliderNext).fadeIn();

		sliderIndex = sliderNext;
		sliderNext = sliderNext + 1;

	}, 6000);
}

// Next / Prev Functions

$("#previous").hover(
	function() {
		if(!$(this).is(':animated')) {
			$(this).animate({ left: 20 });
			$(this).css('cursor','pointer');
		}
	}
	, function() {
		$(this).animate({ left: 30 });
		$(this).css('cursor','pointer');
	}
);

$("#next").hover(
	function() {
		if(!$(this).is(':animated')) {
			$(this).animate({ right: 20 });
			$(this).css("cursor", "pointer");
		}
	}
	, function() {
		$(this).animate({ right: 30 });
		$(this).css("cursor", "pointer");
	}
);

function prev() {
	newSlide = sliderIndex - 1;
	showSlide(newSlide, "left");
}

function next() {
	newSlide = sliderIndex + 1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(id) {
	stopLoop();
	if (id > count) {
		id = 1;
	}

	else if (id < 1) {
		id = count;
	

	$("#slider-images img").fadeOut();
	$("#slide-" + id).fadeIn();

	sliderIndex = id;
	sliderNext = id + 1;
	startSlider();
}

$("#previous").click(function() {
	prev();
});

$("#next").click(function() {
	next();
});

$(".slider-button").hover(
	function() {
		if(!$(this).is(':animated')) {
			$(this).animate({ bottom: 35 })
			$(this).css("cursor", "pointer");
		}
	},
	function() {
		$(this).animate({ bottom: 40 })
		$(this).css("cursor", "pointer");
});
