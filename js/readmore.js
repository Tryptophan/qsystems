function toggleArticle(num) {
	$("#read-more-" + num).click(function() {
		if ($("#article-content-" + num).hasClass("hidden")) {
			$("#article-content-" + num).switchClass("hidden", "expanded", 500);
			$("#read-more-" + num).html("<p>Close</p>");
		}
		else {
			$("#article-content-" + num).switchClass("expanded", "hidden", 500);
			$("#read-more-" + num).html("<p>Read More...</p>");
		}
	});
}

var count = $(".article").size();

for (i = 0; i < count + 1; i++)
	toggleArticle(i);