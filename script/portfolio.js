function gauti(a) {
    var x = document.getElementById(a).value;
    var y = parseInt(x);
    return y;
}

var xx = '';

function gautiATSteksta() {
    if (xx === '') {
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


var Ernestas = {vardas: 'Ernestas', pavarde: 'Vaitkevicius', amzius: '21'};
var TomasR = {vardas: 'Tomas', pavarde: 'Radzevicius', amzius: '22'};
var Mantautas = {vardas: 'Mantautas', pavarde: 'everbickas', amzius: '23'};
var Lina = {vardas: 'Lina', pavarde: 'Sukauskaite', amzius: '24'};
var Mantas = {vardas: 'Mantas', pavarde: 'Sasnauskas', amzius: '25'};
var Eimantas = {vardas: 'Eimantas', pavarde: 'Svelnys', amzius: '26'};
var as = {vardas: 'Tomas', pavarde: 'Navickas', amzius: '27'};

var grupe = [Ernestas, TomasR, Mantautas, Lina, Mantas, Eimantas, as];

function isvestis(ka, ikur) {
    var kur = document.getElementsByClassName("grupe")[0];
    for (var i = 0; i < grupe.length; i++) {
        asmuo = grupe[i];
        kur.innerHTML += asmuo.vardas + " " + asmuo.pavarde + " " + asmuo.amzius + "<br/>";
    }
}

isvestis(grupe, "grupe");