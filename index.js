const hourEl = document.getElementById("hour");
const minsEl = document.getElementById("minute");
const secEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");


function updateClock(){
h = new Date().getHours();
m = new Date().getMinutes();
s = new Date().getSeconds();
let ampm = "PM";



if (h > 12) {
    h = h -12;
    ampm = "AM";
}




hourEl.innerText = h;
minsEl.innerText = m;
secEl.innerText = s;
ampmEl, (innerText = ampm);


setTimeout(()=>{
    updateClock()
}, 1000)

}


updateClock();
