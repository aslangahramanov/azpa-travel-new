import { $, $$ } from '../utils/dom.js';

const STORAGE_KEY = 'azpa-lang';
const LANGS = ['az', 'en', 'ru'];

// Frontend prototipi: seçilmiş dil yadda saxlanır və göstəricilər yenilənir.
// Real tərcümə (az/en/ru məzmun) Django i18n mərhələsində əlavə olunacaq.
export function initLanguage() {
  const options = $$('[data-lang-option]');
  if (!options.length) return;
  const labels = $$('[data-lang-current]');

  const apply = (lang) => {
    labels.forEach((el) => { el.textContent = lang.toUpperCase(); });
    options.forEach((btn) => {
      const active = btn.dataset.langOption === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  };

  let saved = 'az';
  try { saved = localStorage.getItem(STORAGE_KEY) || 'az'; } catch { /* storage bağlıdır */ }
  apply(LANGS.includes(saved) ? saved : 'az');

  options.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.langOption;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* storage bağlıdır */ }
      apply(lang);

      // Dropdown içindədirsə, bağla
      const dropdown = btn.closest('[data-dropdown]');
      if (dropdown) {
        const panel = $('[data-dropdown-panel]', dropdown);
        if (panel) panel.hidden = true;
        $('[data-dropdown-trigger]', dropdown)?.setAttribute('aria-expanded', 'false');
        dropdown.classList.remove('is-open');
      }
    });
  });
}