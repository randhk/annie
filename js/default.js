

$(window).load(function() { 
        $('.loading').fadeOut(1000); 
});
jQuery(document).ready(function() {
        $("#head").load("https://randhk.github.io/annie/header.html");
        $(".head-sub").load("https://randhk.github.io/annie/header_sub.html");
        $(".hireme").load("https://randhk.github.io/annie/hireMe.html");
        $("#foot").load("https://randhk.github.io/annie/footer.html");

	    var swiper = new Swiper('.swiper-container', {
	      pagination: {
	        el: '.swiper-pagination',
	      },
	    });
	    
        $('.tabs-wrap > ul.tabs-top > li > a').on('click', function (event) {
        event.preventDefault();
        $(this).closest('.tabs-wrap').find('.tabs-con').fadeOut();
        var href = $(this).attr('href');
        $(href).fadeIn();
        $('.tabs-wrap > ul.tabs-top > li').removeClass('active');
        $(this).closest('.tabs-wrap').find('.tabs-con').removeClass('show');
        $(this).closest('li').addClass('active');

    });

     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');        
});