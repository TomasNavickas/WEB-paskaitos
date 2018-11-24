var activesheet = $('.active').attr('href');

$(activesheet).show();

$('.tab').click(function(){
    $('.sheet').hide();
    activesheet = $(this).attr('href');
    $(activesheet).show();

    $('.tab').removeClass('active');
    $(this).addClass('active');
});