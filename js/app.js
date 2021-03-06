$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			250,
			function() {
				$(this).hide();
				$(this).css('left', '-174px');
			}
		);
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	//keydown event start
	$(this).keydown(function(event){
		if(event.which == 88){
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();		
		}
	})
	$(this).keyup(function(event){
		if(event.which == 88){
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	})
	//keydown event end
});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}