const mapa01 = L.map('mapa-01').setView([-23.527184352552528, -46.83139348981616], 14)

const estiloMapa01 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

estiloMapa01.addTo(mapa01)


const mapa02 = L.map('mapa-02').setView([-23.527184352552528, -46.83139348981616], 14)

const estiloMapa02 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})



estiloMapa02.addTo(mapa02)

let ponto = L.marker([-23.527184352552528, -46.83139348981616])
ponto.bindPopup('Minha casa')
ponto.addTo(mapa01);


const btnMapa = document.querySelector('#box-endereco button')
const btnFecharMapa = document.querySelector('#header-mapa-01 button')
const boxMapa = document.getElementById('box-exibir-mapa')

btnFecharMapa.addEventListener('click', ()=> {

    boxMapa.style.zIndex = '-1'
    

})

btnMapa.addEventListener('click', ()=> {

    boxMapa.style.zIndex = '2'

})