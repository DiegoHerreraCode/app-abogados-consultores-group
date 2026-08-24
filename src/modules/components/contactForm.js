/**
 * Componente del Formulario de Contacto
 * @module components/contactForm
 */
import { mostrarNotificacion } from '../ui/toast.js';

/**
 * Inicializa la validación en tiempo real y envío asíncrono del formulario de contacto
 */
export function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  setupLiveValidation(contactForm);
  setupFormSubmission(contactForm);
}

/**
 * Limpia los mensajes de error a medida que el usuario escribe
 */
function setupLiveValidation(form) {
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      const formGroup = field.closest('.form-group');
      if (formGroup && field.value.trim()) {
        formGroup.classList.remove('error');
      }
    });
  });
}

/**
 * Valida los campos del formulario antes de enviar
 * @param {HTMLFormElement} form
 * @returns {boolean} true si el formulario es válido
 */
function validateForm(form) {
  let isValid = true;

  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    const formGroup = field.closest('.form-group');
    const valor = field.value.trim();

    // Campo requerido vacío
    if (!valor) {
      formGroup?.classList.add('error');
      isValid = false;
      return;
    }

    // Validación de correo electrónico
    if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(valor)) {
        formGroup?.classList.add('error');
        isValid = false;
        return;
      }
    }

    // Validación de número de teléfono
    if (field.type === 'tel') {
      const phoneRegex = /^[\d\s\-+()]{7,}$/;
      if (!phoneRegex.test(valor)) {
        formGroup?.classList.add('error');
        isValid = false;
        return;
      }
    }

    formGroup?.classList.remove('error');
  });

  return isValid;
}

/**
 * Gestiona el envío con fetch hacia la API de Web3Forms y emite notificaciones
 */
function setupFormSubmission(form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    const submitBtn = form.querySelector('.btn-submit');
    const originalBtnContent = submitBtn ? submitBtn.innerHTML : '<span>Enviar Mensaje</span>';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    }

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        mostrarNotificacion('¡Consulta enviada con éxito! Nos comunicaremos a la brevedad.', 'success');
        form.reset();
      } else {
        throw new Error(data.message || 'Error al procesar el mensaje.');
      }
    } catch (err) {
      console.error('Error enviando formulario:', err);
      mostrarNotificacion(err.message || 'Hubo un error al enviar tu consulta. Intenta de nuevo.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    }
  });
}

export default initContactForm;
