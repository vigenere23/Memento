// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

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
