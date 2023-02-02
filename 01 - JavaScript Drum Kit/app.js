let button = document.querySelector('.keys')


//Here we are adding an event listener to the window to lsiten to any keys pressed
window.addEventListener("keydown", (e)=>{

    //For elements with data IDs, we can pick them out by using the below syntax
    let audioInput = `audio[data-key="${e.keyCode}"]`
    let divInput = `div[data-key="${e.keyCode}"]`

    //using the keyCode of each unique button, we can do a query selector that selects 
    //the element that matches the key we pressed
    const audio = document.querySelector(audioInput)
    const workingDiv = document.querySelector(divInput)

    if(!audio) return;

    //this is to restart the audio when we press it in sucession
    audio.currentTime = 0;
    audio.play()

    //we are adding playing to the classlist so that it can change the apperance for a sec
    workingDiv.classList.add('playing')

})



const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return
    //this.classList.remove('playing')
    console.log(this)
}

/* Here we are collecting all the keys and forEach key, we will add an eventlistener
that listens with the CSS tranisition has ended. 
When the transition has eneded we will remove the playing class so the buttonn can
go back to normal */
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend' , (e)=>{
    if(e.propertyName !== 'transform') return
    key.classList.remove('playing')
}))
