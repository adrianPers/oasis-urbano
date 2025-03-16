

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