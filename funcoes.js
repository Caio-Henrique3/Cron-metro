var seg = 0;
var min = 0;
var hora = 0;

var cron
var tempo = 1000;

function inicio() {
    cron = setInterval ( () => { timer(); }, tempo);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    
    clearInterval(cron);
     seg = 0;
     min = 0;
     hora = 0;

    document.getElementById('counter').innerText = '00 : 00 : 00';
}

function timer() {
    seg++;
    if(seg == 60) {
        seg = 0;
        min++;
    }

    if(min == 60) {
        min = 0;
        hora++;
    }

    var format = (hora < 10 ?'0' + hora : hora)  + ' : ' + (min < 10 ? '0' + min : min) + ' : ' + (seg < 10 ? '0' + seg : seg);
    document.getElementById('counter').innerText = format;
}