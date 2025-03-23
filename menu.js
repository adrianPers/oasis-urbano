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