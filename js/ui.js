'use strict';

var footerSocialImage = $('footer img.social-icon.img-responsive');

footerSocialImage.mouseover(function() {
	var src = $(this).attr('src');
	console.log(src);
	// test if black is icon
	// if it is, make it regular
	// if it is not, make it black image
});