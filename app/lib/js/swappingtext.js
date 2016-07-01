// Want to add a line? Just add a row in the table
var subtitles = [
        "Archlinux lover",
        "Long-time sysadmin",
        "Beloved whovian",
        "Open-Source contributor",
        "Marvel fanboy",
        "Privacy warrior",
        "Allons-y!",
        "Trancendances's overlord",
        "Software developper",
        "Proud Cozynaute",
        "What are the round things?",
        "Wonderland seeker",
        "Faders pusher"
    ];

// We need to have this variable global in order for rotateText() to
// work correctly
var i;

function rotateText() {
    if(subtitles[i+1] == undefined) {
        // We're not within the defined rows
        i = 0;
    } else {
        // Go to next row
        i++;
    }
    // Activate the swapping. Note that the current function is called as
    // callback, so a single call can trigger the loop
    swapText(subtitles[i], rotateText);
}

// Call this function to change the line only once, with no loop
function swapText(newText, next) {
    var div = $("#head .subtitle");
    stripLastLetter(div, function() {
        // We tell stripLastLetter() to run textAppear() with the right
        // arguments once the text has been fully erased
        textAppear(div, newText, next);
    });
}

// First, we erase the current text, letter after letter
function stripLastLetter(selector, next) {
    var oldText = selector.text(),
        size = oldText.length;
    selector.text(oldText.substr(0, size - 1));
    if(selector.text().length !== 0) {
        // If there is at least one letter remaining, we run the
        // function again
        window.setTimeout(function() {
            stripLastLetter(selector, next);
        }, 50);
    } else {
        window.setTimeout(next, 500);
    }
}

// Secondly, we make the new text appear, again, letter after letter
function textAppear(selector, newText, next) {
    var oldText = selector.text(),
        size = oldText.length;
    selector.text(newText.substr(0, size+1));
    if(selector.text().length !== newText.length) {
        // If we have at least one letter of the new text not displayed,
        // we run the function again
        window.setTimeout(function() {
            textAppear(selector, newText, next);
        }, 100);
    } else {
        // Else, we keep the new text for one second, then run the whole process
        // again, with another line
        window.setTimeout(next, 1000);
    }
}
