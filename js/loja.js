window.onload = init;

function init() {

  var livros = document.querySelectorAll('.produtos');
  
  for(var i = 0; i < livros.length; i++) {

    var livro         = livros[i];
    livro.onmouseover = livroDestaque;
    livro.onmouseout  = livroNormal;
  }

  function livroNormal() {
    this.querySelector('.tituloLivro').classList.remove('destaqueTituloLivro');
  }

  function livroDestaque() {
    this.querySelector('.tituloLivro').classList.add('destaqueTituloLivro');
  }    
}