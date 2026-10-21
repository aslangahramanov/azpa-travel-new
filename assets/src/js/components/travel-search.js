const COUNTRIES = [
  ["az", "🇦🇿", "Azərbaycan", "azerbaijan azerbaycan"],
  ["tr", "🇹🇷", "Türkiyə", "turkey turkiye"],
  ["ge", "🇬🇪", "Gürcüstan", "georgia gurcustan"],
  ["ru", "🇷🇺", "Rusiya", "russia rusiya"],
  ["ae", "🇦🇪", "Birləşmiş Ərəb Əmirlikləri", "uae dubai emirates"],
  ["sa", "🇸🇦", "Səudiyyə Ərəbistanı", "saudi arabia"],
  ["qa", "🇶🇦", "Qətər", "qatar"],
  ["th", "🇹🇭", "Tailand", "thailand"],
  ["my", "🇲🇾", "Malayziya", "malaysia"],
  ["id", "🇮🇩", "İndoneziya", "indonesia bali"],
  ["sg", "🇸🇬", "Sinqapur", "singapore"],
  ["cn", "🇨🇳", "Çin", "china"],
  ["jp", "🇯🇵", "Yaponiya", "japan"],
  ["kr", "🇰🇷", "Cənubi Koreya", "south korea"],
  ["in", "🇮🇳", "Hindistan", "india"],
  ["lk", "🇱🇰", "Şri-Lanka", "sri lanka"],
  ["mv", "🇲🇻", "Maldiv adaları", "maldives"],
  ["eg", "🇪🇬", "Misir", "egypt"],
  ["ma", "🇲🇦", "Mərakeş", "morocco"],
  ["za", "🇿🇦", "Cənubi Afrika", "south africa"],
  ["gb", "🇬🇧", "Böyük Britaniya", "united kingdom england uk"],
  ["ie", "🇮🇪", "İrlandiya", "ireland"],
  ["fr", "🇫🇷", "Fransa", "france"],
  ["de", "🇩🇪", "Almaniya", "germany"],
  ["it", "🇮🇹", "İtaliya", "italy"],
  ["es", "🇪🇸", "İspaniya", "spain"],
  ["pt", "🇵🇹", "Portuqaliya", "portugal"],
  ["nl", "🇳🇱", "Niderland", "netherlands holland"],
  ["be", "🇧🇪", "Belçika", "belgium"],
  ["ch", "🇨🇭", "İsveçrə", "switzerland"],
  ["at", "🇦🇹", "Avstriya", "austria"],
  ["gr", "🇬🇷", "Yunanıstan", "greece"],
  ["cy", "🇨🇾", "Kipr", "cyprus"],
  ["cz", "🇨🇿", "Çexiya", "czech republic"],
  ["pl", "🇵🇱", "Polşa", "poland"],
  ["hu", "🇭🇺", "Macarıstan", "hungary"],
  ["hr", "🇭🇷", "Xorvatiya", "croatia"],
  ["me", "🇲🇪", "Monteneqro", "montenegro"],
  ["al", "🇦🇱", "Albaniya", "albania"],
  ["rs", "🇷🇸", "Serbiya", "serbia"],
  ["us", "🇺🇸", "ABŞ", "usa united states america"],
  ["ca", "🇨🇦", "Kanada", "canada"],
  ["mx", "🇲🇽", "Meksika", "mexico"],
  ["br", "🇧🇷", "Braziliya", "brazil"],
  ["ar", "🇦🇷", "Argentina", "argentina"],
  ["au", "🇦🇺", "Avstraliya", "australia"],
  ["nz", "🇳🇿", "Yeni Zelandiya", "new zealand"],
  ["uz", "🇺🇿", "Özbəkistan", "uzbekistan"],
  ["kz", "🇰🇿", "Qazaxıstan", "kazakhstan"],
  ["kg", "🇰🇬", "Qırğızıstan", "kyrgyzstan"],
  ["tj", "🇹🇯", "Tacikistan", "tajikistan"],
  ["am", "🇦🇲", "Ermənistan", "armenia"],
  ["il", "🇮🇱", "İsrail", "israel"],
  ["jo", "🇯🇴", "İordaniya", "jordan"],
  ["om", "🇴🇲", "Oman", "oman"],
  ["bh", "🇧🇭", "Bəhreyn", "bahrain"],
  ["kw", "🇰🇼", "Küveyt", "kuwait"],
  ["vn", "🇻🇳", "Vyetnam", "vietnam"],
  ["ph", "🇵🇭", "Filippin", "philippines"],
  ["np", "🇳🇵", "Nepal", "nepal"],
  ["ke", "🇰🇪", "Keniya", "kenya"],
  ["tz", "🇹🇿", "Tanzaniya", "tanzania"],
  ["mu", "🇲🇺", "Mavriki", "mauritius"]
];

