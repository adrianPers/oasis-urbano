// console.log(window.screen.width)
const btns = [...document.querySelectorAll('.box-btns-galeria > button')]
const itens01 = [...document.getElementsByClassName('itens-01')]
const arrayIndices = []
const arrayParmsDemo = [2, 3, 2, 1]

btns.map((el, indice) => {

    let indiceGaleria = Math.floor(indice / 2)
    if (indice % 2) {
        arrayIndices.push(0)
    }

    el.addEventListener('click', () => {

        let numItens = el.parentElement.nextElementSibling.children.length
        let limite = (numItens / (window.screen.width > 480 ? arrayParmsDemo[indiceGaleria] : 1)) - 1

        galeria(
            indice % 2,
            indiceGaleria,
            arrayParmsDemo[indiceGaleria],
            numItens,
            limite
        )
    })
})

function galeria(direcao, indiceGaleria, itensDemo, numItens, limite) {

    let parmMargin = (100 / numItens) * (window.screen.width > 480 ? itensDemo : 1)

    if (direcao) {

        if (arrayIndices[indiceGaleria] != limite) {
            arrayIndices[indiceGaleria]++
            itens01[indiceGaleria].style.marginLeft = `-${parmMargin * (arrayIndices[indiceGaleria])}%`
        }
    } else {
        if (arrayIndices[indiceGaleria] != 0) {
            arrayIndices[indiceGaleria]--
            itens01[indiceGaleria].style.marginLeft = `-${parmMargin * (arrayIndices[indiceGaleria])}%`
        }
    }
}
