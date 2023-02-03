let controls = document.querySelectorAll('.controls input')

function handleChangeEvent() {
    //were going to take our value and update our spacing
    let suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    //console.log(this.dataset.sizing)

    //console.log(this.value)
}

controls.forEach( (control) =>{
    control.addEventListener('change', handleChangeEvent)
})

controls.forEach( (control) =>{
    control.addEventListener('mousemove', handleChangeEvent)
})