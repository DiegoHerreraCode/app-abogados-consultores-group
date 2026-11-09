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
  injectLegitimacionArticle();
  injectContactInfo();
  injectFooter();
  injectWhatsAppFloat();
}

/**
 * Inyección de la barra de navegación
 */
function injectNavigation() {
  const navLogo = document.getElementById('navLogo');
  if (navLogo && content.nav?.logo) {
    navLogo.innerHTML = content.nav.logo;
  }

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
  if (heroTitle && content.hero?.titulo) {
    heroTitle.innerHTML = `
      <span class="hero-title-main">${content.hero.titulo}</span>
      <hr class="hero-title-line">
      <span class="hero-title-sub">${content.hero.subtituloHero || ''}</span>
    `;
  }

  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle && content.hero?.subtitulo) {
    heroSubtitle.innerHTML = content.hero.subtitulo;
  }

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
  if (sobreMiDesc) {
    let html = '';

    // 2.1 Bloque PERFIL CORPORATIVO
    if (sm.perfilCorporativo) {
      const pc = sm.perfilCorporativo;
      html += `
        <div class="bloque-perfil-corporativo">
          <h3 class="perfil-corp-titulo">${pc.titulo}</h3>
          ${(pc.parrafos || []).map(p => `<p class="sobre-mi-desc">${p}</p>`).join('')}
          <div class="puntos-clave-firma">
            <h4>${pc.puntosClaveTitulo}</h4>
            <ul class="puntos-clave-lista">
              ${(pc.puntosClave || []).map(pt => `<li><strong>• ${pt.label}:</strong> ${pt.texto}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }

    // CITA DESTACADA (pull quote)
    if (sm.citaDestacada) {
      const cd = sm.citaDestacada;
      html += `
        <div class="cita-destacada-box">
          <blockquote class="pull-quote">${cd.texto}</blockquote>
          <div class="cita-firma-autor">${cd.autor}</div>
          <div class="cita-firma-cargo">${cd.cargo}</div>
        </div>
      `;
    }

    // 2.2 Biografía del Director (Colapsable con botón "Ver más")
    if (sm.biografia) {
      const bio = sm.biografia;
      html += `
        <div class="biografia-collapsible-wrapper">
          <button type="button" class="btn-toggle-biografia" id="btnToggleBiografia" aria-expanded="false">
            <span class="btn-toggle-text">Ver más</span>
            <i class="fas fa-chevron-down"></i>
          </button>
          <div class="bloque-biografia collapsed" id="bloqueBiografia">
            <h3 class="biografia-titulo">${bio.titulo}</h3>
            ${(bio.parrafos || []).map(p => `<p class="sobre-mi-desc">${p}</p>`).join('')}
          </div>
        </div>
      `;
    }

    sobreMiDesc.innerHTML = html;

    // Inicializar evento interactivo del botón "Ver más / Ver menos"
    setupBiografiaToggle();
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
 * Control del botón "Ver más / Ver menos" en la sección de biografía
 */
function setupBiografiaToggle() {
  const btn = document.getElementById('btnToggleBiografia');
  const bloque = document.getElementById('bloqueBiografia');
  if (!btn || !bloque) return;

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      bloque.classList.add('collapsed');
      btn.setAttribute('aria-expanded', 'false');
      btn.querySelector('.btn-toggle-text').textContent = 'Ver más';
      btn.querySelector('i').className = 'fas fa-chevron-down';

      // Scroll suave de regreso al botón para comodidad de lectura
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      bloque.classList.remove('collapsed');
      btn.setAttribute('aria-expanded', 'true');
      btn.querySelector('.btn-toggle-text').textContent = 'Ver menos';
      btn.querySelector('i').className = 'fas fa-chevron-up';
    }
  });
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
 * Inyección de las tarjetas de Áreas de Práctica (Títulos en versalitas, chips en mayúsculas a la izquierda)
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
      <h3 class="area-card-title">${area.titulo}</h3>
      <p>${area.descripcion}</p>
      <div class="area-card-caracteristicas">
        ${(area.caracteristicas || []).map(c => `<span>${c}</span>`).join('')}
      </div>
    `;
    areasGrid.appendChild(card);
  });
}

/**
 * Inyección de las tarjetas de "Por Qué Elegirnos" / Estrategia y Ejecución
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
 * Inyección y lógica del Artículo Interactivo de 4 Ventanas: Legitimación de Capitales
 */
function injectLegitimacionArticle() {
  const container = document.getElementById('articuloLegitimacionContainer');
  if (!container || !content.articuloLegitimacion) return;

  const data = content.articuloLegitimacion;
  const f = data.ficha;

  let tabsNavHtml = '';
  let tabsContentHtml = '';

  data.pestanas.forEach((tab, idx) => {
    const isActive = idx === 0;
    tabsNavHtml += `
      <button class="legit-tab-btn ${isActive ? 'active' : ''}" data-target="${tab.id}">
        ${tab.tituloBoton}
      </button>
    `;

    let puntosHtml = '';
    if (tab.puntos) {
      puntosHtml = `<div class="legit-points-list">` + tab.puntos.map(pt => `
        <div class="legit-point-item">
          <span class="point-bullet">${pt.num}.</span>
          <div class="point-text">
            <strong>${pt.titulo}:</strong> ${pt.texto}
          </div>
        </div>
      `).join('') + `</div>`;
    }

    tabsContentHtml += `
      <div class="legit-tab-pane ${isActive ? 'active' : ''}" id="${tab.id}">
        <h3 class="legit-pane-title">${tab.titulo}</h3>
        <p class="legit-pane-subtitle">${tab.subtitulo}</p>
        
        <blockquote class="legit-pull-quote">
          <i class="fas fa-quote-left"></i>
          <span>${tab.pullQuote}</span>
        </blockquote>

        <p class="legit-pane-intro">${tab.intro}</p>
        ${puntosHtml}
        ${tab.extra ? `<div class="legit-pane-extra">${tab.extra}</div>` : ''}
        ${tab.conclusion ? `
          <div class="legit-conclusion-box">
            <strong>Conclusión del Bloque:</strong> ${tab.conclusion}
          </div>
        ` : ''}
      </div>
    `;
  });

  container.innerHTML = `
    <!-- Ficha de catalogación -->
    <div class="legit-catalog-card">
      <div class="catalog-header">
        <span class="catalog-badge">FICHA DOCTRINAL</span>
        <h3>${f.titulo}</h3>
        <p class="catalog-subtitle">${f.subtitulo}</p>
      </div>
      <div class="catalog-grid">
        <div class="catalog-item">
          <strong>Autor:</strong>
          <span>${f.autor}</span>
        </div>
        <div class="catalog-item">
          <strong>Área Dogmática:</strong>
          <span>${f.areaDogmatica}</span>
        </div>
        <div class="catalog-item">
          <strong>Línea de Investigación:</strong>
          <span>${f.lineaInvestigacion}</span>
        </div>
        <div class="catalog-item">
          <strong>Fecha de Emisión:</strong>
          <span>${f.fechaEmision}</span>
        </div>
      </div>
      <blockquote class="catalog-quote">
        ${f.citaApertura}
      </blockquote>
    </div>

    <!-- Navegación de pestañas (4 ventanas) -->
    <div class="legit-tabs-nav" id="legitTabsNav">
      ${tabsNavHtml}
    </div>

    <!-- Contenido de las pestañas -->
    <div class="legit-tabs-body">
      ${tabsContentHtml}
    </div>

    <!-- Botón de descarga PDF -->
    <div class="legit-download-action">
      <a href="${data.pdfDownloadUrl}" download="dictamen-legitimacion-de-capitales-un-fiasco-legal.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-download-pdf" id="btnDescargarPdfLegit">
        <i class="fas fa-file-pdf"></i>
        <span>Descargar Dictamen Doctrinal Completo en PDF</span>
      </a>
      <p class="pdf-notice-text">El archivo original del dictamen se distribuye bajo estrictos protocolos de fidelidad documental.</p>
    </div>
  `;

  // Event listeners para pestañas
  const tabButtons = container.querySelectorAll('.legit-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      container.querySelectorAll('.legit-tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.legit-tab-pane').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
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
      <h4>Datos de Contacto</h4>
      <div class="contacto-info-item"><i class="fas fa-map-marker-alt"></i><div><strong>Dirección</strong><p>${c.datos.direccion || ''}</p></div></div>
      <div class="contacto-info-item"><i class="fas fa-globe"></i><div><strong>Web</strong><p><a href="https://${c.datos.web || 'www.abogadosconsultores.group'}" target="_blank" rel="noopener noreferrer">${c.datos.web || 'www.abogadosconsultores.group'}</a></p></div></div>
      <div class="contacto-info-item"><i class="fas fa-phone"></i><div><strong>Teléfonos y WhatsApp</strong><p>${c.datos.telefono || ''}</p></div></div>
      <div class="contacto-info-item"><i class="fas fa-envelope"></i><div><strong>Email</strong><p><a href="mailto:${c.datos.email || ''}">${c.datos.email || ''}</a></p></div></div>
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

  const footerBrand = document.querySelector('.footer-brand');
  if (footerBrand) {
    footerBrand.innerHTML = `
      <a href="#hero" class="footer-logo">
        <div style="display: flex; align-items: center; gap: 12px; line-height: 1.2;">
          <img src="/assets/law-firm-logo.svg" alt="LAW FIRM LOGO" style="width: 46px; height: 46px; object-fit: contain; border-radius: 4px;">
          <div>
            <span style="font-variant: small-caps; font-size: 1rem; font-weight: 700; color: var(--color-white); display: block; letter-spacing: 0.5px;">
              ${f.identidadTitulo || 'ABOGADOS CONSULTORES GROUP'}
            </span>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-accent); text-transform: uppercase; display: block; margin-top: 2px; letter-spacing: 1px;">
              BOUTIQUE LEGAL KIBS
            </span>
            <span style="font-size: 0.65rem; color: #94a3b8; letter-spacing: 0.5px; display: block;">
              (KNOWLEDGE INTENSIVE BUSINESS SERVICES)
            </span>
            <span style="font-family: Arial, Helvetica, sans-serif; font-size: 0.7rem; font-weight: 700; color: #cbd5e1; text-transform: uppercase; display: block; margin-top: 4px; letter-spacing: 0.8px;">
              ${f.identidadSubtitulo || 'DIRECCIÓN ESTRATÉGICA CENTRAL'}
            </span>
          </div>
        </div>
      </a>
      <p class="footer-desc" id="footerDesc" style="margin-top: 15px; font-size: 0.88rem; line-height: 1.6; color: #cbd5e1;">
        ${f.descripcion || 'Consultoría estratégica de élite orientada a la protección patrimonial, la estructuración de negocios y la resolución de controversias de alta complejidad.'}
      </p>
      <div class="footer-sociales" id="footerSociales"></div>
    `;
  }

  const footerSociales = document.getElementById('footerSociales');
  if (footerSociales && content.contacto?.sociales) {
    footerSociales.innerHTML = renderSocialIcons(content.contacto.sociales);
  }

  const footerLinksNav = document.getElementById('footerLinksNav');
  if (footerLinksNav && f.enlacesRapidos) {
    footerLinksNav.innerHTML = `
      <h4>Enlaces Rápidos</h4>
      <ul>
        ${f.enlacesRapidos.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
      </ul>
    `;
  }

  const footerLinksServices = document.getElementById('footerLinksServices');
  if (footerLinksServices && f.servicios) {
    footerLinksServices.innerHTML = `
      <h4>Servicios</h4>
      <ul>
        ${f.servicios.map(area => `<li><a href="${area.href}">${area.label}</a></li>`).join('')}
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
  return Object.entries(sociales).map(([key, data]) => {
    let iconClass = key;
    if (key === 'twitter') iconClass = 'x-twitter';
    else if (key === 'facebook') iconClass = 'facebook-f';
    else if (key === 'tiktok') iconClass = 'tiktok';

    return `
      <a href="${data.url}" target="_blank" rel="noopener noreferrer" class="social-icon ${key}" aria-label="${data.label}">
        <i class="fab fa-${iconClass}"></i>
      </a>
    `;
  }).join('');
}

export default initContentInjection;
