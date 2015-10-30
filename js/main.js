$(document).ready(loaded);

// When working on the portfolio, use this function to skip the loader
//$(document).ready(skipLoading);

// CSS animation to scroll smoothly between the sections when clicking
// on a link in the navbar
$(document).on("click", "#navbar a", function() {
	$('html, body').animate(
        { 
            scrollTop: $($(this).attr("href")).offset().top - 100
        }
    , 750);
});
