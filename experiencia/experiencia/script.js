// Obtén el botón de inicio
var startButton = document.querySelector('.start-button');

// Agrega un controlador de eventos para el clic en el botón
startButton.addEventListener('click', function() {
  // Cambia el color de fondo de la página
  document.body.style.backgroundColor = 'black';

  // Cambia la opacidad de la sección de bienvenida
  document.querySelector('.welcome').style.opacity = 0;

  // Espera a que se complete la animación antes de redirigir a la página de experiencia
  setTimeout(function() {
    window.location.href = 'experiencia.html';
  }, 1000); // 1000ms = 1s
});