// YALNIZCA DEMO ÜÇÜN:
// Bu statuslar real viza qaydaları deyil.
// Real layihədə məlumatları rəsmi mənbələr əsasında dəyişin.
const VISA_STATUSES = {
  "visa-free": {
    label: "Vizəsiz",
    className: "visa-badge--free"
  },
  "e-visa": {
    label: "E-viza",
    className: "visa-badge--evisa"
  },
  "visa-on-arrival": {
    label: "Girişdə viza",
    className: "visa-badge--arrival"
  },
  "unavailable": {
    label: "Xidmət göstərilmir",
    className: "visa-badge--unavailable"
  }
};

// Saxta nümunə statuslar — yalnız görünüşü test etmək üçündür.
const COUNTRY_VISA_STATUS = {
  tr: "visa-free",
  ge: "visa-free",
  ru: "e-visa",
  ae: "visa-on-arrival",
  th: "visa-on-arrival",
  my: "visa-free",
  sg: "e-visa",
  jp: "visa-free",
  gb: "unavailable",
  fr: "e-visa",
  de: "visa-on-arrival",
  it: "visa-free",
  es: "e-visa",
  us: "unavailable",
  ca: "visa-on-arrival",
  mv: "visa-free",
  eg: "e-visa",
  ma: "visa-on-arrival",
  au: "unavailable",
  cn: "e-visa",
  id: "visa-on-arrival",
  in: "e-visa",
  lk: "visa-on-arrival",
  qa: "visa-free",
  sa: "e-visa",
  kz: "visa-free",
  uz: "visa-free",
  me: "visa-on-arrival",
  al: "visa-free",
  hr: "e-visa"
};

const createElement = (tag, className, text = "") => {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== "") {
    element.textContent = text;
  }

  return element;
};

const MENU_SELECTOR = "[data-country-select], [data-date-picker], [data-visa-select]";

const MONTHS_AZ = [
  "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
  "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
];

const WEEKDAYS_AZ = ["B.e.", "Ç.a.", "Ç.", "C.a.", "C.", "Ş.", "B."];

const VISA_TYPE_OPTIONS = [
  ["", "Bütün viza növləri", "all"],
  ["visa-free", "Vizəsiz səyahət", "free"],
  ["e-visa", "Elektron viza (e-Visa)", "evisa"],
  ["visa-on-arrival", "Sərhəddə viza", "arrival"],
  ["visa-required", "Konsulluq vizası", "consulate"]
];

const ARROW_ICONS = {
  prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>'
};

const pad = (n) => String(n).padStart(2, "0");
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromISO = (value) => {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const formatDate = (d) => `${d.getDate()} ${MONTHS_AZ[d.getMonth()]} ${d.getFullYear()}`;
const startOfToday = () => {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
};

const normalize = (value = "") => {
  return String(value)
    .toLocaleLowerCase("az")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ə/g, "e")
    .trim();
};

const getCountryByCode = (code) => {
  return COUNTRIES.find((country) => country[0] === code) || null;
};

