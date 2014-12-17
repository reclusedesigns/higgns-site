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


	/* Window scroll */
	$(window).scroll( function(){

		/* Check the location of each desired element */
		$('.hideme').each( function(i){

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it */
			if( bottom_of_window > bottom_of_object ){

				$(this).animate({'opacity':'1'},400);
			}
		});
	});

});
