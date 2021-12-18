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
