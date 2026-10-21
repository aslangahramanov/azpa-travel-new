import { $, $$ } from '../utils/dom.js';
import { BREAKPOINT_NAV, SCROLL_OFFSET } from '../config/constants.js';

export function initNavigation() {
  const header = $('[data-header]');
  const nav = $('[data-nav]');
  const toggle = $('[data-nav-toggle]');
  const overlay = $('[data-nav-overlay]');
  if (!header || !nav || !toggle) return;

  // ----- Scroll zamanı header fonu -----
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > SCROLL_OFFSET);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ----- Nav dropdown-lar (Ölkələr, Viza müraciəti, Turlar) -----
  const items = $$('[data-nav-dropdown]', nav);
  const hoverMQ = window.matchMedia(`(min-width: ${BREAKPOINT_NAV}px) and (hover: hover)`);

  const setItem = (item, open) => {
    item.classList.toggle('is-open', open);
    $('[data-nav-dropdown-trigger]', item)?.setAttribute('aria-expanded', String(open));
  };
  const closeItems = (except = null) => items.forEach((i) => i !== except && setItem(i, false));

  items.forEach((item) => {
    const trigger = $('[data-nav-dropdown-trigger]', item);
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      // Desktop-da siçanla klik: hover artıq açıb, bağlamasın (klaviatura üçün e.detail === 0)
      if (hoverMQ.matches && e.detail > 0) {
        closeItems(item);
        setItem(item, true);
        return;
      }
      const willOpen = !item.classList.contains('is-open');
      closeItems(item);
      setItem(item, willOpen);
    });

    item.addEventListener('mouseenter', () => {
      if (!hoverMQ.matches) return;
      closeItems(item);
      setItem(item, true);
    });
    item.addEventListener('mouseleave', () => {
      if (hoverMQ.matches) setItem(item, false);
    });
    item.addEventListener('focusout', (e) => {
      if (hoverMQ.matches && !item.contains(e.relatedTarget)) setItem(item, false);
    });
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) closeItems();
  });

  // ----- Mobil menyu -----
  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    overlay?.classList.toggle('is-open', open);
    document.documentElement.classList.toggle('is-locked', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menyunu bağla' : 'Menyunu aç');
    if (!open) closeItems();
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  overlay?.addEventListener('click', () => setOpen(false));
  $$('a', nav).forEach((link) => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const openItem = items.find((i) => i.classList.contains('is-open'));
    closeItems();
    if (openItem && hoverMQ.matches) $('[data-nav-dropdown-trigger]', openItem)?.focus();
    setOpen(false);
  });

  window
    .matchMedia(`(min-width: ${BREAKPOINT_NAV}px)`)
    .addEventListener('change', () => setOpen(false));
}