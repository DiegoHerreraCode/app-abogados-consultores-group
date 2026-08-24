// ============================================================
// APP.JS - SITIO WEB DR. Norman Molina- ABOGADO
// Funcionalidades: navegación, carrusel, FAQ, formulario,
// animaciones, y generación dinámica de contenido
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 0. INYECCION DE CONTENIDO ESTATICO DESDE content.js
  // ============================================================
  if (typeof content !== 'undefined') {
    // Navegación
    // El logo ahora es estático en el HTML para evitar bugs de codificación


    const navList = document.getElementById('navList');
    if (navList && content.nav.links) {
      content.nav.links.forEach((link, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.href}" class="nav-link ${index === 0 ? 'active' : ''}">${link.label}</a>`;
        navList.appendChild(li);
      });
    }

    const navCta = document.getElementById('navCta');
    if (navCta) navCta.textContent = content.nav.cta;

    // Hero
    const heroBadge = document.getElementById('heroBadge');
    if (heroBadge) heroBadge.textContent = content.hero.badge;

    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
      heroTitle.innerHTML = content.hero.titulo;
    }
    const heroSection = document.getElementById('hero');
    if (heroSection && content.hero.bgImagen) {
      heroSection.style.backgroundImage = `url('${content.hero.bgImagen}')`;
    }
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitulo;

    const heroCta1 = document.getElementById('heroCta1');
    if (heroCta1) heroCta1.textContent = content.hero.cta;
    const heroCta2 = document.getElementById('heroCta2');
    if (heroCta2) heroCta2.textContent = content.hero.ctaSecundario;

    // Sobre Mí
    const sobreMiTitulo = document.getElementById('sobreMiTitulo');
    if (sobreMiTitulo) sobreMiTitulo.textContent = content.sobreMi.titulo;
    const sobreMiSubtitulo = document.getElementById('sobreMiSubtitulo');
    if (sobreMiSubtitulo) sobreMiSubtitulo.textContent = content.sobreMi.subtitulo;

    const sobreMiImg = document.getElementById('sobreMiImg');
    if (sobreMiImg) sobreMiImg.src = content.sobreMi.imagen;

    const sobreMiNombre = document.getElementById('sobreMiNombre');
    if (sobreMiNombre) sobreMiNombre.textContent = content.sobreMi.nombre;
    const sobreMiCargo = document.getElementById('sobreMiCargo');
    if (sobreMiCargo) sobreMiCargo.textContent = content.sobreMi.cargo;

    const sobreMiDesc = document.getElementById('sobreMiDesc');
    if (sobreMiDesc) {
      sobreMiDesc.innerHTML = content.sobreMi.descripcion.map(p => `<p class="sobre-mi-desc">${p}</p>`).join('');
    }

    const sobreMiValores = document.getElementById('sobreMiValores');
    if (sobreMiValores) {
      sobreMiValores.innerHTML = content.sobreMi.valores.map(v => `
        <div class="valor-item">
          <i class="fas fa-${v.icono}"></i>
          <div>
            <h4>${v.titulo}</h4>
            <p>${v.descripcion}</p>
          </div>
        </div>
      `).join('');
    }

    // Sobre Mí Injections
    const sobreMiTag = document.getElementById('sobreMiTag');
    if (sobreMiTag) sobreMiTag.textContent = content.sobreMi.tag;
    const sobreMiExperienciaNum = document.getElementById('sobreMiExperienciaNum');
    if (sobreMiExperienciaNum) sobreMiExperienciaNum.textContent = content.sobreMi.experienciaNum;
    const sobreMiExperienciaTexto = document.getElementById('sobreMiExperienciaTexto');
    if (sobreMiExperienciaTexto) sobreMiExperienciaTexto.textContent = content.sobreMi.experienciaTexto;

    // Titulos y Subtitulos de Secciones
    if (document.getElementById('areasTag')) document.getElementById('areasTag').textContent = content.areas.tag;
    if (document.getElementById('areasTitulo')) document.getElementById('areasTitulo').textContent = content.areas.titulo;
    if (document.getElementById('areasSubtitulo')) document.getElementById('areasSubtitulo').textContent = content.areas.subtitulo;

    if (document.getElementById('porQueTag')) document.getElementById('porQueTag').textContent = content.porQue.tag;
    if (document.getElementById('porQueTitulo')) document.getElementById('porQueTitulo').textContent = content.porQue.titulo;
    if (document.getElementById('porQueSubtitulo')) document.getElementById('porQueSubtitulo').textContent = content.porQue.subtitulo;

    if (document.getElementById('testimoniosTag')) document.getElementById('testimoniosTag').textContent = content.testimonios.tag;
    if (document.getElementById('testimoniosTitulo')) document.getElementById('testimoniosTitulo').textContent = content.testimonios.titulo;
    if (document.getElementById('testimoniosSubtitulo')) document.getElementById('testimoniosSubtitulo').textContent = content.testimonios.subtitulo;

    if (document.getElementById('faqTag')) document.getElementById('faqTag').textContent = content.faq.tag;
    if (document.getElementById('faqTitulo')) document.getElementById('faqTitulo').textContent = content.faq.titulo;
    if (document.getElementById('faqSubtitulo')) document.getElementById('faqSubtitulo').textContent = content.faq.subtitulo;

    if (document.getElementById('blogTag')) document.getElementById('blogTag').textContent = content.blog.tag;
    if (document.getElementById('blogTitulo')) document.getElementById('blogTitulo').textContent = content.blog.titulo;
    if (document.getElementById('blogSubtitulo')) document.getElementById('blogSubtitulo').textContent = content.blog.subtitulo;

    if (document.getElementById('contactoTag')) document.getElementById('contactoTag').textContent = content.contacto.tag;
    if (document.getElementById('contactoTitulo')) document.getElementById('contactoTitulo').textContent = content.contacto.titulo;
    if (document.getElementById('contactoSubtitulo')) document.getElementById('contactoSubtitulo').textContent = content.contacto.subtitulo;

    // Contacto Form
    if (document.getElementById('contactoFormTitle')) document.getElementById('contactoFormTitle').textContent = content.contacto.consultaGratuita;

    const formLabels = ['nombre', 'email', 'telefono', 'asunto', 'mensaje'];
    formLabels.forEach(field => {
      const lbl = document.getElementById(`lbl${field.charAt(0).toUpperCase() + field.slice(1)}`);
      const input = document.getElementById(field);
      if (lbl && content.contacto.formulario[field]) lbl.textContent = content.contacto.formulario[field].label;
      if (input && content.contacto.formulario[field]) input.placeholder = content.contacto.formulario[field].placeholder;
    });

    if (document.getElementById('contactoSubmitText')) document.getElementById('contactoSubmitText').textContent = content.contacto.formulario.submit;

    // Contacto Info
    const contactoInfoCard = document.getElementById('contactoInfoCard');
    if (contactoInfoCard) {
      contactoInfoCard.innerHTML = `
        <h4>Información de Contacto</h4>
        <div class="contacto-info-item"><i class="fas fa-map-marker-alt"></i><div><strong>Dirección</strong><p>${content.contacto.datos.direccion}</p></div></div>
        <div class="contacto-info-item"><i class="fas fa-phone"></i><div><strong>Teléfonos</strong><p>${content.contacto.datos.telefono}</p></div></div>
        <div class="contacto-info-item"><i class="fas fa-envelope"></i><div><strong>Email</strong><p>${content.contacto.datos.email}</p></div></div>
        <div class="contacto-info-item"><i class="fas fa-clock"></i><div><strong>Horario</strong><p>${content.contacto.datos.horario}</p></div></div>
      `;
    }

    const contactoSocialesIcons = document.getElementById('contactoSocialesIcons');
    if (contactoSocialesIcons) {
      contactoSocialesIcons.innerHTML = Object.entries(content.contacto.sociales).map(([key, data]) => `
        <a href="${data.url}" target="_blank" rel="noopener noreferrer" class="social-icon ${key}" aria-label="${data.label}">
          <i class="fab fa-${key === 'twitter' ? 'x-twitter' : key}${key === 'facebook' ? '-f' : ''}"></i>
        </a>
      `).join('');
    }

    // Footer Injections
    const footerDesc = document.getElementById('footerDesc');
    if (footerDesc) footerDesc.textContent = content.footer.descripcion;

    const footerSociales = document.getElementById('footerSociales');
    if (footerSociales) {
      footerSociales.innerHTML = Object.entries(content.contacto.sociales).map(([key, data]) => `
        <a href="${data.url}" target="_blank" rel="noopener noreferrer" aria-label="${data.label}">
          <i class="fab fa-${key === 'twitter' ? 'x-twitter' : key}${key === 'facebook' ? '-f' : ''}"></i>
        </a>
      `).join('');
    }

    const footerLinksNav = document.getElementById('footerLinksNav');
    if (footerLinksNav) {
      footerLinksNav.innerHTML = `
        <h4>Enlaces Rápidos</h4>
        <ul>
          ${content.nav.links.slice(0, 6).map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
        </ul>
      `;
    }

    const footerLinksServices = document.getElementById('footerLinksServices');
    if (footerLinksServices) {
      footerLinksServices.innerHTML = `
        <h4>Servicios</h4>
        <ul>
          ${content.areas.items.map(area => `<li><a href="#areas">${area.titulo}</a></li>`).join('')}
        </ul>
      `;
    }

    const footerLinksLegal = document.getElementById('footerLinksLegal');
    if (footerLinksLegal) {
      footerLinksLegal.innerHTML = `
        <h4>Legal</h4>
        <ul>
          ${content.footer.enlacesLegales.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
        </ul>
      `;
    }

    const footerCopyright = document.getElementById('footerCopyright');
    if (footerCopyright) footerCopyright.innerHTML = content.footer.copyright;

    // WhatsApp Flotante
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (whatsappFloat) whatsappFloat.href = `https://wa.me/${content.whatsappFlotante.numero}?text=${encodeURIComponent(content.whatsappFlotante.mensaje)}`;
    const whatsappFloatText = document.getElementById('whatsappFloatText');
    if (whatsappFloatText) whatsappFloatText.textContent = content.whatsappFlotante.texto;
  }


  // ============================================================
  // 1. GENERAR CONTENIDO DINÁMICO
  // ============================================================

  // --- ÁREAS DE PRÁCTICA ---
  const areasGrid = document.getElementById('areasGrid');
  if (areasGrid && content && content.areas) {
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
          ${area.caracteristicas.map(c => `<span>${c}</span>`).join('')}
        </div>
      `;
      areasGrid.appendChild(card);
    });
  }

  // --- POR QUÉ ELEGIRNOS ---
  const porQueGrid = document.getElementById('porQueGrid');
  if (porQueGrid && content && content.porQue) {
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

  // --- TESTIMONIOS ---
  const testimoniosTrack = document.getElementById('testimoniosTrack');
  const testimoniosDots = document.getElementById('testimoniosDots');
  let testimonioIndex = 0;
  let testimonioInterval;

  if (testimoniosTrack && content && content.testimonios) {
    content.testimonios.items.forEach((testimonio, i) => {
      const card = document.createElement('div');
      card.className = 'testimonio-card';
      let estrellas = '';
      for (let j = 0; j < testimonio.calificacion; j++) {
        estrellas += '<i class="fas fa-star"></i>';
      }
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
      testimoniosTrack.appendChild(card);

      // Dots
      if (testimoniosDots) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Testimonio ${i + 1}`);
        dot.addEventListener('click', () => goToTestimonio(i));
        testimoniosDots.appendChild(dot);
      }
    });
  }

  // --- FAQ ---
  const faqList = document.getElementById('faqList');
  if (faqList && content && content.faq) {
    content.faq.items.forEach((item, i) => {
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
        // Cerrar todos
        document.querySelectorAll('.faq-item.active').forEach(el => {
          el.classList.remove('active');
          el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        // Abrir si no estaba activo
        if (!isActive) {
          faqItem.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });

      faqList.appendChild(faqItem);
    });
  }

  // --- BLOG ---
  const blogGrid = document.getElementById('blogGrid');
  if (blogGrid && content && content.blog) {
    /*
    content.blog.items.forEach(articulo => {
      const card = document.createElement('div');
      card.className = 'blog-card fade-in';
      card.innerHTML = `
        <div class="blog-card-img">
          <img src="${articulo.imagen}" alt="${articulo.titulo}" loading="lazy">
        </div>
        <div class="blog-card-body">
          <span class="blog-card-categoria">${articulo.categoria}</span>
          <h3>${articulo.titulo}</h3>
          <p>${articulo.extracto}</p>
          <div class="blog-card-footer">
            <span class="blog-card-fecha"><i class="far fa-calendar-alt"></i> ${articulo.fecha}</span>
            <a href="#" class="blog-card-link">Leer más <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      `;
      blogGrid.appendChild(card);
    });
    */

  }

  // ============================================================
  // 2. CARRUSEL DE TESTIMONIOS
  // ============================================================

  function goToTestimonio(index) {
    if (!testimoniosTrack) return;
    const cards = testimoniosTrack.querySelectorAll('.testimonio-card');
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    testimonioIndex = index;
    testimoniosTrack.style.transform = `translateX(-${index * 100}%)`;

    // Actualizar dots
    if (testimoniosDots) {
      testimoniosDots.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
  }

  function nextTestimonio() {
    goToTestimonio(testimonioIndex + 1);
  }

  function prevTestimonio() {
    goToTestimonio(testimonioIndex - 1);
  }

  function startTestimonioAuto() {
    stopTestimonioAuto();
    testimonioInterval = setInterval(nextTestimonio, 5000);
  }

  function stopTestimonioAuto() {
    if (testimonioInterval) {
      clearInterval(testimonioInterval);
      testimonioInterval = null;
    }
  }

  // Botones de navegación del carrusel
  document.querySelector('.testimonio-btn-next')?.addEventListener('click', () => {
    nextTestimonio();
    startTestimonioAuto();
  });

  document.querySelector('.testimonio-btn-prev')?.addEventListener('click', () => {
    prevTestimonio();
    startTestimonioAuto();
  });

  // Pausar al hover
  document.querySelector('.testimonios-carrusel')?.addEventListener('mouseenter', stopTestimonioAuto);
  document.querySelector('.testimonios-carrusel')?.addEventListener('mouseleave', startTestimonioAuto);

  // Iniciar auto-play
  startTestimonioAuto();

  // ============================================================
  // 3. MENÚ HAMBURGUESA
  // ============================================================

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    // Cerrar menú al hacer clic en un link
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ============================================================
  // 4. HEADER SCROLL EFFECT
  // ============================================================

  const header = document.getElementById('header');
  let lastScroll = 0;

  function handleHeaderScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // ============================================================
  // 5. ACTIVE NAV LINK (Intersection Observer)
  // ============================================================

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

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

  // ============================================================
  // 6. FADE-IN ANIMATIONS (Intersection Observer)
  // ============================================================

  const fadeElements = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Opcional: dejar de observar una vez visible
        // fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ============================================================
  // 7. FORMULARIO DE CONTACTO
  // ============================================================

  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validar campos
      const requiredFields = contactForm.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        const formGroup = field.closest('.form-group');
        if (!field.value.trim()) {
          formGroup.classList.add('error');
          isValid = false;
        } else {
          formGroup.classList.remove('error');
        }

        // Validación específica para email
        if (field.type === 'email' && field.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value.trim())) {
            formGroup.classList.add('error');
            isValid = false;
          }
        }

        // Validación específica para teléfono
        if (field.type === 'tel' && field.value.trim()) {
          const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
          if (!phoneRegex.test(field.value.trim())) {
            formGroup.classList.add('error');
            isValid = false;
          }
        }
      });

      // Limpiar errores al escribir
      contactForm.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', () => {
          const formGroup = field.closest('.form-group');
          if (field.value.trim()) {
            formGroup.classList.remove('error');
          }
        });
      });

      if (isValid) {
        const submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        // Enviar a Web3Forms
        const formData = new FormData(contactForm);
        fetch(contactForm.action, {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              formSuccess.classList.add('show');
              contactForm.reset();
              submitBtn.disabled = false;
              submitBtn.innerHTML = '<span>Enviar Mensaje</span><i class="fas fa-paper-plane"></i>';
              setTimeout(() => {
                formSuccess.classList.remove('show');
              }, 5000);
            } else {
              throw new Error('Error al enviar');
            }
          })
          .catch(err => {
            console.error('Error:', err);
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Enviar Mensaje</span><i class="fas fa-paper-plane"></i>';
            alert('Hubo un error al enviar el mensaje. Intenta de nuevo.');
          });
      }
    });
  }

  // ============================================================
  // 8. WHATSAPP FLOTANTE - TEXTO OCULTO/RECORTADO EN MÓVIL
  //     El CSS ya oculta el texto en móviles, pero agregamos
  //     un pequeño efecto de mostrar tooltip al hover
  // ============================================================

  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    // Rastrear clics como evento (analytics placeholder)
    whatsappFloat.addEventListener('click', () => {
      // Podríamos enviar un evento de analytics aquí
      //console.log('WhatsApp click desde botón flotante');
    });
  }

  // ============================================================
  // 9. ACTUALIZAR AÑO EN FOOTER
  // ============================================================

  const yearElements = document.querySelectorAll('.footer-bottom p');
  if (yearElements.length > 0) {
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
      el.textContent = el.textContent.replace(/\d{4}/, currentYear);
    });
  }

  // ============================================================
  // 10. SOPORTE PARA TECLADO (ACCESIBILIDAD)
  // ============================================================

  // FAQ: Enter y Espacio para toggle
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // console.log('✅ Sitio web Dr. Norman Molina- Inicializado correctamente');
});