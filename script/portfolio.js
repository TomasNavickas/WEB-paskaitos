function gauti(a) {
    var x = document.getElementById(a).value;
    var y = parseInt(x);
    return y;
}

var xx = '';

function gautiATSteksta() {
    if(xx === ''){
        xx = document.getElementById('rezultatas').innerHTML;
    }
    return xx;
}

function result(a) {
    var bendras = xx + " " + a;
    return document.getElementById('rezultatas').innerHTML = bendras;
}

function sudeti() {
    gautiATSteksta();
    var a = gauti('A');
    var b = gauti('B');

    sum = a + b;

    result(sum);
}

function atimti() {
    gautiATSteksta();
    var a = gauti('A');
    var b = gauti('B');

    min = a - b;

    result(min);
}

function dauginti() {
    gautiATSteksta();
    var a = gauti('A');
    var b = gauti('B');

    daug = a * b;

    result(daug);
}

function dalinti() {
    gautiATSteksta();
    var a = gauti('A');
    var b = gauti('B');

    dal = a / b;

    result(dal);
}