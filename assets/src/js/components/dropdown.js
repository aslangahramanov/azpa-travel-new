import { $, $$ } from '../utils/dom.js';

// <div data-dropdown>
//   <button data-dropdown-trigger> ... </button>
//   <div data-dropdown-panel hidden> ... </div>
// </div>
export function initDropdowns() {
  const dropdowns = $$('[data-dropdown]');
  if (!dropdowns.length) return;

  const setOpen = (dropdown, open) => {
    const trigger = $('[data-dropdown-trigger]', dropdown);
    const panel = $('[data-dropdown-panel]', dropdown);
    if (!trigger || !panel) return;
    panel.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
    dropdown.classList.toggle('is-open', open);
  };

  dropdowns.forEach((dropdown) => {
    const trigger = $('[data-dropdown-trigger]', dropdown);
    const panel = $('[data-dropdown-panel]', dropdown);
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const willOpen = panel.hidden;
      dropdowns.forEach((d) => setOpen(d, false));
      setOpen(dropdown, willOpen);
    });
  });

  document.addEventListener('click', (e) => {
    dropdowns.forEach((d) => {
      if (!d.contains(e.target)) setOpen(d, false);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dropdowns.forEach((d) => setOpen(d, false));
  });
}