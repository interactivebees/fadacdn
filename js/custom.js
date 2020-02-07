// Set the date we're counting down to
var countDownDate = new Date("Feb 07, 2020 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("countdown-timer").innerHTML = "<ul><li>" + days + "<span>Days</span></li><li>" + hours + "<span>Hours</span></li><li>" + minutes + "<span>Minutes</span></li><li>" + seconds + "<span>Seconds</span></li>";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "<ul><li>00<span>Days</span></li><li>00<span>Hours</span></li><li>00<span>Minutes</span></li><li>00<span>Seconds</span></li></ul>";
    }
}, 1000);
$(document).ready(function(){
    $('.carousel ul').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.tabs-list ul li').click(function(){
        var dataId = $(this).attr('data-id');
        $('.tabs-list ul li').removeClass('active');
        $(this).addClass('active');
        $('.tabs-content').slideUp();
        $('#' + dataId).slideDown();
    })
    $('.tabs-head-desc').click(function(){
        if($(this).hasClass('active')) {
            $(this).toggleClass('active');
            $(this).next().slideUp();
        }
        else {
            $('.tabs-head-desc').removeClass('active');
            $('.tabs-body').slideUp();
            $(this).toggleClass('active');
            $(this).next().slideDown();
        }
    });
    $('.about-slider ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });
    $('.sponsor-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    autoplay: false,
                    adaptiveHeight: true,
                }
            }
        ]
    });
    $('.speakers-list ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    autoplay: true,
                    adaptiveHeight: true,
                }
            }
        ]
    });
    
    // $(".our-speakers .right ol").mCustomScrollbar({
    //     scrollButtons:{enable:true},
    //     theme:"light-thick",
    //     scrollbarPosition:"outside"
    // });

    $('.sponsors-list ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    });
    
    $('.dealer-link > img').on('click', function(e){
        // $('.weather-link').removeClass('active');
        // $('.twitter-count-weather').removeClass('active');
        $('.dealer-link').toggleClass('active');
        $('.dealer').toggleClass('active');
    });
    $('.weather-link > img').on('click', function(e){
        // $('.dealer-link').removeClass('active');
        // $('.dealer').removeClass('active');
        $('.weather-link').toggleClass('active');
        $('.twitter-count-weather').toggleClass('active');
    });
    $('.video .play').click(function(){
        // alert();
        $(this).fadeOut();
        $(this).parent('.desc').next('iframe').addClass('show');
    });
    $('.video ul li > img').click(function(){
        // alert();
        $(this).next('.desc').find('.play').fadeOut();
        $(this).parent('li').find('iframe').addClass('show');
    });
    $('.resp-menu').click(function(){
        $(this).toggleClass('close');
        $('.navigation').toggleClass('menu-show');
    });
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.navigation a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('current');
        })
        $(this).addClass('current');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navigation ul li a').removeClass("current");
            currLink.addClass("current");
        }
        else{
            currLink.removeClass("current");
        }
    });
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 90){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
})