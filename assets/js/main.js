// Carrossel 1
let images = document.getElementById('images')
let image = document.querySelectorAll('#images img')

let imagemAtual = 0

function carrosselAutomatico() {
  imagemAtual++
  if (imagemAtual > image.length - 1) {
    imagemAtual = 0
  }
  images.style.transform = `translateX(${-imagemAtual * 500}px)`
}

setInterval(carrosselAutomatico, 2500)
// --------------------

// Carrossel 2

let slides = document.querySelectorAll('.slide')
let carrossel = document.getElementById('carrossel')

let left = document.getElementById('left')
let right = document.getElementById('right')

let quantidadeSlides = slides.length
let slideAtual = 0

left.addEventListener("click", () => {
  slideAtual--
  if (slideAtual < 0 ){
    slideAtual = quantidadeSlides - 1
  }
  atualizarCarrossel()
})

right.addEventListener("click", () => {
  slideAtual++
  if (slideAtual > quantidadeSlides - 1) {
    slideAtual = 0
  }
  atualizarCarrossel()
})

function atualizarCarrossel() {
  carrossel.style.transform = `translateX(${-slideAtual * slides[0].offsetWidth}px)`
}


// --------------------