//para desaparecer el nav


window.addEventListener('scroll', function() {
  var bottomMenu = document.querySelector('.bottom-menu');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 100) { // Ajusta este valor según tus necesidades
    bottomMenu.classList.add('show');
  } else {
    bottomMenu.classList.remove('show');
  }
});


// // para desaparecer todo el contenido

// function detectarDispositivo() {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//   const contenidoPrincipal = document.querySelector('.container');
//   const contenidoPrincipal_2 = document.querySelector('.bottom-menu');
//   const avisoDesktop = document.querySelector('.desktop-warning');

//   if (isMobile) {
//     contenidoPrincipal.style.display = 'block';
//     contenidoPrincipal_2.style.display = 'block';
//     avisoDesktop.style.display = 'none';
//   } else {
//     contenidoPrincipal.style.display = 'none';
//     contenidoPrincipal_2.style.display = 'none';
//     avisoDesktop.style.display = 'flex';
//   }
// }

// window.addEventListener('load', detectarDispositivo);
// window.addEventListener('resize', detectarDispositivo);



//Para que el desplazamiento tenga efecto

const cajas = document.querySelectorAll('.caja_dos');

window.addEventListener('scroll', () => {
  cajas.forEach(caja => {
    const cajaTop = caja.getBoundingClientRect().top + window.scrollY;
    const cajaHeight = caja.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight / 2;

    if (scrollPosition >= cajaTop &&
        scrollPosition < cajaTop + cajaHeight) {
      caja.classList.add('visible');
    } else {
      caja.classList.remove('visible');
    }
  });
});