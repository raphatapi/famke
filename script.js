$(document).ready(function(){
    var famke = new CircleType(document.getElementById('famke'))
    .radius(250);
    $(famke.element).fitText();


    $('.navbar-toggler').click(function(){
        $('.menu').toggleClass('active');
    });
});