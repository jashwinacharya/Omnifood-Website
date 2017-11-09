$(document).ready(function() {
    
    /*Sticky navigation*/
    
    $('.js--section-features').waypoint(function(direction){
        //If we scroll down then the navigation bar should appear
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
        /* Show navigation bar 60px before we go to the next sections */
      offset: '60px'
    });
    
    /*Scrolling*/
    $('.js--scroll-to-plans').click(function(){
        /* Scroll to the plans section within a time frame of 1s or 1000 ms */
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        /* Scroll to the plans section within a time frame of 1s or 1000 ms */
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    $(function(){
           $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                       if (target.length) {
                         $('html,body').animate({
                             scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            }); 
    });
    
    /* Animations */
    $('.js--wp-1').waypoint(function(direction){
        /* Include animate class and the kind of animation we want */
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        /* Include animate class and the kind of animation we want */
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        /* Include animate class and the kind of animation we want */
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        /* Include animate class and the kind of animation we want */
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%'
    });
    
    $('.js--nav-icon').click(function(){
        /* Open the navigation bar when we click on the icon */
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        /* When we open our navigation bar, change the symbol of the nav bar to a X */
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');     
            icon.removeClass('ion-navicon-round');
        }
        else{
            icon.addClass('ion-navicon-round');     
            icon.removeClass('ion-close-round');
        }
        
    });
    
});