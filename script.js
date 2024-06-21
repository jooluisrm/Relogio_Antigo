let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let hElement = document.querySelector('.p_h');
let mElement = document.querySelector('.p_m');


function horaMinutosSegundos() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    digitalElement.innerHTML = `${fixZero(h)}:${fixZero(m)}:${fixZero(s)}`;

    let sDeg = ((360 / 60) * s) - 90;
    let mDeg = ((360 / 60) * m) - 90;
    let hDeg = ((360 / 12) * h) -90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
    if (time < 10) {
        return '0'+time;
    } else {
        return time;
    }
}

setInterval(horaMinutosSegundos, 1000);
horaMinutosSegundos();


