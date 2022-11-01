
var cssVariables = document.querySelector(':root')
var colorButton1 = document.getElementById('color_button1')
var colorButton2 = document.getElementById('color_button2')
var colorButton3 = document.getElementById('color_button3')
var colorButton4 = document.getElementById('color_button4')

colorButton1.addEventListener('click', (evento) => {
    evento.preventDefault()
    document.body.style.backgroundImage = "url('images/background/estrelas.jpg')"
    cssVariables.style.setProperty('--color_card', 'linear-gradient( 180.4deg,  rgba(188,120,236,0.9) -2.2%, rgba(29,133,163,0.9) 83.5% )')
    /*
    cssVariables.style.setProperty('--color1', 'rgb(173, 216, 230, 0.9)')
    cssVariables.style.setProperty('--color2', 'rgb(211, 211, 211, 0.9)')
    cssVariables.style.setProperty('--font_menu', 'menu1')
    cssVariables.style.setProperty('--font_default', 'default1')
    cssVariables.style.setProperty('--font_bio', 'bio1')
    */
    removeActives()
    colorButton1.classList.add("active")
})

colorButton2.addEventListener('click', (evento) => {
    evento.preventDefault()
    document.body.style.backgroundImage = "url('images/background/galaxias.jpg')"
    cssVariables.style.setProperty('--color_card', 'linear-gradient(to top, rgba(211, 211, 211, 0.9), rgba(129, 100, 100, 0.9) )')
    removeActives()
    colorButton2.classList.add("active")
})

colorButton3.addEventListener('click', (evento) => {
    evento.preventDefault()
    document.body.style.backgroundImage = "url('images/background/nebula.jpg')"
    cssVariables.style.setProperty('--color_card', 'linear-gradient( 109.6deg,  rgba(61,245,167,0.85) 11.2%, rgba(9,111,224,0.85) 91.1% )')
    removeActives()
    colorButton3.classList.add("active")
})

colorButton4.addEventListener('click', (evento) => {
    evento.preventDefault();
    document.body.style.backgroundImage = "url('images/background/terra.jpg')"
    cssVariables.style.setProperty('--color_card', 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,0.85) 0.1%, rgba(0,94,120,0.85) 94.2% )')
    removeActives()
    colorButton4.classList.add("active")
})

function removeActives() {
    colorButton1.classList.remove("auto")
    colorButton2.classList.remove("auto")
    colorButton1.classList.remove("active")
    colorButton2.classList.remove("active")
    colorButton3.classList.remove("active")
    colorButton4.classList.remove("active")
}
