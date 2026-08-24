/**
 * Módulo Inyector de Contenido Dinámico
 * @module contentInjector
 */
import { content } from '../content.js';

/**
 * Inyecta todos los textos, imágenes y enlaces estructurados desde content.js en el DOM
 */
export function initContentInjection() {
  if (!content) return;

  injectNavigation();
  injectHero();
  injectSobreMi();
  injectSectionHeaders();
  injectAreas();
  injectPorQue();
  injectContactInfo();
  injectFooter();
  injectWhatsAppFloat();
}

/**
 * Inyección de la barra de navegación
 */
function injectNavigation() {
  const navList = document.getElementById('navList');
  if (navList && content.nav?.links) {
    navList.innerHTML = '';
    content.nav.links.forEach((link, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${link.href}" class="nav-link ${index === 0 ? 'active' : ''}">${link.label}</a>`;
      navList.appendChild(li);
    });
  }

  const navCta = document.getElementById('navCta');
  if (navCta && content.nav?.cta) {
    navCta.textContent = content.nav.cta;
  }
}

/**
 * Inyección de la sección principal (Hero)
 */
function injectHero() {
  const heroBadge = document.getElementById('heroBadge');
  if (heroBadge && content.hero?.badge) heroBadge.textContent = content.hero.badge;

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle && content.hero?.titulo) heroTitle.innerHTML = content.hero.titulo;

  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle && content.hero?.subtitulo) heroSubtitle.textContent = content.hero.subtitulo;

  const heroCta1 = document.getElementById('heroCta1');
  if (heroCta1 && content.hero?.cta) heroCta1.textContent = content.hero.cta;

  const heroCta2 = document.getElementById('heroCta2');
  if (heroCta2 && content.hero?.ctaSecundario) heroCta2.textContent = content.hero.ctaSecundario;

  const heroSection = document.getElementById('hero');
  if (heroSection && content.hero?.bgImagen) {
    heroSection.style.backgroundImage = `url('${content.hero.bgImagen}')`;
  }
}

/**
 * Inyección de la sección "Sobre Mí" / Dirección Estratégica
 */
function injectSobreMi() {
  const sm = content.sobreMi;
  if (!sm) return;

  const sobreMiTag = document.getElementById('sobreMiTag');
  if (sobreMiTag && sm.tag) sobreMiTag.textContent = sm.tag;

  const sobreMiTitulo = document.getElementById('sobreMiTitulo');
  if (sobreMiTitulo && sm.titulo) sobreMiTitulo.textContent = sm.titulo;

  const sobreMiSubtitulo = document.getElementById('sobreMiSubtitulo');
  if (sobreMiSubtitulo && sm.subtitulo) sobreMiSubtitulo.textContent = sm.subtitulo;

  const sobreMiImg = document.getElementById('sobreMiImg');
  if (sobreMiImg && sm.imagen) sobreMiImg.src = sm.imagen;

  const sobreMiNombre = document.getElementById('sobreMiNombre');
  if (sobreMiNombre && sm.nombre) sobreMiNombre.textContent = sm.nombre;

  const sobreMiCargo = document.getElementById('sobreMiCargo');
  if (sobreMiCargo && sm.cargo) sobreMiCargo.textContent = sm.cargo;

  const sobreMiDesc = document.getElementById('sobreMiDesc');
  if (sobreMiDesc && Array.isArray(sm.descripcion)) {
    sobreMiDesc.innerHTML = sm.descripcion.map(p => `<p class="sobre-mi-desc">${p}</p>`).join('');
  }

  const sobreMiValores = document.getElementById('sobreMiValores');
  if (sobreMiValores && Array.isArray(sm.valores)) {
    sobreMiValores.innerHTML = sm.valores.map(v => `
      <div class="valor-item">
        <i class="fas fa-${v.icono}"></i>
        <div>
          <h4>${v.titulo}</h4>
          <p>${v.descripcion}</p>
        </div>
      </div>
    `).join('');
  }

  const sobreMiExperienciaNum = document.getElementById('sobreMiExperienciaNum');
  if (sobreMiExperienciaNum && sm.experienciaNum) sobreMiExperienciaNum.textContent = sm.experienciaNum;

  const sobreMiExperienciaTexto = document.getElementById('sobreMiExperienciaTexto');
  if (sobreMiExperienciaTexto && sm.experienciaTexto) sobreMiExperienciaTexto.textContent = sm.experienciaTexto;
}

/**
 * Inyección de etiquetas, títulos y subtítulos de secciones secundarias
 */
function injectSectionHeaders() {
  const sections = ['areas', 'porQue', 'testimonios', 'faq', 'blog', 'contacto'];

  sections.forEach(secKey => {
    const data = content[secKey];
    if (!data) return;

    const tagEl = document.getElementById(`${secKey}Tag`);
    const titEl = document.getElementById(`${secKey}Titulo`);
    const subEl = document.getElementById(`${secKey}Subtitulo`);

    if (tagEl && data.tag) tagEl.textContent = data.tag;
    if (titEl && data.titulo) titEl.textContent = data.titulo;
    if (subEl && data.subtitulo) subEl.textContent = data.subtitulo;
  });
}

/**
 * Inyección de las tarjetas de Áreas de Práctica
 */
function injectAreas() {
  const areasGrid = document.getElementById('areasGrid');
  if (!areasGrid || !content.areas?.items) return;

  areasGrid.innerHTML = '';
  content.areas.items.forEach(area => {
    const card = document.createElement('div');
    card.className = 'area-card fade-in';
    card.innerHTML = `
      <div class="area-card-icon">
        <i class="fas fa-${area.icono}"></i>
      </div>
      <h3>${area.titulo}</h3>
      <p>${area.descripcion}</p>
      <div class="area-card-caracteristicas">
        ${(area.caracteristicas || []).map(c => `<span>${c}</span>`).join('')}
      </div>
    `;
    areasGrid.appendChild(card);
  });
}

