// sketch.js
// by Terry Atkins
// http://www.theodinproject.com/courses/web-development-101/lessons/javascript-and-jquery

$(document).ready(function () {	
	addGrid(resizeDiv());
	colours();
	colourChanger();	
});

// >>>>>>>>>>>> Grid <<<<<<<<<<<

// create number of divs based on number returned from resizeDiv
function addGrid(num) {
	var attach = $('.grid');
	for (var i = 0; i < num; i++){		
		attach.append('<div class="blocks"></div>');
	}
}


// get value from slider
function pixelResized(valueFromSlider) {
	var userDefined = valueFromSlider;
	var changeCss = $(".grid").children();
	changeCss.css({"height" : userDefined,
					"width" : userDefined});
	$(".sliderValue").text(userDefined);
	return userDefined;
}

// create number divs depending on container size
function resizeDiv() {
	var size = $(".grid").width();
	return size * 5.7; 
}

// >>>>>>>>>>>> Colours <<<<<<<<<<<<<<

// change colour on selection
function colourChanger() {
	$("select").change(colours);
}

//set default colour and helper for colourChanger
function colours() {
	var colour = $(".colours").val();
	$(".blocks").hover(function() {
		$(this).css({"background-color" : colour}); 
	});
}

// random the colour
function random() {
	var colourRandom = "#";
	var randomColour = "0123456789ABCDEF";

	for (var i = 6; i > 0; i -= 1 ) {
		var mixup = Math.floor(Math.random() * 17);
		colourRandom += randomColour.charAt(mixup);
		} 		

	$(".blocks").hover(function() {
		$(this).css({"background-color" : colourRandom}); 
	});
}

// fade the tail when cursor is moving
function tail() {
	$(".buttons").on("click", "button", function() {
		
		$(".blocks").hover(function() {
			$(this).fadeOut(200); 
		});
	});	
}

// >>>>>>>>>>> Refresh page <<<<<<<<<<

// refresh on button click
function refresh() {
    location.reload(); 
  }




