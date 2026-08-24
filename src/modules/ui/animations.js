/**
 * Módulo de Animaciones de Entrada (Scroll Observer)
 * @module ui/animations
 */

/**
 * Inicializa la detección de elementos con la clase .fade-in para animarlos al entrar en viewport
 */
export function initAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length === 0) return;

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => fadeObserver.observe(el));
}

export default initAnimations;
