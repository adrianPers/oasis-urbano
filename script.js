



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

const cards = [...document.getElementsByClassName('cards')]

let contImgs = 0

cards.map((card) => {
    card.style.backgroundImage = `url('../imgs/img-estadia-0${contImgs}.jpg')`
    contImgs++
    if(contImgs == 5 ){
        contImgs = 0
    }
})