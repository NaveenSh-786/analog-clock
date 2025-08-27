let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
function displayTime(){
    let date = new Date();
    // getting hour,min and sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;


}
setInterval(displayTime,1000);