$(function(){
	fixMenu();
});

function fixMenu(){
	var menu_place = $('header nav').offset().top;
	var menu = $('header nav');			

	$(window).scroll(function(){

		var scroll_top = $(window).scrollTop(); 
		if (scroll_top > menu_place) {
				menu.addClass("fixed");
			}
		else {
				menu.removeClass("fixed");
			}
	});
}