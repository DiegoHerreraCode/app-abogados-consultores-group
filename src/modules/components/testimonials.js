/**
 * Componente de Testimonios y Carrusel
 * @module components/testimonials
 */
import { content } from '../../content.js';

let testimonioIndex = 0;
let testimonioInterval = null;

/**
 * Inicializa el carrusel de testimonios y sus controles
 */
export function initTestimonials() {
  const testimoniosTrack = document.getElementById('testimoniosTrack');
  const testimoniosDots = document.getElementById('testimoniosDots');

  if (!testimoniosTrack || !content?.testimonios?.items) return;

  renderTestimonials(testimoniosTrack, testimoniosDots);
  setupCarouselControls();
  startTestimonioAuto();
}

/**
 * Renderiza dinámicamente las tarjetas de testimonios y los puntos indicadores (dots)
 */
function renderTestimonials(track, dotsContainer) {
  track.innerHTML = '';
  if (dotsContainer) dotsContainer.innerHTML = '';

  content.testimonios.items.forEach((testimonio, index) => {
    // Generar estrellas de calificación
    let estrellas = '';
    for (let j = 0; j < (testimonio.calificacion || 5); j++) {
      estrellas += '<i class="fas fa-star"></i>';
    }

    // Crear tarjeta de testimonio
    const card = document.createElement('div');
    card.className = 'testimonio-card';
    card.innerHTML = `
      <div class="testimonio-content">
        <div class="testimonio-estrellas">${estrellas}</div>
        <p class="testimonio-texto">"${testimonio.texto}"</p>
        <div class="testimonio-autor">
          <strong>${testimonio.nombre}</strong>
          <span>${testimonio.cargo}</span>
        </div>
      </div>
    `;
    track.appendChild(card);

    // Crear dot indicador
    if (dotsContainer) {
      const dot = document.createElement('button');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Testimonio ${index + 1}`);
      dot.addEventListener('click', () => goToTestimonio(index));
      dotsContainer.appendChild(dot);
    }
  });
}

/**
 * Desplaza el carrusel al testimonio especificado por índice
 * @param {number} index - Índice destino
 */
export function goToTestimonio(index) {
  const testimoniosTrack = document.getElementById('testimoniosTrack');
  const testimoniosDots = document.getElementById('testimoniosDots');
  if (!testimoniosTrack) return;

  const cards = testimoniosTrack.querySelectorAll('.testimonio-card');
  if (cards.length === 0) return;

  if (index < 0) index = cards.length - 1;
  if (index >= cards.length) index = 0;

  testimonioIndex = index;
  testimoniosTrack.style.transform = `translateX(-${index * 100}%)`;

  if (testimoniosDots) {
    testimoniosDots.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
}

export function nextTestimonio() {
  goToTestimonio(testimonioIndex + 1);
}

export function prevTestimonio() {
  goToTestimonio(testimonioIndex - 1);
}

export function startTestimonioAuto() {
  stopTestimonioAuto();
  testimonioInterval = setInterval(nextTestimonio, 5000);
}

export function stopTestimonioAuto() {
  if (testimonioInterval) {
    clearInterval(testimonioInterval);
    testimonioInterval = null;
  }
}

/**
 * Asigna los eventos a los botones de navegación y pausa en hover
 */
function setupCarouselControls() {
  document.querySelector('.testimonio-btn-next')?.addEventListener('click', () => {
    nextTestimonio();
    startTestimonioAuto();
  });

  document.querySelector('.testimonio-btn-prev')?.addEventListener('click', () => {
    prevTestimonio();
    startTestimonioAuto();
  });

  const carrusel = document.querySelector('.testimonios-carrusel');
  carrusel?.addEventListener('mouseenter', stopTestimonioAuto);
  carrusel?.addEventListener('mouseleave', startTestimonioAuto);
}

export default initTestimonials;