/**
 * Inyección de las tarjetas de "Por Qué Elegirnos"
 */
function injectPorQue() {
  const porQueGrid = document.getElementById('porQueGrid');
  if (!porQueGrid || !content.porQue?.items) return;

  porQueGrid.innerHTML = '';
  content.porQue.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'por-que-card fade-in';
    card.innerHTML = `
      <div class="por-que-card-icon">
        <i class="fas fa-${item.icono}"></i>
      </div>
      <h3>${item.titulo}</h3>
      <p>${item.descripcion}</p>
    `;
    porQueGrid.appendChild(card);
  });
}

/**
 * Inyección de datos e información de la sección de Contacto
 */
function injectContactInfo() {
  const c = content.contacto;
  if (!c) return;

  const formTitle = document.getElementById('contactoFormTitle');
  if (formTitle && c.consultaGratuita) formTitle.textContent = c.consultaGratuita;

  // Labels y Placeholders
  if (c.formulario) {
    ['nombre', 'email', 'telefono', 'asunto', 'mensaje'].forEach(field => {
      const fieldData = c.formulario[field];
      if (!fieldData) return;

      const lbl = document.getElementById(`lbl${field.charAt(0).toUpperCase() + field.slice(1)}`);
      const input = document.getElementById(field);

      if (lbl && fieldData.label) lbl.textContent = fieldData.label;
      if (input && fieldData.placeholder) input.placeholder = fieldData.placeholder;
    });

    const submitText = document.getElementById('contactoSubmitText');
    if (submitText && c.formulario.submit) submitText.textContent = c.formulario.submit;
  }

  // Tarjeta de información directa
  const infoCard = document.getElementById('contactoInfoCard');
  if (infoCard && c.datos) {
    infoCard.innerHTML = `
      <h4>Información de Contacto</h4>
      <div class="contacto-info-item"><i class="fas fa-map-marker-alt"></i><div><strong>Dirección</strong><p>${c.datos.direccion || ''}</p></div></div>
      <div class="contacto-info-item"><i class="fas fa-phone"></i><div><strong>Teléfonos</strong><p>${c.datos.telefono || ''}</p></div></div>
      <div class="contacto-info-item"><i class="fas fa-envelope"></i><div><strong>Email</strong><p>${c.datos.email || ''}</p></div></div>
      <div class="contacto-info-item"><i class="fas fa-clock"></i><div><strong>Horario</strong><p>${c.datos.horario || ''}</p></div></div>
    `;
  }

  // Iconos de redes sociales
  const socialesIcons = document.getElementById('contactoSocialesIcons');
  if (socialesIcons && c.sociales) {
    socialesIcons.innerHTML = renderSocialIcons(c.sociales);
  }
}

/**
 * Inyección del pie de página (Footer)
 */
function injectFooter() {
  const f = content.footer;
  if (!f) return;

  const footerDesc = document.getElementById('footerDesc');
  if (footerDesc && f.descripcion) footerDesc.textContent = f.descripcion;

  const footerSociales = document.getElementById('footerSociales');
  if (footerSociales && content.contacto?.sociales) {
    footerSociales.innerHTML = renderSocialIcons(content.contacto.sociales);
  }

  const footerLinksNav = document.getElementById('footerLinksNav');
  if (footerLinksNav && content.nav?.links) {
    footerLinksNav.innerHTML = `
      <h4>Enlaces Rápidos</h4>
      <ul>
        ${content.nav.links.slice(0, 6).map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
      </ul>
    `;
  }

  const footerLinksServices = document.getElementById('footerLinksServices');
  if (footerLinksServices && content.areas?.items) {
    footerLinksServices.innerHTML = `
      <h4>Servicios</h4>
      <ul>
        ${content.areas.items.map(area => `<li><a href="#areas">${area.titulo}</a></li>`).join('')}
      </ul>
    `;
  }

  const footerLinksLegal = document.getElementById('footerLinksLegal');
  if (footerLinksLegal && f.enlacesLegales) {
    footerLinksLegal.innerHTML = `
      <h4>Legal</h4>
      <ul>
        ${f.enlacesLegales.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
      </ul>
    `;
  }

  const footerCopyright = document.getElementById('footerCopyright');
  if (footerCopyright && f.copyright) footerCopyright.innerHTML = f.copyright;
}

/**
 * Configuración del botón flotante de WhatsApp
 */
function injectWhatsAppFloat() {
  const wa = content.whatsappFlotante;
  if (!wa) return;

  const whatsappFloat = document.getElementById('whatsappFloat');
  if (whatsappFloat) {
    whatsappFloat.href = `https://wa.me/${wa.numero}?text=${encodeURIComponent(wa.mensaje)}`;
  }

  const whatsappFloatText = document.getElementById('whatsappFloatText');
  if (whatsappFloatText && wa.texto) {
    whatsappFloatText.textContent = wa.texto;
  }
}

/**
 * Renderiza el HTML de iconos de redes sociales
 * @param {Object} sociales
 * @returns {string}
 */
function renderSocialIcons(sociales) {
  return Object.entries(sociales).map(([key, data]) => `
    <a href="${data.url}" target="_blank" rel="noopener noreferrer" class="social-icon ${key}" aria-label="${data.label}">
      <i class="fab fa-${key === 'twitter' ? 'x-twitter' : key}${key === 'facebook' ? '-f' : ''}"></i>
    </a>
  `).join('');
}

export default initContentInjection;
