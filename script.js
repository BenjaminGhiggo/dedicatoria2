// Script para generar corazones aleatorios en la pantalla
document.addEventListener("DOMContentLoaded", function () {
    // Ajusta la cantidad de corazones según tus preferencias
    const numCorazones = 30;
  
    for (let i = 0; i < numCorazones; i++) {
      // Crear el elemento div para el corazón
      const corazon = document.createElement("div");
      corazon.classList.add("corazon");
      corazon.textContent = "❤️";
  
      // Posición horizontal aleatoria (entre 0% y 100%)
      const left = Math.floor(Math.random() * 101);
      corazon.style.left = left + "%";
  
      // Tamaño de fuente aleatorio (entre 20px y 40px)
      const size = Math.floor(Math.random() * 21) + 20;
      corazon.style.fontSize = size + "px";
  
      // Duración de la caída (entre 5s y 15s)
      const fallDuration = (Math.random() * 10 + 5).toFixed(2);
  
      // Duración del "shake" (entre 1s y 3s)
      const shakeDuration = (Math.random() * 2 + 1).toFixed(2);
  
      // Asignar duración a la animación: la primera corresponde a "corazones-fall", la segunda a "corazones-shake"
      corazon.style.animationDuration = `${fallDuration}s, ${shakeDuration}s`;
  
      // Agregar el corazón al body
      document.body.appendChild(corazon);
    }
  
    /*
     * Script para cambiar de sección cuando se hace click en
     * la opción del sidebar (Menú, Video, Fotos).
     */
    const links = document.querySelectorAll(".sidebar ul li a");
    const sections = document.querySelectorAll(".section");
  
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Obtener la sección objetivo
        const sectionId = link.getAttribute("data-section");
  
        // Quitar la clase "active" de todas las secciones
        sections.forEach((sec) => sec.classList.remove("active"));
  
        // Agregar la clase "active" solo a la sección seleccionada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          targetSection.classList.add("active");
        }
      });
    });
  });
  