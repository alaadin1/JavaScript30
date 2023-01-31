let button = document.querySelector('.keys')


window.addEventListener("keydown", (e)=>{
    let audioInput = `audio[data-key="${e.keyCode}"]`
    let divInput = `div[data-key="${e.keyCode}"]`

    const audio = document.querySelector(audioInput)
    const workingDiv = document.querySelector(divInput)

    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    workingDiv.classList.add('playing')

})



const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return
    //this.classList.remove('playing')
    console.log(this)
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend' , (e)=>{
    if(e.propertyName !== 'transform') return
    key.classList.remove('playing')
}))
