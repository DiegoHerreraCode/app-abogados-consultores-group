/**
 * Módulo de Navegación, Header y Accesibilidad
 * @module ui/navigation
 */

/**
 * Inicializa los controles de navegación, menú móvil, scroll del header y accesibilidad
 */
export function initNavigation() {
  initHamburgerMenu();
  initHeaderScroll();
  initActiveNavLink();
  initKeyboardAccessibility();
  initFooterYear();
}

/**
 * Control del menú hamburguesa en dispositivos móviles
 */
function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Cerrar menú al hacer clic en un enlace de navegación
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Efecto de fondo y sombra en el header al hacer scroll
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Scroll-spy para resaltar el enlace activo en la barra de navegación
 */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/**
 * Soporte de accesibilidad para interactuar con teclado (Enter y Espacio)
 */
function initKeyboardAccessibility() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}

/**
 * Mantiene actualizado el año en el copyright del pie de página
 */
function initFooterYear() {
  const yearElements = document.querySelectorAll('.footer-bottom p');
  if (yearElements.length > 0) {
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
      el.textContent = el.textContent.replace(/\d{4}/, currentYear);
    });
  }
}

export default initNavigation;
