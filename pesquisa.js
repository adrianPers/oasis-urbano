
const btnFiltros = document.getElementById('btn-filtros')
const boxFiltros = document.getElementById('box-filtros')
const btnFecharFiltros = document.getElementById('btn-fechar-filtros')
const headerBoxFiltros = document.getElementById('header-box-filtros')
const boxFiltrosSelecionados = document.getElementById('box-filtros-selecionados')
const foorterBoxFiltros = document.getElementById('footer-box-filtros')
import Hotel from "./Hotel.js"


btnFiltros.addEventListener('click', abrirAbaFiltros)
btnFecharFiltros.addEventListener('click', fecharAbaFiltros)

function fecharAbaFiltros(){

    boxFiltros.style.left = '-100%'
    headerBoxFiltros.style.left = '-100%'
    foorterBoxFiltros.style.left = '-100%'

}


function abrirAbaFiltros(){

    boxFiltros.style.left = '0%'
    headerBoxFiltros.style.left = '0%'
    foorterBoxFiltros.style.left = '0%'
    
}

const bntsFiltroAvaliacao = [...document.querySelectorAll('.f-avaliacao > button')]

bntsFiltroAvaliacao.map((el) => {
    el.addEventListener('click', () => {

        el.classList.toggle('destaque')
        el.classList.toggle('btns-avaliacao')
        adicionarNaListaDeFiltros(el.innerHTML)
        
    })
})

const btnsFiltroComodiade = [...document.querySelectorAll('.f-comodidades > button')]

btnsFiltroComodiade.map((el) => {
    el.addEventListener('click', () => {

        el.classList.toggle('destaque')
        adicionarNaListaDeFiltros(el.children[1].innerHTML)
        
    })
})

function adicionarNaListaDeFiltros(filtro){

    if([...boxFiltrosSelecionados.children].some((el) => {
        return el.innerHTML == filtro
    })){

        boxFiltrosSelecionados.removeChild(
            [...boxFiltrosSelecionados.children].find((el) => {
                if(el.innerHTML == filtro){
                    return el
                }
            })
        )

    } else {
        let spanFiltro = document.createElement('span')
        spanFiltro.innerHTML = filtro
        spanFiltro.classList.toggle('destaque')
        boxFiltrosSelecionados.appendChild(spanFiltro)
    }

}

const inputsFiltros = [...document.getElementsByClassName('inputs-filtros')]

inputsFiltros.map((el) => {
    el.addEventListener('change', () => {
    
        adicionarNaListaDeFiltros(document.querySelector(`label[for=${el.id}]`).innerHTML)

    })

})

const btnLimparFiltros = document.querySelector('#box-filtros-selecionados  > button')

btnLimparFiltros.addEventListener('click', ()=> {
    [...boxFiltrosSelecionados.children].map((el) => {
        if(el.innerHTML != 'Limpar'){
            boxFiltrosSelecionados.removeChild(el)
        }
    })

    inputsFiltros.map((el) => {
        el.checked = false
    })

    btnsFiltroComodiade.map((el) => {
        el.classList.remove('destaque')
    })

    bntsFiltroAvaliacao.map((el) => {
        el.classList.remove('destaque')
        el.classList.remove('btns-avaliacao')

    })
})

const btnPesquisaFiltro = document.querySelector('.f-pesquisa img')

btnPesquisaFiltro.addEventListener('click', () => {

    let inputPesquisa = btnPesquisaFiltro.previousElementSibling

    if(inputPesquisa.value != ''){
        let spanFiltro  = document.createElement('span')
        spanFiltro.innerHTML = inputPesquisa.value
        spanFiltro.classList.add('destaque')
        spanFiltro.classList.add('nome-hotel')
        boxFiltrosSelecionados.appendChild(spanFiltro)
        inputPesquisa.value = ''
    }
})

// console.log(`'${bntsFiltroAvaliacao[0].innerHTML}'`)
const ranges = document.querySelectorAll('.f-preco input[type=range]')
const inputPrecos = document.querySelectorAll('.f-preco input[type=number]')

setInterval(() => {
    inputPrecos[0].value = ranges[0].value 
    inputPrecos[1].value = ranges[1].value 
}, 50)

const btnAplicarFiltro = document.querySelector('#footer-box-filtros')
const boxResultado = document.getElementById('box-resultados')

btnAplicarFiltro.addEventListener('click', pesquisar)

function pesquisar(){

    fecharAbaFiltros()

    const cidades = searchCheckedes('.f-cidades')
    const acessibiliade = searchCheckedes('.f-acessibilidade')
    const hoteis = searchClass('nome-hotel')
    const avaliacoes = searchClass('btns-avaliacao').map((el) => {
        return Number(el.substring(2, 3))
    })

    console.log(acessibiliade[0] == undefined)



    const preco = [Number(ranges[0].value), Number(ranges[1].value)];
    
        [...boxResultado.children].map((el) => {
        if(el.classList.value == 'resultado'){
            boxResultado.removeChild(el)
        }
        })

        const boxCarregar = document.createElement('div')
        boxCarregar.setAttribute('id', 'carregando')

        boxResultado.appendChild(boxCarregar)

        setTimeout(()=> {

            boxResultado.removeChild(boxCarregar)
        for(let i = 0; i < 10; i++){

            
            let hotel = new Hotel(hoteis, cidades, avaliacoes, acessibiliade, preco )
    
            boxResultado.appendChild(hotel.divHotel)
    
        }

    }, 2000)
    
    


}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function searchCheckedes(classe){
   const checkeds =  [
        ...document.querySelectorAll(`${classe} input:checked`)
    ].map((el) => {
        return el.nextElementSibling.innerHTML  
    })



    return (checkeds[0] != undefined ? checkeds : 
        [...document.querySelectorAll(`${classe} label`)].map((el) => {
        return el.innerHTML
    }))



}

function searchClass(classe){

    const itens= [
        ...document.getElementsByClassName(classe)
    ].map((el) => {
        return el.innerHTML
    })
    return itens
}

console.log(numeroAleatorio(
    Number(ranges[0].value), Number(ranges[1].value)
))


console.log(typeof(inputPrecos[0].value))

export  default numeroAleatorio
