

const btnMenu = document.getElementById('btn-menu')
const menuLateral = document.getElementById('menu-lateral')
let contMenuLateral = 0

btnMenu.addEventListener('click', () => {
    if (contMenuLateral == 0) {
        menuLateral.style.left = '-100%'
        contMenuLateral++
    } else {
        menuLateral.style.left = '0%'
        contMenuLateral--
    }
})

const slide01 = document.getElementById('slide-01')
const slide02 = document.getElementById('slide-02')
const imgSlide01 = document.querySelector('#slide-01 img')
const imgSlide02 = document.querySelector('#slide-02 img')
const bntsSlider = [...document.querySelectorAll('#box-btns-slider > div')]
let INDICE_SLIDER = 1

bntsSlider.map((el, indice) => {

    el.addEventListener('click', () => {
        INDICE_SLIDER = indice
        slider()
    })

})

setInterval(() => {

    slide01.style.marginLeft = '-50%'

    setTimeout(() => {

        slider()

    }, 1000)

    slide01.style.transition = '1s'

}, 4000)

function slider() {

    slide01.style.transition = '0s'
    slide01.style.marginLeft = '0%'
    imgSlide01.setAttribute('src', `./imgs/nave-0${INDICE_SLIDER}.png`)
    bntsSlider.map((el) => {
        el.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
    })

    bntsSlider[INDICE_SLIDER].style.backgroundColor = 'rgb(116, 199, 222)'
    if (INDICE_SLIDER != 4) {
        imgSlide02.setAttribute('src', `./imgs/nave-0${INDICE_SLIDER + 1}.png`)
        INDICE_SLIDER++
    } else {
        imgSlide02.setAttribute('src', `./imgs/nave-00.png`)
        INDICE_SLIDER = 0
    }

}

