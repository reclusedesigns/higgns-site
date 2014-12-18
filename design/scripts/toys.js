jQuery(document).ready(function($) {

	// smooth scrolling between sections on pages
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); if (target.length) {$('html,body').animate({scrollTop: target.offset().top}, 1000); return false;} } });
	});


	// sticky header
	$(function() {
		$(document).ready( function() {
			$('.sticky').stickUp();
		});
	});

	/* parallax */
	$(window).stellar();


});
