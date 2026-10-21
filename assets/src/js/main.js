
import { initNavigation } from './components/navigation.js';
import { initDropdowns } from './components/dropdown.js';
import { initLanguage } from './components/language.js';
import { initTravelSearch } from './components/travel-search.js';
import { initSearch } from './modules/search.js';

import {
  createIcons,
  FileCheck2,
  PlaneTakeoff,
  Globe2,
  Search,
  ChevronDown
} from 'lucide';

const ready = (fn) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
};

ready(() => {
  initNavigation();
  initDropdowns();
  initLanguage();
  initSearch();
  initTravelSearch();

  createIcons({
    icons: {
      FileCheck2,
      PlaneTakeoff,
      Globe2,
      Search,
      ChevronDown
    }
  });
});
