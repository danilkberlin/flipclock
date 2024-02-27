
const textTime = document.getElementById('flip-time');
// data teim 

const update = () =>{

    const data = new Date();
    const h = data.getHours();
    const m = data.getMinutes();
    const s = data.getSeconds();

    const clockStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    textTime.innerHTML = `${clockStr}`

    setTimeout(update, 1000)
}



update();