/* pego a div que vou animar */
let el = document.getElementById('cartinha')

/* pego a altura e largura do meu elementinho */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Novo evento pro meu cursorzinho
  * colocando a function 'handleMove'
  * em mousemove
  */
el.addEventListener('mousemove', handleMove)



/* Definir function a */
function handleMove(e) {
  /*
    * pegar a posição do mouse em relação ao elementozinho (div cartinha)
    * On mouseover
    */
  
  const xVal = e.layerX
  const yVal = e.layerY
  
  /*
    * Calculo DOIDO de rotação do eixo Y
    * O multiplicador 20 é para controlar a rotação
    */
  const yRotation = 20 * ((xVal - width / 2) / width)
  
  /* Calculo DOIDO de rotação do eixo X */
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})