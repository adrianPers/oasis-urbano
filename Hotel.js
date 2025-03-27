
import numeroAleatorio from "./pesquisa.js"

class Hotel {

    constructor(hoteis, cidades, avaliacoes, acessibilidade, preco) {

        this.avaliacao = (avaliacoes[0] != undefined ? avaliacoes[numeroAleatorio(0, avaliacoes.length - 1)] : numeroAleatorio(1, 5))
        this.divHotel = document.createElement('div')
        this.divHotel.classList.add('resultado')

        this.imgHotel = document.createElement('img')
        this.imgHotel.setAttribute('src', './imgs/fundo-ofertas.jpg')

        this.divTextoHotel = document.createElement('div')

        this.arrayNomesHotel = [
            'Casa Blanca', 'Hotel MyHouse',
            'Pousada da Maria', 'Hotel Niterói',
            'Casa Verde'
        ]


        this.h3NomeHotel = document.createElement('h3')
        this.local = document.createElement('p')
        this.h3Preco = document.createElement('h3')

        this.h3NomeHotel.innerHTML = (
            hoteis[0] != undefined ? hoteis[numeroAleatorio(0, hoteis.length - 1)] :
                this.arrayNomesHotel[numeroAleatorio(0, this.arrayNomesHotel.length - 1)]
        )
        this.local.innerHTML = cidades[numeroAleatorio(0, cidades.length - 1)]
        this.h3Preco.innerHTML = numeroAleatorio(preco[0], preco[1])

        this.divAvaliacao = document.createElement('span')

        this.divEstrelas = document.createElement('span')
        this.divEstrelas.classList.add('estrelas')
        this.i = 0

        for (this.l; this.i < 5; this.i++) {
            this.divEstrelas.innerHTML += (this.i < this.avaliacao ? '&#9733;' : '&#9734;')
        }

        this.divAvaliacao.appendChild(this.divEstrelas)

        this.divAvaliacao.innerHTML += `(${numeroAleatorio(500, 1000)})`

        this.divTags = document.createElement('div')
        this.divTags.classList.add('box-tags')

        this.arrayIndiceTags = []
        this.indiceTag = numeroAleatorio(0, 5)
        this.arrayIndiceTags.push(this.indiceTag)
        this.i = 0

        for (this.i; this.i < 2; this.i++) {

            while (this.arrayIndiceTags.some((el) => {
                return el == this.indiceTag
            })) {
                this.indiceTag = numeroAleatorio(0, 5)
            }

            this.arrayIndiceTags.push(this.indiceTag)

        }

        this.arrayIndiceTags.map((el) => {
            this.spanTag = document.createElement('span')
            this.spanTag.innerHTML = acessibilidade[el]
            this.divTags.appendChild(this.spanTag)
        })

        this.divTextoHotel.appendChild(this.h3NomeHotel)
        this.divTextoHotel.appendChild(this.local)
        this.divTextoHotel.appendChild(this.h3Preco)
        this.divTextoHotel.appendChild(this.divAvaliacao)
        this.divTextoHotel.appendChild(this.divTags)

        this.divHotel.appendChild(this.imgHotel)
        this.divHotel.appendChild(this.divTextoHotel)
        
    }

}

export default Hotel

