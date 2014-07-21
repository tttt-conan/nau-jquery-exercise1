
$(document).ready(function(){
	$('.thumbnail').click(function() {
		var id = $(this)[0].id;
		var src = $(this)[0].src;
		$('#cover').html("<img src='pic1.jpg'/>");
		$('#cover').fadeIn(800);
	});
});