$(document).ready(function() {

var watch_video = $('.watch-video'),
		video = $('.video__container'),
		menu = $('.menu'),
		menu_link = menu.find('a'),
		menu_head = $('.menu__head'),
		lets_scroll = $('.lets-scroll'),
		iframe = $('#player')[0];

var iframe = document.getElementById('video');
// $f == Froogaloop
var player = $f(iframe);
//video
watch_video.on('click',function(){
	watch_video.hide();
	lets_scroll.hide();
	video.addClass('is-play');
	player.api('play');
})


//menu
menu_head.on('click',function(){
	menu.toggleClass('is-open');
})
menu_link.on('click', function(){

	var item = $(this).attr('href'),
			item_top = $('.'+item).offset().top;
	$('html, body').animate({scrollTop: item_top}, 900);
	return false;
});


//window scroll
$(window).scroll(function(){

	var glass = $('.glass'),
			content = $('.content'),
			content_height = content.height() - 1000,
			content_top = content.offset().top,
			scroll_top = $(window).scrollTop(),
			point = scroll_top - content_top; 
			glass_top = scroll_top + 120 - content_top,
			koef = 60*(scroll_top-content_top)/content_height;
			koef = koef-30;


		if (scroll_top > content_top) {
			if (koef > 29) {
				glass.removeClass('is-fixed');
				glass.css('top', glass_top);
			}else{
				glass.addClass('is-fixed');
				glass.css({'top': '120px', '-webkit-transform': 'rotate('+koef+'deg)', '-moz-transform': 'rotate('+koef+'deg)', '-o-transform': 'rotate('+koef+'deg)', '-ms-transform': 'rotate('+koef+'deg)'});
			}
		}else{
			glass.removeClass('is-fixed');
		}

	

});

});