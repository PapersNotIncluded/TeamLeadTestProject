const timerElement = document.querySelector('.connection__price__timer')

let startTime = Date.now()
const timerMaxMinutes = 30

if(localStorage.getItem('firstVisit')){
    startTime = parseFloat(localStorage.getItem('firstVisit')) 
}
else{
    localStorage.setItem('firstVisit', `${startTime}`)
}

setInterval(()=>{
    const curTime = Date.now()
    const timeInSeconds = timerMaxMinutes * 60 - parseInt((curTime - startTime)/1000)
    if(timeInSeconds <= 0){
        return timerElement.innerHTML = 'Время акции истекло'
    }
    const minutes = parseInt(timeInSeconds / 60)
    const seconds = timeInSeconds - minutes * 60

    let minutesStr = `${minutes}`.length === 2 ? `${minutes}` : `0${minutes}`
    let secondsStr = `${seconds}`.length === 2 ? `${seconds}` : `0${seconds}`

    timerElement.innerHTML = `00:${minutesStr}:${secondsStr}`
}, 50)
