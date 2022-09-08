const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const am_pmEl = document.getElementById("am-pm");

function clock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am_pm = "AM"

    if (h > 12) {
        am_pm = "PM"
    }

    if (h < 10) {
        h = "0" + h
        
    };

    if (m < 10) {
        m = "0" + m
    };
    if (s < 10) {
        s = "0" + s
    };
   

   hourEl.innerHTML = h;
   minuteEl.innerHTML = m;
   secondEl.innerHTML = s;
   am_pmEl.innerHTML = am_pm;
   setTimeout(()=>{
    clock()
   })
}

clock();