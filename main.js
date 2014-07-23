
$(document).ready(function(){
	$('.thumbnail').click(function() {
		var cover = $('<div id="cover"></div>');
		$('body').append(cover);

		var pictureUrl = $(this).attr('data-image');
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
		container.addClass('loading');


		fullImg.load(function() {
			$('#container').append($(this));
			$('#container').append('<span id="caption">This is beautiful</span>');
			$('#container').append('<span id="closeBttn">X</span>');
			var h = Math.round($('#fullPic').height() + $('#caption').height());
			$('#container').css('height',h+"px");
			$('#caption').css('margin-left',$('#fullPic').css('margin-left'));
			$('#closeBttn').css('margin-right',$('#fullPic').css('margin-right'));
			$('#container').removeClass('loading');
		});

		$('#cover').append(container);
		$('#cover').fadeIn(800);

	});

	$('body').on('click','#closeBttn',function() {
		$('#fullPic').fadeOut(800);
		$('#cover').empty();
		$('#cover').fadeOut();
	});

	$('body').on('click','#cover',function(e) {
		if(e.target.id !== 'fullPic')
		{
			$('#fullPic').fadeOut(800);
			$('#cover').empty();
			$('#cover').fadeOut();
		}
	});

	$(window).on('resize',function(){

		var h = Math.round($(window).height() - 40);
		$('#container').css('height',h+"px");
		var h = Math.round($('#fullPic').height() + $('#caption').height());
		$('#container').css('height',h+"px");

		$('#caption').css('margin-left',$('#fullPic').css('margin-left'));
		$('#closeBttn').css('margin-right',$('#fullPic').css('margin-right'));
	});


});