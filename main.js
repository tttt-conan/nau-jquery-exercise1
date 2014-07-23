
$(document).ready(function(){
	$('.thumbnail').click(function() {

		var cover = $('<div id="cover"></div>');
		$('body').append(cover);

		var pictureUrl = $(this).attr('src');
		var fullImg = $("<img/>");
		var actualWidth;
		var actualHeight;
		fullImg
				.attr('src',pictureUrl)
				.attr('id','fullPic');
		var container = $('<div id="container"></div>');
		var h = Math.round($(window).height() - 40);
		container.css('height',h+"px");
		container.css('width','auto');
		container.css('max-width','60%');
		$('#cover').append(container);
		$('#container').append(fullImg);
		$('#container').append('<span id="caption">This is beautiful</span>');
		$('#container').append('<span id="closeBttn">X</span>');
		h = Math.round($('#fullPic').css('height') + $('#caption').css('height'));
		container.css('height',h+"px");
		$('#cover').fadeIn(800);
	});

	$('body').on('click','#closeBttn',function() {
		$('#fullPic').fadeOut(800);
		$('#cover').empty();
		$('#cover').fadeOut();
	});

	$('body').on('click','#container',function(e) {
		if(e.target.id !== 'fullPic')
		{
			$('#fullPic').fadeOut(800);
			$('#cover').empty();
			$('#cover').fadeOut();
		}
	});

	$(window).on('resize',function(){
		var h = $(this).height() - 30;
		$('#container').css('height',h+"px");
	});

});