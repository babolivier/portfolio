//$(document).ready(loaded);

$(document).on("click", "#navbar a", function() {
	$('html, body').animate( { scrollTop: $($(this).attr("href")).offset().top-100 }, 750 );
});
