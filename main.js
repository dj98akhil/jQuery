$(document).ready(function() {

    $("button").addClass('btn btn-primary');

    $("button#b1").click(function() {
        $('body').removeClass('light');
        $('#para').removeClass('fonts1');
        $('#card-body').addClass('dark');
        $('#para').addClass('text-white');
        $('#para').addClass('fonts2');
        $('body').addClass('dark');
        $('h1').css('color', 'black');

    });


    $("button#b5").click(function() {
        $('#para').removeClass('text-white', 'fonts2');

        $('#card-body').removeClass('dark');
        $('#para').addClass('fonts1');
        $('body').addClass('light');
    })
    $("button#b4").click(function() {
        flag = !flag;
        (flag) ? $('#card-body').show(): $('#card-body').hide();
    });


});