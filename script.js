$(document).ready(function(){
    new CircleType(document.getElementById('roumstead'))
    .dir(-1)
    .radius(300);    

    new CircleType(document.getElementById('famke'))
    .radius(350);

    $('.navbar-toggler').on('click', function(){
        $('.menu').toggleClass('active').show();
    });
    // Close after clicking on a li
    $('.menu-link').on('click', function(event){
        event.preventDefault;
        $('.menu').hide();
    });

    $(".star").sparkle({
        color: "#ff00ff",
        count: 40,
        overlap: 20,
        speed: 1.2,
        minSize: 2,
        maxSize: 8
    });

    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));
    
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    
    });
});