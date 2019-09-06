'use strict';

function changeSocialIconColor() {
	// get src attribute for element
	var src = $(this).attr('src');
	
	// change color to black or white on events
	if (src.indexOf("black") >= 0) {
		$(this).attr('src', src.replace("black", "white"));		
	} else if (src.indexOf("white") >= 0) {
		$(this).attr('src', src.replace("white", "black"));		
	}
}

// social icons
var footerSocialImage = $('footer img.social-icon.img-responsive');
// bind events
footerSocialImage.mouseenter(changeSocialIconColor);
footerSocialImage.mouseleave(changeSocialIconColor);