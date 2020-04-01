$(document).ready(function(){
    new CircleType(document.getElementById('roumstead'))
    .dir(-1)
    .radius(300);    

    new CircleType(document.getElementById('famke'))
    .radius(350);

    $('.navbar-toggler').click(function(){
        $('.menu').toggleClass('active');
    });

    $(".star").sparkle({
        color: "#ff00ff",
        count: 40,
        overlap: 20,
        speed: 1.2,
        minSize: 2,
        maxSize: 8
    });
});