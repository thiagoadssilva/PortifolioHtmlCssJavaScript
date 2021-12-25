// Jquery que vai pegar o evento de rolagem da tela e quando esse evento for acionado vai adicionar uma classe que vai colocar um background no HEADER
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
  })
})

/** Evento do click do menu quando mobile */
let menuBtn = document.querySelector('.menu-btn')
let itemsMenu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
  itemsMenu.classList.toggle('active')
  console.log('entrou')
})
