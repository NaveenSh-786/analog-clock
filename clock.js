let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
function displayTime(){
    if(!hr||!min||!sec){
        return;
    }
    let date = new Date();
    // getting hour,min and sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotation = 30*hh+mm*0.5+ss*(0.5/60);
    let mRotation = 6*mm+ss*0.1;
    let sRotation = 6*ss;
    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;


}
displayTime();
setInterval(displayTime,1000);