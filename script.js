

const btnMenu = document.getElementById('btn-menu')
const menuLateral = document.getElementById('menu-lateral')
let contMenuLateral = 1
const linhasBtnMenu = [...document.querySelectorAll('#btn-menu > div')]

btnMenu.addEventListener('click', () => {

    animacaoBtnMenu(contMenuLateral)

    if (!contMenuLateral) {
        menuLateral.style.left = '-100%'
        contMenuLateral++
    } else {
        menuLateral.style.left = '0%'
        contMenuLateral--
    }
})

function animacaoBtnMenu(indice){

    linhasBtnMenu.map((el) => {
        el.style.width = '85%'
        el.style.marginLeft = `${15 * indice}%`
    })

    linhasBtnMenu[0].style.transform = `rotate(${40 * indice}deg)`
    linhasBtnMenu[1].style.width = `${80 * (indice ? 0 : 1)}%`
    linhasBtnMenu[2].style.transform = `rotate(-${40 * indice}deg)`


}

const slide01 = document.getElementById('slide-01')
const bntsSlider = [...document.querySelectorAll('#box-btns-slider > div')]

let INDICE_SLIDER = 1

bntsSlider.map((el, indece) => {

    el.addEventListener('click', ()=>{
        INDICE_SLIDER = indece
        bntsSlider.map((el) => {
            el.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
        })
        el.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        slider()
    })

})

function slider(){

    slide01.style.marginLeft = `-${20 * INDICE_SLIDER}%`
    bntsSlider.map((el) => {
        el.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
    })
    bntsSlider[INDICE_SLIDER].style.backgroundColor = 'rgba(255, 255, 255, 1)'

    INDICE_SLIDER++
    
    if(INDICE_SLIDER == 5){
        INDICE_SLIDER = 0
    }


}

setInterval(slider, 3000)