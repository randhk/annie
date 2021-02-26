

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

        var subPage = new Array;
        subPage[0] = "sub";
        subPage[1] = "sub";
        var url = location.href;
        var getAr0 = url.indexOf(subPage[0]);
        var getAr1 = url.indexOf(subPage[1]);
        if(getAr0 != -1){
            $(".menu a:eq(1)").addClass("active")
        };
        if(getAr1 != -1){
            $(".menu a:eq(2)").addClass("active")
        };       
    });
});