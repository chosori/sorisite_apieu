(function($){
     // .top_btn ====================================
    var topBtn    = $('.top_btn');
    var bannerBox = $('#bannerBox').offset().top;
    // console.log(bannerBox);
    $(window).on('scroll', function(){
        var scroll_top = $(this).scrollTop();
        console.log(scroll_top);
        if(scroll_top >= 500){
            topBtn.fadeIn();

        }else{
            topBtn.fadeOut();
        }
    });

    })(this.jQuery);