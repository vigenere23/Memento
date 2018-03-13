var ready = function() {
	var anchors = document.querySelectorAll("a[href^='#']");
	for (var i = 0; i < anchors.length; i++) {
		anchors[i].addEventListener("click", smoothScroll);
	}
};

var smoothScroll = (e) => {
	var anchor = e.target.getAttribute("href").replace('#', '');
	var target_div = $(document.getElementById(anchor));
	var header = $('header');

	$("html, body").animate({
		scrollTop: target_div.offset().top - header.height()
	}, 300);
	
	e.preventDefault();
};

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
