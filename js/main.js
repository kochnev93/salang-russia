$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots: true
    });

    $('.header__burger').click(function(event){
		$('.header__burger').toggleClass('active');
		$('body').toggleClass('block');
	});
});
