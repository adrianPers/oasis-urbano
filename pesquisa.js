{/*
const btnPesquisa = document.getElementById('btn-pesquisa')
const boxPesquisa = document.getElementById('box-resultado')

btnPesquisa.addEventListener('click', () => {

    boxPesquisa.style.display = 'flex'

    let card

    for(let i = 0; i <= 5; i++){
        card = new Card
        boxPesquisa.appendChild(card.divCard)
    }


})

class Card{

    constructor(){

        this.divCard = document.createElement('div')
        this.divCard.classList.add('resultado')

        this.imgCard = document.createElement('img')
        this.imgCard.setAttribute('src', './imgs/fundo-ofertas.jpg')

        this.divInfoCard = document.createElement('div')
        this.divInfoCard.classList.add('box-texto-ofertas')

        this.divCard.appendChild(this.imgCard)
        this.divCard.appendChild(this.divInfoCard)

        this.local = document.createElement('p')
        this.local.innerHTML = "local"
        this.divInfoCard.appendChild(this.local)
        
        this.hotel = document.createElement('h3')
        this.hotel.innerHTML = "hotel"
        this.divInfoCard.appendChild(this.hotel)

        this.avaliacoes = document.createElement('h4')

        this.nota = document.createElement('span')      
        this.nota.classList.add('nota')        
        this.nota.innerHTML = '9.3'
        
        this.stars= document.createElement('span')        
        this.stars.classList.add('stars')
        this.stars.innerHTML = `

            &#9733; &#9733;
            &#9733; &#9733;
            &#9734;

        `
        this.avaliacoes.appendChild(this.nota)
        this.avaliacoes.appendChild(this.stars)
        this.avaliacoes.innerHTML += '(734)'

        this.divInfoCard.appendChild(this.avaliacoes)

        this.valor = document.createElement('h3')
        this.valor.innerHTML = 'R$ 400  - '

        this.valorAntigo = document.createElement('span')
        this.valorAntigo.innerHTML = ' R$ 625 '

        this.valor.appendChild(this.valorAntigo)
        this.divInfoCard.appendChild(this.valor)
    
        this.diaria = document.createElement('p')
        this.diaria.innerHTML = 'por diaria'

        this.divInfoCard.appendChild(this.diaria)

        this.desconto = document.createElement('span')
        this.desconto.innerHTML = '20% de desconto'
        this.desconto.classList.add('desconto')

        this.divInfoCard.appendChild(this.desconto)
    }

} */}

{/* <div class="box-texto-ofertas">

<p>local</p>
<h3>Nome do hotel</h3>

<h4>
    <span class="nota">9.5</span>
    <span class="stars">
    &#9733; &#9733; &#9733; &#9733; &#9734;                                        
</span>
(243)
</h4>

<h3>R$ 400 -  <span>R$ 625</span> </h3>
<p>por diária</p>

<span class="desconto">20% de desconto</span>
</div> */}

const btnFiltros = document.getElementById('btn-filtros')
const boxFiltros = document.getElementById('box-filtros')
const btnFecharFiltros = document.getElementById('btn-fechar-filtros')


btnFiltros.addEventListener('click', () => {

    boxFiltros.style.left = '0%'

})



btnFecharFiltros.addEventListener('click', () => {

    boxFiltros.style.left = '-100%'

})