$(document).ready(function(){
    new CircleType(document.getElementById('roumstead'))
    .dir(-1)
    .radius(300);    

    new CircleType(document.getElementById('famke'))
    .radius(300);

    $('.navbar-toggler').click(function(){
        $('.menu').toggleClass('active');
    });
});