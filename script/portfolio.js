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


let klase1 = [
    {vardas: "Jonas", pavarde: "Jonaitis", amzius: 34},
    {vardas: "Petras", pavarde: "Petraitis", amzius: 56},
    {vardas: "Zigmas", pavarde: "Zigmaitis", amzius: 12},
    {vardas: "Ona", pavarde: "Onaityte", amzius: 45},
    {vardas: "Zita", pavarde: "Zitiene", amzius: 65},
    {vardas: "Rita", pavarde: "Rutele", amzius: 21}
];

let klase2 = [
    {vardas: "Jonas", pavarde: "ppp", amzius: 12},
    {vardas: "Petras", pavarde: "ppp", amzius: 12},
    {vardas: "Zigmas", pavarde: "ppp", amzius: 12},
    {vardas: "Ona", pavarde: "ppp", amzius: 12},
    {vardas: "Zita", pavarde: "ppp", amzius: 12},
    {vardas: "Rita", pavarde: "ppp", amzius: 12}
];

let spausdinti = function (kur, ka) {
    kur.innerHTML += ka;
};

function formuotiSarasa(ka) {
    let sarasas = '';
    for (let i = 0; i < ka.length; i++) {
        let asmuo = ka[i];
        sarasas += asmuo.vardas + " " + asmuo.pavarde + " amzius: " + asmuo.amzius + "<br/>";
    }

    return sarasas;
}

let sarasas1 = formuotiSarasa(klase1);
let sarasas2 = formuotiSarasa(klase2);

let kur1 = document.getElementsByClassName('testas')[0];
let kur2 = document.getElementById('testas');

spausdinti(kur1, sarasas1);
spausdinti(kur2, sarasas2);
