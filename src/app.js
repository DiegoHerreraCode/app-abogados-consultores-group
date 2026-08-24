/**
 * ============================================================
 * APP.JS - ABOGADOS CONSULTORES GROUP
 * Orquestador principal de módulos de la aplicación
 * ============================================================
 */
import { initContentInjection } from './modules/contentInjector.js';
import { initNavigation } from './modules/ui/navigation.js';
import { initAnimations } from './modules/ui/animations.js';
import { initTestimonials } from './modules/components/testimonials.js';
import { initFaq } from './modules/components/faq.js';
import { initContactForm } from './modules/components/contactForm.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inyección de contenido desde content.js
  initContentInjection();

  // 2. Interactividad de navegación, menú hamburguesa y scroll
  initNavigation();

  // 3. Animaciones al hacer scroll (fade-in)
  initAnimations();

  // 4. Carrusel de testimonios y autoplay
  initTestimonials();

  // 5. Acordeón de preguntas frecuentes (FAQ)
  initFaq();

  // 6. Validación en tiempo real y envío del formulario de contacto
  initContactForm();
});