function getCountrySelectParts(select) {
  return {
    trigger: select.querySelector(
      ".country-select__trigger, [data-country-trigger]"
    ),
    value: select.querySelector(
      ".country-select__value, [data-country-value]"
    ),
    menu: select.querySelector(
      ".country-select__menu, [data-country-menu]"
    ),
    search: select.querySelector(
      ".country-select__search, [data-country-search]"
    ),
    options: select.querySelector(
      ".country-select__options, [data-country-options]"
    ),
    empty: select.querySelector(
      ".country-select__empty, [data-country-empty]"
    ),
    hiddenInput: select.querySelector('input[type="hidden"]')
  };
}

function closeMenus(except = null) {
  document.querySelectorAll(MENU_SELECTOR).forEach((el) => {
    if (el === except) return;

    el.classList.remove("is-open");
    el.querySelector("[aria-expanded]")?.setAttribute("aria-expanded", "false");
  });
}

function updateSelected(select, country) {
  const parts = getCountrySelectParts(select);

  if (!parts.hiddenInput || !country) return;

  parts.hiddenInput.value = country[0];
  parts.hiddenInput.dispatchEvent(
    new Event("change", { bubbles: true })
  );

  if (parts.value) {
    parts.value.replaceChildren();

    const flag = createFlag(country, "country-select__selected-flag");

    const name = createElement(
      "span",
      "country-select__selected-name",
      country[2]
    );

    parts.value.append(flag, name);
  }

  if (parts.trigger) {
    parts.trigger.classList.add("has-value");
    parts.trigger.setAttribute("aria-label", country[2]);
  }

  select.classList.remove("is-open");

  if (parts.trigger) {
    parts.trigger.setAttribute("aria-expanded", "false");
  }

  if (parts.search) {
    parts.search.value = "";
  }

  renderCountries(select);
}


function renderCountries(select, query = "") {
  const parts = getCountrySelectParts(select);
  const { options: list, empty, hiddenInput } = parts;

  if (!list || !hiddenInput) return;

  const current = hiddenInput.value;
  const search = normalize(query);

  // data-only="az" olan select-də yalnız göstərilən ölkələr çıxır.
  const allowed = select.dataset.only
    ? select.dataset.only.split(",").map((code) => code.trim())
    : null;

  const source = allowed
    ? COUNTRIES.filter((country) => allowed.includes(country[0]))
    : COUNTRIES;

  const filtered = source.filter((country) => {
    const searchableText = normalize(country.join(" "));
    return searchableText.includes(search);
  });

  list.replaceChildren();

  filtered.forEach((country) => {
    const [code, flagEmoji, countryName] = country;

    const option = createElement("button", "country-option");
    option.type = "button";
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", String(current === code));

    if (current === code) {
      option.classList.add("is-selected");
    }

    // Bayrağı ISO ölkə kodu ilə şəkil kimi göstəririk.
    const flag = createFlag(country, "country-option__flag");
    flag.src = `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
    flag.alt = "";
    flag.width = 24;
    flag.height = 18;
    flag.loading = "lazy";
    flag.decoding = "async";
    flag.setAttribute("aria-hidden", "true");

    // Şəkil yüklənməsə, emoji ehtiyat variant kimi göstərilsin.
    flag.addEventListener("error", () => {
      const fallback = createElement(
        "span",
        "country-option__flag-fallback",
        flagEmoji
      );

      flag.replaceWith(fallback);
    }, { once: true });

    const info = createElement("span", "country-option__info");

    const name = createElement(
      "span",
      "country-option__name",
      countryName
    );

    info.append(name);

    // Status yalnız uyğun HTML elementində göstərilir.
    // Bunlar demo məlumatlarıdır.
    const showStatus = select.hasAttribute("data-show-visa-status");
    const statusKey = COUNTRY_VISA_STATUS[code];
    const status = statusKey ? VISA_STATUSES[statusKey] : null;

    if (showStatus && status) {
      const badge = createElement(
        "span",
        `visa-badge ${status.className}`,
        status.label
      );

      info.append(badge);
    }

    option.append(flag, info);

    option.addEventListener("click", () => {
      updateSelected(select, country);
      closeMenus();
    });

    list.append(option);
  });

  if (empty) {
    empty.hidden = filtered.length > 0;
  }
}

// Bayrağı şəkil kimi yaradır; yüklənməsə emoji ehtiyat variantı göstərilir.
const createFlag = (country, className) => {
  const [code, emoji] = country;

  const img = createElement("img", className);
  img.src = `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
  img.alt = "";
  img.width = 24;
  img.height = 18;
  img.decoding = "async";
  img.setAttribute("aria-hidden", "true");

  img.addEventListener("error", () => {
    img.replaceWith(createElement("span", `${className}-fallback`, emoji));
  }, { once: true });

  return img;
};


function initCountrySelect(select) {
  const parts = getCountrySelectParts(select);

  if (!parts.hiddenInput || !parts.options) return;

  const { trigger, search } = parts;

  if (trigger) {
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");

    trigger.addEventListener("click", (event) => {
      event.preventDefault();

      const shouldOpen = !select.classList.contains("is-open");

      closeMenus();

      if (shouldOpen) {
        select.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");

        renderCountries(select, search?.value || "");

        if (search) {
          search.focus();
        }
      }
    });
  }

  if (search) {
    search.addEventListener("input", () => {
      renderCountries(select, search.value);
    });

    search.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenus();
        trigger?.focus();
      }
    });
  }

  const initialCountry = getCountryByCode(parts.hiddenInput.value);

  if (initialCountry) {
    updateSelected(select, initialCountry);
  } else {
    renderCountries(select);
  }
}

