var current = "";
var a;

function scroll(Id) {
	if(current === "") {
		current = $("#head");
	}
	var section = $('#'+Id);
	if(current.attr('id') != section.attr('id') && Id != 'cv') {
		section.fadeIn();
		current.fadeOut();
		current = section;
	}
	$('html, body').animate( { scrollTop: $('#top').offset().top }, 750 );
}

$(document).on('click', '#navbar li', function(e) {
	scroll($(this).attr('class'));
});