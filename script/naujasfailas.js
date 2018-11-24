let el = document.getElementById('elementas');
let pav = document.getElementById('foto');


el.style.color = "#00000";
el.style.backgroundColor = "blue";
el.style.fontSize = "60px";

pa.src = "/img/logo/logo.png";

while (true) {
    el.color += 1;
}

var state = false;

var foto = document.getElementById('lempute');

function lempute() {
    if (state) {
        foto.src = "img/logo/logo.png";
    } else {
        foto.src = "img/logo/kaunas-02.png";
    }

    state = !state;
}

$('.lempute').click(funtion(){
    $(this).src = 'img/logo/kaunas-02.png'
});



$(document).ready(function () {
    $("#lempute").click(function () {
        $(this).src = "img/logo/logo.png";
    });
    $("#lempute").click(function () {
        $(this).src = "mg/logo/kaunas-02.png";
    });
});


$(document).ready(function () {


    // $(".lempute").click(function () {
    //     $(this).attr('src', 'pic_bulbon.gif');
    // });


    var state = false;

    $('.lempute').click(function() {
        if (state) {
            $(".lempute").click(function () {
                $(this).attr('src', 'pic_bulbon.gif');
            });
        } else {
            $(".lempute").click(function () {
                $(this).attr('src', 'pic_bulbff.gif');
            });
        }

        state = !state;
    });

});







$(document).ready(function() {

    $('.cont').click(funtion(){

    });


});



$(function () {

    $('.item').hide();

    $('.pagination').click(function () {
        $('.item').show();
    });

    $('.light_bulb').click(function () {
        $(this).attr('src', 'pic_bulbon.gif');
    });

    var state = false;

    function lempute() {
        if (state) {
            $('.lempute').click(function () {
                $(this).attr('src', 'pic_bulbon.gif');
            });
        } else {
            $('.lempute').click(function () {
                $(this).attr('src', 'pic_bulbon.gif');
            });
        }

        state = !state;
    }

});
