function initTabs() {
  const tabs = document.querySelectorAll("[data-search-tab]");
  const panels = document.querySelectorAll("[data-fields]");

  if (!tabs.length || !panels.length) return;

  const modeInput = document.querySelector("[data-mode-input]");

  const activateTab = (tab) => {
    const target = tab.dataset.searchTab;

    tabs.forEach((item) => {
      const active = item === tab;

      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
      item.setAttribute("tabindex", active ? "0" : "-1");
    });

    panels.forEach((panel) => {
      const active = panel.dataset.fields === target;

      panel.hidden = !active;
      panel.classList.toggle("is-active", active);

      // Yalnız aktiv panelin sahələri formaya göndərilsin.
      panel.querySelectorAll("input, select").forEach((field) => {
        field.disabled = !active;
      });
    });

    if (modeInput) modeInput.value = target;
    closeMenus();
  };

  tabs.forEach((tab, index) => {
    tab.setAttribute("role", "tab");

    tab.addEventListener("click", () => {
      activateTab(tab);
    });

    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        return;
      }

      event.preventDefault();

      let nextIndex = index;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      }

      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex]);
    });
  });

  const initiallyActive =
    document.querySelector("[data-search-tab].is-active") || tabs[0];

  activateTab(initiallyActive);
}

function initTravelers() {
  document.querySelectorAll("[data-travelers]").forEach((counter) => {
    const output = counter.querySelector("[data-travelers-value]");
    const decrease = counter.querySelector("[data-travelers-decrease]");
    const increase = counter.querySelector("[data-travelers-increase]");
    const hiddenInput = counter.querySelector('input[type="hidden"]');

    if (!output || !decrease || !increase) return;

    let count = Number(hiddenInput?.value || output.textContent || 1);

    if (!Number.isFinite(count)) count = 1;
    count = Math.max(1, count);

    const update = () => {
      output.textContent = String(count);

      if (hiddenInput) {
        hiddenInput.value = String(count);
        hiddenInput.dispatchEvent(
          new Event("change", { bubbles: true })
        );
      }

      decrease.disabled = count <= 1;
      increase.disabled = count >= 20;

      decrease.setAttribute("aria-label", "Səyahətçi sayını azalt");
      increase.setAttribute("aria-label", "Səyahətçi sayını artır");
    };

    decrease.addEventListener("click", (event) => {
      event.preventDefault();

      if (count > 1) {
        count -= 1;
        update();
      }
    });

    increase.addEventListener("click", (event) => {
      event.preventDefault();

      if (count < 20) {
        count += 1;
        update();
      }
    });

    update();
  });
}

