

$(window).load(function() { 
        $('.loading').fadeOut(1000); 
});
jQuery(document).ready(function() {
        $("#head").load("https://randhk.github.io/annie/header.html");
        $(".head-sub").load("https://randhk.github.io/annie/header_sub.html");
        $(".hireme").load("https://randhk.github.io/annie/hireMe.html");
        $("#foot").load("https://randhk.github.io/annie/footer.html");

        
        // const elementPosition = $('header').offset();
        // $(window).scroll(function (e) {
        //      e.preventDefault();
        //     if ($(window).scrollTop() > elementPosition.top) { 
        //         $('header').addClass('active');
        //     } else {
        //         $('header').removeClass('active');
        //     }

        // });

        $( window ).scroll( function(e) {
            e.preventDefault();
            if ( $( this ).scrollTop() > 200 ) {
                $( '#back-to-top' ).fadeIn();
            } else {
                $( '#back-to-top' ).fadeOut();
            }
            
            $( '#back-to-top' ).click(function(e){
                e.preventDefault();
                $('html, body').s.animate({ 
                scrollTop: 0 
                }, 500);

            });
        });  

	    var swiper = new Swiper('.swiper-container', {
	      pagination: {
	        el: '.swiper-pagination',
	      },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
        
});