$(document).ready(function(){

    $('.js--section-features').waypoint(function(direction){
        if(direction == "down")
        {
            $('nav').addClass('sticky');
        }
        else
        {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 900);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500);
    });

    $(function(){
        $('a[href*=#]:not([href=#])').click(function(){
            if (location.pathname.replace(/^\//,'') && location.hostname == this.hostname)
            {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length)
                {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate fadeInUp');
    }, {
        offset: '50%;'
    });

    $('.js--nav-icon').click(function(){

        var icon = $('.js--nav-icon ion-icon');
        var nav = $('.js--main-nav');
 
        nav.slideToggle(200);

        if (icon.attr('name') == 'menu-outline') 
        {
            icon.attr('name', 'close-outline');
        }
        else if (icon.attr('name') == 'close-outline') 
        {
            icon.attr('name', 'menu-outline');
        }

    });
});