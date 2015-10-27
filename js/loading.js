function loaded() {
	var letter = $("#loading .letter");
	// Finding out the block's inclination angle
	var matrix = letter.css("transform");
	if(matrix !== 'none') {
    	var values = matrix.split('(')[1].split(')')[0].split(',');
	    var a = values[0];
	    var b = values[1];
    	var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
	} else { var angle = 0; }
	var inclination = (angle < 0) ? angle +=360 : angle;
	// Calculating the remaining time
	var time = 1.5-((inclination/360)*1.5)
	// Finishing the current animation, then stopping it
	letter.animate({
		transform: "rotate(360)"
	}, time*1000, function() {
		letter.css("animation", "none");
		letter.css("-webkit-animation", "none");
		displayText();
	});
}

function displayText() {
	var logo = $("#loading .logo");
	var name = $("#loading .name");
	logo.animate({
		width: "410px"
	}, 1500);
	window.setTimeout(function() {
		name.animate({
			opacity: "1"
		}, 2000, function() {
			displayContent();
		});
	}, 500);
}

function displayContent() {
	var loading_screen = $("#loading");
	var sections = $("section");
	loading_screen.fadeOut(600);
	window.setTimeout(function() {
		sections.fadeIn(600);
	}, 600);
}
