const endDate = document.getElementById('endDate');
const time = document.querySelectorAll('.time');
endDate.textContent = "30 June 2025 00:00:00";

function clock(){
    const end = new Date(endDate.textContent);
    const now = new Date();
    const dif = (end - now)/1000;
    if(dif <= 0) return;
    time[0].textContent = Math.floor(dif/3600/24);
    time[1].textContent = Math.floor(dif/3600)%24;
    time[2].textContent = Math.floor(dif/60)%60;
    time[3].textContent = Math.floor(dif)%60;
}

setInterval(()=>{
    clock()
},1000)