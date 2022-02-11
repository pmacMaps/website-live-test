'use strict';

// change color of social media icons
function changeSocialIconColor() {
	// get src attribute for element
	const src = $(this).attr('src');

	// change color to black or white on events
	if (src.indexOf("black") >= 0) {
		$(this).attr('src', src.replace("black", "white"));
	} else if (src.indexOf("white") >= 0) {
		$(this).attr('src', src.replace("white", "black"));
	}
}

// Make collapsed navigation scroll
function mobileNavScroll() {
	$(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
}

// social icons
var footerSocialImage = $('footer img.social-icon.img-fluid');
// bind events
footerSocialImage.mouseenter(changeSocialIconColor);
footerSocialImage.mouseleave(changeSocialIconColor);


/*** Event Listeners ***/
$(document).ready(function() {
	//mobileNavScroll();
});

$(window).resize(function() {
	//mobileNavScroll();
});