const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')



const setDate = () =>{
    const now = new Date()
    const sec = now.getSeconds()
    const secondsDegrees = ((sec/60)*360) +90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`


    //mins
    const mins = now.getMinutes()
    const minDegrees = ((mins/60)*360)+90 
    minHand.style.transform = `rotate(${minDegrees}deg)`
    console.log(mins)

    //hour
    const hour = now.getHours()
    const hourDegrees = ((hour/12)*360)+90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(setDate, 1000)