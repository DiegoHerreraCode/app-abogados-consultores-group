/**
 * Componente de Preguntas Frecuentes (FAQ / Acordeón)
 * @module components/faq
 */
import { content } from '../../content.js';

/**
 * Inicializa el renderizado y comportamiento de acordeón para las FAQ
 */
export function initFaq() {
  const faqList = document.getElementById('faqList');
  if (!faqList || !content?.faq?.items) return;

  faqList.innerHTML = '';

  content.faq.items.forEach(item => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
      <button class="faq-question" aria-expanded="false">
        <span>${item.pregunta}</span>
        <i class="fas fa-plus"></i>
      </button>
      <div class="faq-answer">
        <p>${item.respuesta}</p>
      </div>
    `;

    const btn = faqItem.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = faqItem.classList.contains('active');

      // Cerrar cualquier otro item que esté abierto
      document.querySelectorAll('.faq-item.active').forEach(el => {
        if (el !== faqItem) {
          el.classList.remove('active');
          el.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        }
      });

      // Alternar estado del item actual
      if (!isActive) {
        faqItem.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        faqItem.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    faqList.appendChild(faqItem);
  });
}

export default initFaq;
