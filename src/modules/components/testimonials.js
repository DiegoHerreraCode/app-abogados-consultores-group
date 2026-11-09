/**
 * Componente de Testimonios y Carrusel de Hitos
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
    // Generar 5 estrellas
    let estrellas = '';
    const rating = testimonio.calificacion || 5;
    for (let j = 0; j < rating; j++) {
      estrellas += '<i class="fas fa-star" style="color: var(--color-accent); margin-right: 2px;"></i>';
    }

    // Crear tarjeta de hito
    const card = document.createElement('div');
    card.className = 'testimonio-card';

    const hitoTipoHtml = testimonio.tipo ? `<span class="hito-tipo-badge" style="display:inline-block; font-size:0.75rem; font-weight:700; letter-spacing:1px; color:var(--color-accent); text-transform:uppercase; margin-bottom:8px;">${testimonio.tipo}</span>` : '';
    const hitoTituloHtml = testimonio.tituloHito ? `<h4 class="hito-titulo" style="font-family:var(--font-heading); font-size:1.25rem; color:var(--color-primary); margin-bottom:12px;">${testimonio.tituloHito}</h4>` : '';
    const hitoLinkHtml = testimonio.link ? `<div style="margin-top:15px;"><a href="${testimonio.link}" class="btn btn-secondary" style="font-size:0.8rem; padding:8px 16px;">${testimonio.linkText || 'Ver Dictamen'} <i class="fas fa-arrow-right" style="margin-left:6px;"></i></a></div>` : '';

    card.innerHTML = `
      <div class="testimonio-content">
        <div class="testimonio-estrellas" style="margin-bottom: 12px;">${estrellas}</div>
        ${hitoTipoHtml}
        ${hitoTituloHtml}
        <p class="testimonio-texto" style="font-style: italic; margin-bottom: 15px;">${testimonio.texto}</p>
        <div class="testimonio-autor" style="margin-top: 10px;">
          <span style="font-weight: 700; color: var(--color-primary); font-size: 0.9rem;">${testimonio.autor || ''}</span>
        </div>
        ${hitoLinkHtml}
      </div>
    `;
    track.appendChild(card);

    // Crear dot indicador
    if (dotsContainer) {
      const dot = document.createElement('button');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Hito ${index + 1}`);
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
    testimoniosDots.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }
}

/**
 * Configura los eventos de los botones anterior y siguiente del carrusel
 */
function setupCarouselControls() {
  const prevBtn = document.querySelector('.testimonio-btn-prev');
  const nextBtn = document.querySelector('.testimonio-btn-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopTestimonioAuto();
      goToTestimonio(testimonioIndex - 1);
      startTestimonioAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopTestimonioAuto();
      goToTestimonio(testimonioIndex + 1);
      startTestimonioAuto();
    });
  }
}

/**
 * Inicia la rotación automática del carrusel cada 6 segundos
 */
function startTestimonioAuto() {
  stopTestimonioAuto();
  testimonioInterval = setInterval(() => {
    goToTestimonio(testimonioIndex + 1);
  }, 6000);
}

/**
 * Detiene la reproducción automática del carrusel
 */
function stopTestimonioAuto() {
  if (testimonioInterval) {
    clearInterval(testimonioInterval);
    testimonioInterval = null;
  }
}

export default initTestimonials;