function initDatePickers() {
  document.querySelectorAll("[data-date-picker]").forEach((picker) => {
    const trigger = picker.querySelector("[data-date-trigger]");
    const label = picker.querySelector("[data-date-value]");
    const menu = picker.querySelector("[data-date-menu]");
    const input = picker.querySelector('input[type="hidden"]');

    if (!trigger || !label || !menu || !input) return;

    const placeholder = label.textContent.trim() || "Tarix seçin";
    const today = startOfToday();

    let selected = input.value ? fromISO(input.value) : null;
    const base = selected || today;
    let view = new Date(base.getFullYear(), base.getMonth(), 1);

    const setValue = (date) => {
      selected = date;
      input.value = date ? toISO(date) : "";
      label.textContent = date ? formatDate(date) : placeholder;
      trigger.classList.toggle("has-value", Boolean(date));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    };

    const render = () => {
      menu.replaceChildren();

      // Başlıq: ay naviqasiyası
      const head = createElement("div", "date-picker__head");

      const prev = createElement("button", "date-picker__nav");
      prev.type = "button";
      prev.setAttribute("aria-label", "Əvvəlki ay");
      prev.innerHTML = ARROW_ICONS.prev;
      prev.disabled = view <= new Date(today.getFullYear(), today.getMonth(), 1);
      prev.addEventListener("click", () => {
        view = new Date(view.getFullYear(), view.getMonth() - 1, 1);
        render();
      });

      const title = createElement(
        "strong",
        "date-picker__title",
        `${MONTHS_AZ[view.getMonth()]} ${view.getFullYear()}`
      );

      const next = createElement("button", "date-picker__nav");
      next.type = "button";
      next.setAttribute("aria-label", "Növbəti ay");
      next.innerHTML = ARROW_ICONS.next;
      next.addEventListener("click", () => {
        view = new Date(view.getFullYear(), view.getMonth() + 1, 1);
        render();
      });

      head.append(prev, title, next);

      // Həftə günləri
      const weekdays = createElement("div", "date-picker__weekdays");
      WEEKDAYS_AZ.forEach((day) => {
        weekdays.append(createElement("span", "", day));
      });

      // Günlər (həftə bazar ertəsindən başlayır)
      const grid = createElement("div", "date-picker__grid");
      const year = view.getFullYear();
      const month = view.getMonth();
      const offset = (new Date(year, month, 1).getDay() + 6) % 7;
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < offset; i += 1) {
        grid.append(createElement("span", "date-picker__empty"));
      }

      for (let day = 1; day <= daysInMonth; day += 1) {
        const date = new Date(year, month, day);
        const button = createElement("button", "date-picker__day", String(day));
        button.type = "button";
        button.disabled = date < today;

        if (date.getTime() === today.getTime()) {
          button.classList.add("is-today");
        }

        if (selected && date.getTime() === selected.getTime()) {
          button.classList.add("is-selected");
          button.setAttribute("aria-pressed", "true");
        }

        button.addEventListener("click", () => {
          setValue(date);
          closeMenus();
        });

        grid.append(button);
      }

      // Altlıq
      const footer = createElement("div", "date-picker__footer");

      const clear = createElement("button", "date-picker__link", "Təmizlə");
      clear.type = "button";
      clear.addEventListener("click", () => {
        setValue(null);
        render();
      });

      const todayBtn = createElement("button", "date-picker__link", "Bu gün");
      todayBtn.type = "button";
      todayBtn.addEventListener("click", () => {
        setValue(today);
        closeMenus();
      });

      footer.append(clear, todayBtn);
      menu.append(head, weekdays, grid, footer);
    };

    // Menyunun içindəki kliklər "kənara klik" sayılmasın
    // (render zamanı klik edilən element DOM-dan silinir).
    menu.addEventListener("click", (event) => event.stopPropagation());

    trigger.addEventListener("click", (event) => {
      event.preventDefault();

      const shouldOpen = !picker.classList.contains("is-open");

      closeMenus();

      if (shouldOpen) {
        render();
        picker.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    if (selected) setValue(selected);
  });
}

function initVisaSelects() {
  document.querySelectorAll("[data-visa-select]").forEach((select) => {
    const trigger = select.querySelector("[data-visa-trigger]");
    const valueEl = select.querySelector("[data-visa-value]");
    const list = select.querySelector("[data-visa-options]");
    const input = select.querySelector('input[type="hidden"]');

    if (!trigger || !valueEl || !list || !input) return;

    const buildLabel = (label, tone) => {
      const wrap = document.createDocumentFragment();
      wrap.append(
        createElement("span", `visa-dot visa-dot--${tone}`),
        createElement("span", "visa-select__text", label)
      );
      return wrap;
    };

    const render = () => {
      list.replaceChildren();

      VISA_TYPE_OPTIONS.forEach(([value, label, tone]) => {
        const option = createElement("button", "visa-option");
        option.type = "button";
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", String(input.value === value));
        option.classList.toggle("is-selected", input.value === value);
        option.append(buildLabel(label, tone));

        option.addEventListener("click", (event) => {
          event.stopPropagation();

          input.value = value;
          valueEl.replaceChildren(buildLabel(label, tone));
          input.dispatchEvent(new Event("change", { bubbles: true }));

          closeMenus();
          render();
        });

        list.append(option);
      });
    };

    trigger.addEventListener("click", (event) => {
      event.preventDefault();

      const shouldOpen = !select.classList.contains("is-open");

      closeMenus();

      if (shouldOpen) {
        render();
        select.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    const current =
      VISA_TYPE_OPTIONS.find(([value]) => value === input.value) ||
      VISA_TYPE_OPTIONS[0];

    valueEl.replaceChildren(buildLabel(current[1], current[2]));
    render();
  });
}

function initTravelFormValidation() {
  document.querySelectorAll(".travel-search__form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      const activePanel = form.querySelector(
        '[data-fields]:not([hidden])'
      );

      // Aktiv panel tapılmasa, forma mane olmuruq.
      if (!activePanel) return;

      const requiredCountrySelects = activePanel.querySelectorAll(
        "[data-country-select][data-required]"
      );

      let firstInvalid = null;

      requiredCountrySelects.forEach((select) => {
        const hiddenInput = select.querySelector('input[type="hidden"]');
        const hasValue = Boolean(hiddenInput?.value);

        select.classList.toggle("is-invalid", !hasValue);

        if (!hasValue && !firstInvalid) {
          firstInvalid = select;
        }
      });

      if (firstInvalid) {
        event.preventDefault();

        const trigger = firstInvalid.querySelector(
          ".country-select__trigger, [data-country-trigger]"
        );

        firstInvalid.classList.add("is-open");
        trigger?.setAttribute("aria-expanded", "true");
        trigger?.focus();
      }
    });
  });

  document.querySelectorAll("[data-country-select]").forEach((select) => {
    const hiddenInput = select.querySelector('input[type="hidden"]');

    hiddenInput?.addEventListener("change", () => {
      select.classList.remove("is-invalid");
    });
  });
}

function initOutsideClick() {
  document.addEventListener("click", (event) => {
    if (!event.target.closest(MENU_SELECTOR)) {
      closeMenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenus();
    }
  });
}

export function initTravelSearch() {
  const countrySelects = document.querySelectorAll("[data-country-select]");

  initTabs();

  countrySelects.forEach((select) => {
    initCountrySelect(select);
  });

  initTravelers();
  initDatePickers();
  initVisaSelects();
  initTravelFormValidation();
  initOutsideClick();
}