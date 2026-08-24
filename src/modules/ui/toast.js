/**
 * Módulo de Notificaciones Toast Elegantes
 * @module ui/toast
 */

/**
 * Muestra un pop-up elegante de notificación temporal
 * @param {string} mensaje - Texto descriptivo de la notificación
 * @param {'success' | 'error'} [tipo='success'] - Tipo de notificación
 * @param {number} [duracion=2000] - Tiempo en ms antes de auto-remover
 */
export function mostrarNotificacion(mensaje, tipo = 'success', duracion = 2000) {
  // Eliminar toast anterior si existe para evitar solapamientos
  const toastExistente = document.getElementById('custom-toast');
  if (toastExistente) {
    toastExistente.remove();
  }

  const toast = document.createElement('div');
  toast.id = 'custom-toast';
  toast.className = `custom-toast ${tipo}`;

  // Iconos acordes al estado
  const icon = tipo === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';

  toast.innerHTML = `
    <i class="fas ${icon}"></i>
    <span>${mensaje}</span>
  `;

  document.body.appendChild(toast);

  // Animación suave de entrada
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Desvanecer y remover
  setTimeout(() => {
    toast.classList.remove('show');
    // Esperar a que concluya la transición CSS antes de destruir el nodo DOM
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duracion);
}

export default mostrarNotificacion;
