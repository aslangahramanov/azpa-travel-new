import { $ } from '../utils/dom.js';
import { clamp, todayISO } from '../utils/helpers.js';
import { MAX_TRAVELERS } from '../config/constants.js';

export function initSearch() {
  const form = $('[data-search-form]');
  if (!form) return;

  // Keçmiş tarixlər seçilməsin
  const dateInput = $('[data-date-input]', form);
  if (dateInput) dateInput.min = todayISO();

  // Səyahətçi sayı
  const stepper = $('[data-stepper]', form);
  if (stepper) {
    const min = Number(stepper.dataset.min) || 1;
    const max = Number(stepper.dataset.max) || MAX_TRAVELERS;
    const valueEl = $('[data-stepper-value]', stepper);
    const minus = $('[data-stepper-minus]', stepper);
    const plus = $('[data-stepper-plus]', stepper);
    const text = $('[data-travelers-text]', form);
    const hidden = $('[data-travelers-input]', form);
    let count = Number(valueEl.textContent) || 2;

    const render = () => {
      valueEl.textContent = count;
      if (text) text.textContent = `${count} nəfər`;
      if (hidden) hidden.value = count;
      minus.disabled = count <= min;
      plus.disabled = count >= max;
    };

    minus.addEventListener('click', () => { count = clamp(count - 1, min, max); render(); });
    plus.addEventListener('click', () => { count = clamp(count + 1, min, max); render(); });
    render();
  }

  // Header-dəki axtarış ikonu → formaya keç
  $('[data-search-toggle]')?.addEventListener('click', () => {
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('select', form)?.focus({ preventScroll: true });
  });

  // Frontend prototipi: backend yoxdur. Form GET ilə
  // tours.html?from=..&to=..&date=..&travelers=.. səhifəsinə yönləndirir;
  // nəticələri sonradan tours.js / filters.js oxuyacaq.
}