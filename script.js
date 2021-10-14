const date = document.querySelector('#date')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
const newYear = '11 Oct 2019'
function countDown(endTime){
    const total = Date.parse(new Date())-Date.parse(endTime);
    let seconds = Math.floor((total/1000)%60);
    let minutes = Math.floor((total/1000/60)%60);
    let hours = Math.floor((total/1000/60/60)%24);
    let dates = Math.floor(total/1000/60/60/24);
    console.log(typeof seconds);
    if (seconds<10){
        seconds = `0${seconds}`
    }
    if (minutes<10){
        minutes = `0${minutes}`
    }
    if (hours<10){
        hours = `0${hours}`
    }
    if (dates<10){
        dates = `0${dates}`
    }
    return{
        dates,
        hours,
        minutes,
        seconds,
        total,
    }
}
setInterval(()=>{
    const count = countDown(newYear)
    date.innerHTML=count.dates
    hour.innerHTML=count.hours
    minute.innerHTML=count.minutes
    second.innerHTML=count.seconds
},1000)