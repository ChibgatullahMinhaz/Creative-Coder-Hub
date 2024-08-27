const reset = document.getElementById('reset');
const start = document.getElementById('start');
const timer = document.getElementById('timer');

let active = false;
let [ss, mm, hh] = [0, 0, 0];
let interval;

let formattedHh;
let formattedSs;
let formattedMm;

const watchTime = () => {
    ss++
    if (ss > 59) {
        ss = 0;
        mm++;
        if (mm > 59) {
            mm = 0;
            hh++;
        }
    }
    formattedSs = String(ss).padStart(2, '0');
    formattedMm = String(mm).padStart(2, '0');
    formattedHh = String(hh).padStart(2, '0');
    timer.textContent = `${formattedHh}:${formattedMm}:${formattedSs}`; 

}

const startWatch = ()=>{
    start.addEventListener('click', () => {
        active = active ? false : true
        if (active === true) {
            start.textContent = 'Stop';
            start.classList.add('active')
            interval = setInterval(watchTime,100)
        } else {
            console.log('false')
            start.textContent = 'Start'
            start.classList.remove('active')
            clearInterval(interval)
    
        }

    })

}

const ResetWatch = ()=>{
    reset.addEventListener('click',()=>{
        clearInterval(interval)
        timer.innerText = '00:00:00';
        if(active){
            start.textContent = 'Start';
            start.classList.remove('active')
            startWatch()
        }
    })
    
}

function init (){
    startWatch()
    ResetWatch()
}
init()