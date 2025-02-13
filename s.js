$(document).ready(function () {
    $('.valentines').mouseenter(function () {
        $('.card').stop().animate({
            top: '-120px' // Adjust if needed
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: '5px' // Match the initial CSS position
        }, 'slow');
    });
});