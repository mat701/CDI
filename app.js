// ─────────────────────────────────────────────────────────────────────────────
// Car Dependency Index — interactive visualisation
// Mirrors the accessibility-pov UX but is adapted for CDI's continuous scale.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// i18n
// ─────────────────────────────────────────────────────────────────────────────
let currentLang = "en";
const I18N = {
  en: {
    loading: "Loading…",
    header_sub: "Public transport vs. private car",
    back_btn: "World Map",
    about_btn: "About", paper_btn: "Paper ↗", stats_btn: "Compare cities",
    cities_title: "Cities", search_placeholder: "Search…",
    landing_hint:
      'Explore <strong>car dependency</strong> across cities. Each cell compares the access to opportunities by private car against public transport.',
    landing_hint2: "Click a city or map pin to begin.",
    learn_more: "Learn more →",
    infobox_title: "Car Dependency Index",
    infobox_text:
      "A high-resolution measure of how much more reachable opportunities are <strong>by car</strong> than <strong>by public transport</strong>. Blue cells favour transit; red cells require a car.",
    infobox_cite: "Based on",
    no_data_badge: "no data",

    // Sidebar
    cdi_legend_title: "CDI scale",
    cdi_legend_top: "Car-dependent",
    cdi_legend_mid: "Balanced",
    cdi_legend_bot: "PT-favoured",
    legend_explain: "Each cell is coloured by its CDI.",
    full_explanation: "Full explanation →",
    filter_title: "Filter by CDI",
    filter_reset: "Reset filter",
    city_summary_title: "City summary",
    stat_hexagons: "Total hexagons",
    stat_pop: "Resident population",
    stat_med_cdi: "Median CDI",
    stat_avg_cdi: "Pop-weighted CDI",
    stat_med_cdi_hint: "The median value across all hexagons. Half the cells lie above and half below.",
    stat_avg_cdi_hint: "The mean CDI weighted by resident population — the value experienced by a typical resident.",
    stat_pt_share: "PT-favoured cells",
    stat_car_share: "Car-dependent cells",
    selected_hex_title: "Selected hexagon",
    no_selection: "Click any hexagon or scatter point to inspect it.",
    interactions_title: "Interactions",
    interactions_hint:
      "Hover or click to cross-highlight.<br>Scroll &amp; drag to navigate.<br>Adjust the slider to filter cells.",

    // Panel labels
    label_cartogram: "Map",
    label_scatter: "Scatter · Car vs Public Transport access",
    label_scatter_short: "Scatter",
    mobile_info: "Info",
    mobile_search_cities: "Search city",

    // View toggle
    view_toggle_to_cartogram: "Cartogram",
    view_toggle_to_map: "Geographic map",
    view_toggle_tip:
      "Switch between the geographic hex map and a Dorling cartogram where each cell is sized by population.",
    cartogram_missing: "Cartogram data not available for this city yet.",
    view_mode_map: "Geographic",
    view_mode_cartogram: "Cartogram",

    // Info-box (selected hexagon)
    info_zone: "Class",
    info_cdi: "CDI",
    info_o_car: "O. by car",
    info_o_pt: "O. by PT",
    info_population: "Population",
    info_pt_favoured: "PT-favoured",
    info_balanced: "Balanced",
    info_car_dep: "Car-dependent",

    // Tooltip
    tt_cdi: "CDI",
    tt_car: "Car",
    tt_pt: "PT",
    tt_pop: "Pop",

    // Scatter
    scatter_x_label: "Opportunity by car",
    scatter_y_label: "Opportunity by PT",
    scatter_diag_label: "CDI = 0",

    // Stats view
    stats_title: "City Comparison",
    stats_subtitle: "Comparing car dependency across cities",
    stats_sort_by: "Sort by:",
    stats_sort_avg: "Pop-weighted CDI",
    stats_sort_med: "Median CDI",
    stats_sort_pt: "PT-favoured cells",
    stats_sort_population: "Population",
    stats_loading: "Loading city data…",
    stats_empty: "No city data is currently bundled. Add city folders under /data to populate this view.",
    stats_h_ranking: "Cities ranked by CDI",
    stats_h_ranking_hint:
      "Each bar shows the population-weighted CDI. Negative (blue) means transit-friendly; positive (red) means car-dependent.",
    stats_h_scatter: "Car access vs. PT access (city averages)",
    stats_h_scatter_hint:
      "Each circle is a city, sized by population. Cities far below the diagonal are heavily car-dependent.",
    stats_h_dist: "CDI distribution across cells",
    stats_h_dist_hint:
      "Cumulative share of the resident population living below each CDI value. Steeper curves mean more uniform car dependency.",
    stats_h_table: "Summary table",
    stats_th_city: "City",
    stats_th_hex: "Hexagons",
    stats_th_pop: "Population",
    stats_th_med: "Median CDI",
    stats_th_avg: "Pop-w. CDI",
    stats_th_pt: "PT cells",
    stats_th_car: "Car cells",

    // About modal
    about_title: "The Car Dependency Index",
    about_subtitle: "Public transport vs. private car accessibility",
    about_intro:
      'This interactive visualisation accompanies the research paper <a href="https://arxiv.org/abs/2604.01019" target="_blank" rel="noopener"><em>Car Dependency in Urban Accessibility</em></a> by Campanelli, Marzolla, Bruno, Melo &amp; Loreto (2026).',
    about_h_what: "What is the CDI?",
    about_what:
      "The <strong>Car Dependency Index</strong> measures, for every ~200 m hexagonal cell in a city, how much more reachable opportunities are by private car than by public transport. It is defined as:",
    about_what2:
      "Where O<sub>car</sub> and O<sub>PT</sub> are the opportunity scores reachable by car and public transport respectively.",
    about_h_scale: "Reading the scale",
    about_pt_card:
      "<strong>CDI &lt; 0 (blue)</strong> — Public transport reaches more opportunities than the car. A car-free life is realistic.",
    about_bal_card: "<strong>CDI ≈ 0 (white)</strong> — Both modes offer comparable access.",
    about_car_card:
      "<strong>CDI &gt; 0 (red)</strong> — Cars dominate. The greater the value, the more dependent residents are on private vehicles.",
    about_h_read: "How to read the visualisation",
    about_read_text:
      "The map (left panel) shows the city divided into ~200 m hexagonal cells, coloured by their CDI value on the diverging blue–red scale. Use the toggle in the top-right of the map to switch to a Dorling cartogram, where each cell is resized by its resident population — empty hexes shrink to nothing, and densely populated ones balloon. The scatter plot (right panel) places each hexagon by its opportunity score by car (x-axis) and by public transport (y-axis). Hexagons on the diagonal are balanced; those below it are car-dependent.",
    about_h_data: "Data & methods",
    about_data_text:
      "Cities are covered with H3 resolution-9 hexagons. Walking and driving times are computed via OSRM on OpenStreetMap data; public transport via GTFS feeds and the Connection Scan Algorithm. Driving times include a parking buffer and city-specific traffic delays. POIs from OpenStreetMap. Population from WorldPop.",
    about_ref:
      '<strong>Reference:</strong> Campanelli B., Marzolla F., Bruno M., Melo H.P.M., Loreto V. (2026). <em>Car Dependency in Urban Accessibility.</em> arXiv:2604.01019. <a href="https://arxiv.org/abs/2604.01019" target="_blank" rel="noopener">arxiv.org/abs/2604.01019</a>',

    // Help (scatter)
    help_scatter_title: "Reading the scatter plot",
    help_scatter_intro: "Each dot is a hexagonal cell. Its position encodes:",
    help_scatter_x: "<strong>X-axis (Car):</strong> POIs reachable within ~60 minutes by private car.",
    help_scatter_y: "<strong>Y-axis (Public transport):</strong> POIs reachable within ~60 minutes by transit.",
    help_scatter_diag:
      "The dashed diagonal marks <strong>CDI = 0</strong>: equal access by both modes. Points <em>below</em> the line are car-dependent (red); <em>above</em> are public-transport-favoured (blue).",
    help_scatter_color: "Dot colour shows the CDI value on the same blue–red diverging scale used on the map.",
    help_scatter_interact: "Hover or click on a dot to cross-highlight it on the map.",

    // Help (map)
    help_map_title: "Reading the map",
    help_map_intro: "Each hexagon (~200 m) is coloured by its CDI value:",
    help_map_colour:
      "Deep blue = public transport reaches far more opportunities than driving. Deep red = the car is essentially required to reach the city's amenities.",
    help_map_filter:
      "Use the slider in the sidebar to focus only on hexagons within a CDI range — useful for spotting either car-trapped or transit-rich areas.",
    help_map_interact: "Click any hexagon to inspect its full breakdown. Hover to cross-highlight it on the scatter plot.",
  },
  it: {
    loading: "Caricamento…",
    header_sub: "Trasporto pubblico vs. auto privata",
    back_btn: "Mappa mondiale",
    about_btn: "Info", paper_btn: "Articolo ↗", stats_btn: "Confronta città",
    cities_title: "Città", search_placeholder: "Cerca…",
    landing_hint:
      'Esplora la <strong>dipendenza dall\'auto</strong> nelle città. Ogni cella confronta l\'accesso alle opportunità in auto rispetto al trasporto pubblico.',
    landing_hint2: "Clicca su una città o un punto della mappa.",
    learn_more: "Scopri di più →",
    infobox_title: "Indice di Dipendenza dall'Auto",
    infobox_text:
      "Una misura ad alta risoluzione di quanto più raggiungibili siano le opportunità <strong>in auto</strong> rispetto al <strong>trasporto pubblico</strong>. Celle blu = trasporti, celle rosse = auto necessaria.",
    infobox_cite: "Basato su",
    no_data_badge: "no dati",

    cdi_legend_title: "Scala CDI",
    cdi_legend_top: "Dipend. auto",
    cdi_legend_mid: "Bilanciato",
    cdi_legend_bot: "Pro TP",
    legend_explain: "Ogni cella è colorata in base al suo CDI.",
    full_explanation: "Spiegazione completa →",
    filter_title: "Filtra per CDI",
    filter_reset: "Reset filtro",
    city_summary_title: "Riepilogo città",
    stat_hexagons: "Esagoni totali",
    stat_pop: "Popolazione residente",
    stat_med_cdi: "CDI mediano",
    stat_avg_cdi: "CDI ponderato",
    stat_med_cdi_hint: "Il valore mediano su tutti gli esagoni. Metà delle celle sopra, metà sotto.",
    stat_avg_cdi_hint: "Il CDI medio pesato per la popolazione — il valore vissuto dal residente tipico.",
    stat_pt_share: "Celle pro TP",
    stat_car_share: "Celle dipend. auto",
    selected_hex_title: "Esagono selezionato",
    no_selection: "Clicca su un esagono o un punto.",
    interactions_title: "Interazioni",
    interactions_hint:
      "Passa il mouse o clicca per evidenziare.<br>Scorri e trascina per navigare.<br>Usa lo slider per filtrare.",

    label_cartogram: "Mappa",
    label_scatter: "Scatter · Accesso Auto vs TP",
    label_scatter_short: "Scatter",
    mobile_info: "Info",
    mobile_search_cities: "Cerca città",

    view_toggle_to_cartogram: "Cartogramma",
    view_toggle_to_map: "Mappa geografica",
    view_toggle_tip:
      "Passa tra mappa geografica e cartogramma di Dorling, in cui ogni cella è proporzionale alla popolazione.",
    cartogram_missing: "Cartogramma non ancora disponibile per questa città.",
    view_mode_map: "Geografica",
    view_mode_cartogram: "Cartogramma",

    info_zone: "Classe",
    info_cdi: "CDI",
    info_o_car: "Opp. auto",
    info_o_pt: "Opp. TP",
    info_population: "Popolazione",
    info_pt_favoured: "Pro TP",
    info_balanced: "Bilanciato",
    info_car_dep: "Dipendente da auto",

    tt_cdi: "CDI", tt_car: "Auto", tt_pt: "TP", tt_pop: "Pop",

    scatter_x_label: "Opportunità in auto",
    scatter_y_label: "Opportunità con TP",
    scatter_diag_label: "CDI = 0",

    stats_title: "Confronto Città",
    stats_subtitle: "Confronto della dipendenza dall'auto tra le città",
    stats_sort_by: "Ordina per:",
    stats_sort_avg: "CDI ponderato",
    stats_sort_med: "CDI mediano",
    stats_sort_pt: "Celle pro TP",
    stats_sort_population: "Popolazione",
    stats_loading: "Caricamento dati…",
    stats_empty: "Nessun dato attualmente incluso. Aggiungi cartelle città in /data per popolare questa vista.",
    stats_h_ranking: "Città ordinate per CDI",
    stats_h_ranking_hint:
      "Ogni barra mostra il CDI ponderato per popolazione. Negativo (blu) = pro trasporti; positivo (rosso) = dipendente da auto.",
    stats_h_scatter: "Accesso Auto vs TP (medie cittadine)",
    stats_h_scatter_hint:
      "Ogni cerchio è una città, dimensionato per popolazione. Città lontane sotto la diagonale sono fortemente dipendenti da auto.",
    stats_h_dist: "Distribuzione del CDI tra le celle",
    stats_h_dist_hint:
      "Quota cumulativa della popolazione residente sotto ogni valore di CDI. Curve più ripide = dipendenza più uniforme.",
    stats_h_table: "Tabella riassuntiva",
    stats_th_city: "Città",
    stats_th_hex: "Esagoni",
    stats_th_pop: "Popolazione",
    stats_th_med: "CDI mediano",
    stats_th_avg: "CDI pond.",
    stats_th_pt: "Celle TP",
    stats_th_car: "Celle auto",

    about_title: "L'Indice di Dipendenza dall'Auto",
    about_subtitle: "Trasporto pubblico vs. auto privata",
    about_intro:
      'Visualizzazione interattiva dell\'articolo <a href="https://arxiv.org/abs/2604.01019" target="_blank" rel="noopener"><em>Car Dependency in Urban Accessibility</em></a> di Campanelli et al. (2026).',
    about_h_what: "Cos'è il CDI?",
    about_what:
      "Il <strong>Car Dependency Index</strong> misura, per ogni cella esagonale di ~200 m, quanto più raggiungibili siano le opportunità in auto rispetto al trasporto pubblico. È definito come:",
    about_what2:
      "Dove O<sub>car</sub> e O<sub>PT</sub> sono i punteggi di opportunità raggiungibili rispettivamente in auto e con i mezzi pubblici.",
    about_h_scale: "Leggere la scala",
    about_pt_card:
      "<strong>CDI &lt; 0 (blu)</strong> — Il trasporto pubblico raggiunge più opportunità dell'auto. Una vita car-free è realistica.",
    about_bal_card: "<strong>CDI ≈ 0 (bianco)</strong> — Entrambe le modalità offrono accesso comparabile.",
    about_car_card:
      "<strong>CDI &gt; 0 (rosso)</strong> — Le auto dominano. Più alto è il valore, più i residenti dipendono dai veicoli privati.",
    about_h_read: "Come leggere la visualizzazione",
    about_read_text:
      "La mappa (pannello sinistro) mostra la città divisa in celle esagonali di ~200 m, colorate in base al CDI sulla scala blu-rosso. Usa il pulsante in alto a destra per passare al cartogramma di Dorling, in cui ogni cella è ridimensionata in base alla popolazione residente: gli esagoni vuoti scompaiono e quelli densamente popolati si ingrandiscono. Lo scatter (pannello destro) posiziona ogni esagono per opportunità in auto (asse x) e con TP (asse y). Esagoni sulla diagonale sono bilanciati; quelli sotto sono dipendenti da auto.",
    about_h_data: "Dati e metodi",
    about_data_text:
      "Esagoni H3 risoluzione 9. Tempi a piedi e in auto via OSRM su dati OpenStreetMap; trasporto pubblico via GTFS + Connection Scan. I tempi in auto includono buffer di parcheggio e ritardi specifici. POI da OpenStreetMap. Popolazione da WorldPop.",
    about_ref:
      '<strong>Rif.:</strong> Campanelli B., Marzolla F., Bruno M., Melo H.P.M., Loreto V. (2026). <em>Car Dependency in Urban Accessibility.</em> arXiv:2604.01019. <a href="https://arxiv.org/abs/2604.01019" target="_blank" rel="noopener">arxiv.org/abs/2604.01019</a>',

    help_scatter_title: "Leggere lo scatter",
    help_scatter_intro: "Ogni punto è un esagono. La posizione codifica:",
    help_scatter_x: "<strong>Asse X (Auto):</strong> POI raggiungibili in ~60 min in auto.",
    help_scatter_y: "<strong>Asse Y (TP):</strong> POI raggiungibili in ~60 min con i mezzi.",
    help_scatter_diag:
      "La diagonale tratteggiata segna <strong>CDI = 0</strong>: accesso uguale per entrambe le modalità. Sotto la linea = dipendenti da auto (rosso); sopra = pro trasporti (blu).",
    help_scatter_color: "Il colore del punto mostra il CDI sulla stessa scala blu-rosso usata sulla mappa.",
    help_scatter_interact: "Passa il mouse o clicca un punto per evidenziarlo sulla mappa.",

    help_map_title: "Leggere la mappa",
    help_map_intro: "Ogni esagono (~200 m) è colorato in base al CDI:",
    help_map_colour:
      "Blu profondo = il trasporto pubblico raggiunge molte più opportunità della guida. Rosso profondo = l'auto è essenzialmente richiesta.",
    help_map_filter: "Usa lo slider per filtrare gli esagoni in un intervallo CDI specifico.",
    help_map_interact: "Clicca un esagono per ispezionarlo. Hover per evidenziare lo scatter.",
  },
};

function t(key) { return I18N[currentLang]?.[key] || I18N.en[key] || key; }

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => { el.title = t(el.dataset.i18nTitle); });
  document.getElementById("lang-btn").textContent = currentLang === "en" ? "IT" : "EN";
  document.title = currentLang === "en" ? "Car Dependency Index" : "Indice di Dipendenza dall'Auto";
  if (features.length) {
    updateInfoBox(selectedId != null ? features.find((f) => f.properties.id === selectedId) : null);
    buildScatter();
    updateCityStats();
  }
  if (cityStats && document.getElementById("view-stats").style.display !== "none") renderStats();
  syncViewToggleUI();
}

document.getElementById("lang-btn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "it" : "en";
  applyLanguage();
});

// ─────────────────────────────────────────────────────────────────────────────
// CITY MANIFEST
// Loaded from /data/index.json. Each entry: { slug, name, center: [lat,lng], zoom }
// ─────────────────────────────────────────────────────────────────────────────
let CITIES = [];
let CITIES_BY_SLUG = new Map();
const dataPath = (slug, file) => `data/${encodeURIComponent(slug)}/${file}`;

async function loadManifest() {
  try {
    const res = await fetch("data/index.json", { cache: "no-store" });
    if (!res.ok) throw new Error("manifest");
    const arr = await res.json();
    CITIES = arr.map((m) => ({
      slug: m.slug,
      name: m.name || m.slug,
      center: m.center || [42.5, 12.5],
      zoom: m.zoom || 10,
    }));
    CITIES.sort((a, b) => a.name.localeCompare(b.name));
    CITIES_BY_SLUG = new Map(CITIES.map((c) => [c.slug, c]));
  } catch (e) {
    console.error("Failed to load manifest", e);
    CITIES = []; CITIES_BY_SLUG = new Map();
  }
}

// Probe whether a city has bundled data files. Cached.
const cityDataAvailability = new Map();
async function cityHasData(slug) {
  if (cityDataAvailability.has(slug)) return cityDataAvailability.get(slug);
  try {
    // HEAD on the geojson is enough; the CSV is a sibling
    const res = await fetch(dataPath(slug, "hexes.geojson"), { method: "HEAD" });
    const ok = res.ok;
    cityDataAvailability.set(slug, ok);
    return ok;
  } catch (e) {
    cityDataAvailability.set(slug, false);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CDI COLOUR SCALE (continuous diverging, blue↔white↔red)
// ─────────────────────────────────────────────────────────────────────────────
// We sample a small palette and interpolate. -1 → deep blue, 0 → white, +1 → deep red.
const CDI_STOPS = [
  { v: -1.0, rgb: [8, 48, 107] },     // deep blue
  { v: -0.66, rgb: [40, 103, 168] },
  { v: -0.33, rgb: [103, 148, 211] },
  { v: 0.0,  rgb: [247, 247, 247] },  // near-white
  { v: 0.33, rgb: [239, 101, 72] },
  { v: 0.66, rgb: [203, 24, 29] },
  { v: 1.0,  rgb: [103, 0, 13] },     // deep red
];
function cdiColor(v) {
  if (!Number.isFinite(v)) return "#cccccc";
  const x = Math.max(-1, Math.min(1, v));
  for (let i = 0; i < CDI_STOPS.length - 1; i++) {
    const a = CDI_STOPS[i], b = CDI_STOPS[i + 1];
    if (x >= a.v && x <= b.v) {
      const u = (x - a.v) / (b.v - a.v);
      const rgb = [0, 1, 2].map((k) => Math.round(a.rgb[k] + (b.rgb[k] - a.rgb[k]) * u));
      return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    }
  }
  return "rgb(200,200,200)";
}

// Categorical bucket for a CDI value (used in the info box).
function cdiBucket(v) {
  if (!Number.isFinite(v)) return null;
  if (v < -0.05) return "pt";
  if (v >  0.05) return "car";
  return "balanced";
}
function cdiBucketLabel(b) {
  return b === "pt" ? t("info_pt_favoured")
       : b === "car" ? t("info_car_dep")
       : t("info_balanced");
}
function cdiBucketColor(b) {
  return b === "pt" ? "var(--pt)" : b === "car" ? "var(--car)" : "var(--muted)";
}

// ─────────────────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────────────────
let features = [];           // currently rendered set (points to mapFeatures or cartogramFeatures)
let mapFeatures = [];        // geographic hex layer
let cartogramFeatures = null;// Dorling cartogram (lazy-loaded; null = not yet, false = unavailable)
let viewMode = "cartogram";        // "map" | "cartogram"
let selectedId = null, hoveredId = null;
let cdiMin = -1, cdiMax = 1;
let HEX_ALPHA = 0.8;
const HEX_ALPHA_DIM = 0.1;
let currentCity = null;

// ─────────────────────────────────────────────────────────────────────────────
// MODALS
// ─────────────────────────────────────────────────────────────────────────────
function openModal(id) { document.getElementById(id).classList.add("open"); }
function closeModal(id) { document.getElementById(id).classList.remove("open"); }
document.getElementById("about-btn").addEventListener("click", () => openModal("about-overlay"));
document.getElementById("about-close").addEventListener("click", () => closeModal("about-overlay"));
document.getElementById("help-btn").addEventListener("click", () => openModal("help-overlay"));
document.getElementById("help-close").addEventListener("click", () => closeModal("help-overlay"));
document.getElementById("map-help-btn").addEventListener("click", () => openModal("map-help-overlay"));
document.getElementById("map-help-close").addEventListener("click", () => closeModal("map-help-overlay"));
["about-overlay", "help-overlay", "map-help-overlay"].forEach((id) => {
  document.getElementById(id).addEventListener("click", (e) => { if (e.target === e.currentTarget) closeModal(id); });
});
document.getElementById("landing-about-link")?.addEventListener("click", (e) => { e.preventDefault(); openModal("about-overlay"); });
document.getElementById("legend-about-link")?.addEventListener("click", (e) => { e.preventDefault(); openModal("about-overlay"); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal("about-overlay"); closeModal("help-overlay"); closeModal("map-help-overlay");
    closeStatPopover();
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// STAT HINT POPOVERS
// ─────────────────────────────────────────────────────────────────────────────
const statPopover = document.getElementById("stat-popover");
function closeStatPopover() { statPopover.classList.remove("open"); }
document.querySelectorAll(".stat-hint-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const key = btn.dataset.hintKey;
    const text = t(key);
    const rect = btn.getBoundingClientRect();
    statPopover.textContent = text;
    statPopover.style.left = rect.left + "px";
    statPopover.style.top = (rect.bottom + 6) + "px";
    statPopover.classList.toggle("open");
  });
});
document.addEventListener("click", () => closeStatPopover());

// ─────────────────────────────────────────────────────────────────────────────
// EDGE PANEL TOGGLES
// ─────────────────────────────────────────────────────────────────────────────
const landingSideToggle = document.getElementById("landing-side-toggle");
landingSideToggle.addEventListener("click", () => {
  const vl = document.getElementById("view-landing");
  const closed = vl.classList.toggle("side-closed");
  landingSideToggle.textContent = closed ? "›" : "‹";
  setTimeout(() => landingMap.invalidateSize(), 50);
});

const citySideToggle = document.getElementById("city-side-toggle");
citySideToggle.addEventListener("click", () => {
  const vc = document.getElementById("view-city");
  const closed = vc.classList.toggle("side-closed");
  citySideToggle.textContent = closed ? "›" : "‹";
  if (window.innerWidth > 1024) {
    const sideW = closed ? "0px" : "var(--sidebar-w)";
    vc.style.gridTemplateColumns = `${sideW} 1fr 8px 1fr`;
  }
  setTimeout(() => {
    cityLeaflet?.invalidateSize();
    redrawCanvas();
    if (features.length) buildScatter();
  }, 50);
});

document.getElementById("alpha-slider").addEventListener("input", (e) => {
  HEX_ALPHA = e.target.value / 100;
  drawCanvas();
});

// ─────────────────────────────────────────────────────────────────────────────
// VIEW TOGGLE (geographic map ↔ population cartogram)
// ─────────────────────────────────────────────────────────────────────────────
function syncViewToggleUI() {
  const btn = document.getElementById("view-toggle");
  if (!btn) return;
  btn.dataset.mode = viewMode;
  // disable button when cartogram known to be unavailable for this city
  const unavailable = cartogramFeatures === false;
  btn.disabled = unavailable;
  btn.title = unavailable ? t("cartogram_missing") : t("view_toggle_tip");
  // update mode label shown next to the panel title
  const modeLabel = document.getElementById("view-mode-label");
  if (modeLabel) {
    modeLabel.textContent =
      viewMode === "cartogram" ? t("view_mode_cartogram") : t("view_mode_map");
  }
}

document.getElementById("view-toggle").addEventListener("click", async () => {
  if (!currentCity) return;
  const slug = currentCity.slug;

  if (viewMode === "map") {
    // Switch to cartogram. If still loading, await it now.
    if (cartogramFeatures === null) {
      showMapLoading(true);
      cartogramFeatures = await loadCartogramFeatures(slug);
      showMapLoading(false);
      if (currentCity?.slug !== slug) return;
    }
    if (!cartogramFeatures || !cartogramFeatures.length) {
      syncViewToggleUI();
      return;
    }
    viewMode = "cartogram";
    features = cartogramFeatures;

  } else {
    // Switch to geographic map. If the background load hasn't finished, await it.
    if (!mapFeatures || !mapFeatures.length) {
      showMapLoading(true);
      const loaded = await loadCityFeatures(slug);
      showMapLoading(false);
      if (currentCity?.slug !== slug) return;
      if (!loaded || !loaded.length) {
        // Couldn't load — stay on cartogram.
        syncViewToggleUI();
        return;
      }
      mapFeatures = loaded;
    }
    viewMode = "map";
    features = mapFeatures;
  }

  showMapLoading(true);
  syncViewToggleUI();
  refitMapToFeatures();
  resizeCanvas();
  drawCanvas();
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  showMapLoading(false);
});

function refitMapToFeatures() {
  if (!cityLeaflet || !features.length) return;
  let minLat = Infinity, maxLat = -Infinity, minLng = Infinity, maxLng = -Infinity;
  for (const f of features) {
    for (const ring of f.geometry.coordinates) {
      for (const [x, y] of ring) {
        if (x < minLng) minLng = x;
        if (x > maxLng) maxLng = x;
        if (y < minLat) minLat = y;
        if (y > maxLat) maxLat = y;
      }
    }
  }
  cityLeaflet.fitBounds(
    [[minLat, minLng], [maxLat, maxLng]],
    { padding: [10, 10], animate: false }
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LANDING INFO BOX
// ─────────────────────────────────────────────────────────────────────────────
document.getElementById("close-info-box").addEventListener("click", () => {
  document.getElementById("info-box-landing").style.display = "none";
  document.getElementById("expand-info").style.display = "flex";
});
document.getElementById("expand-info").addEventListener("click", () => {
  document.getElementById("info-box-landing").style.display = "";
  document.getElementById("expand-info").style.display = "none";
});

// MOBILE: landing panel
document.getElementById("mobile-landing-open")?.addEventListener("click", () => {
  document.getElementById("view-landing").classList.add("mobile-side-open");
  document.getElementById("mobile-landing-open").classList.add("hidden-btn");
});
document.getElementById("mobile-landing-close")?.addEventListener("click", () => {
  document.getElementById("view-landing").classList.remove("mobile-side-open");
  document.getElementById("mobile-landing-open").classList.remove("hidden-btn");
});

// ─────────────────────────────────────────────────────────────────────────────
// RESIZE HANDLE (drag to resize map vs scatter)
// ─────────────────────────────────────────────────────────────────────────────
const resizeHandle = document.getElementById("resize-handle");
let resizing = false;
resizeHandle.addEventListener("mousedown", (e) => {
  if (window.innerWidth <= 1024) return;
  resizing = true;
  resizeHandle.classList.add("dragging");
  document.body.style.cursor = "col-resize";
  document.body.style.userSelect = "none";
  e.preventDefault();
});
document.addEventListener("mousemove", (e) => {
  if (!resizing) return;
  const vc = document.getElementById("view-city");
  const sidebar = document.getElementById("city-sidebar");
  const sideW = sidebar.getBoundingClientRect().width;
  const vcRect = vc.getBoundingClientRect();
  const handleW = 8;
  const available = vcRect.width - sideW - handleW;
  const mouseX = e.clientX - vcRect.left - sideW;
  const ratio = Math.max(0.15, Math.min(0.85, mouseX / available));
  vc.style.gridTemplateColumns = `${sideW}px ${ratio}fr ${handleW}px ${1 - ratio}fr`;
  cityLeaflet?.invalidateSize();
  redrawCanvas();
});
document.addEventListener("mouseup", () => {
  if (!resizing) return;
  resizing = false;
  resizeHandle.classList.remove("dragging");
  document.body.style.cursor = "";
  document.body.style.userSelect = "";
  if (features.length) buildScatter();
});

// ─────────────────────────────────────────────────────────────────────────────
// CDI RANGE FILTER (dual-thumb slider)
// ─────────────────────────────────────────────────────────────────────────────
const cdiMinSlider = document.getElementById("cdi-min");
const cdiMaxSlider = document.getElementById("cdi-max");
const rangeFill = document.getElementById("range-fill");
const rangeMinVal = document.getElementById("range-min-val");
const rangeMaxVal = document.getElementById("range-max-val");
function fmtSigned(v) { return (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(2); }
function updateRangeUI() {
  const a = parseFloat(cdiMinSlider.value);
  const b = parseFloat(cdiMaxSlider.value);
  cdiMin = Math.min(a, b);
  cdiMax = Math.max(a, b);
  rangeMinVal.textContent = fmtSigned(cdiMin);
  rangeMaxVal.textContent = fmtSigned(cdiMax);
  // Fill 0..100% maps to -1..1
  const pctMin = ((cdiMin + 1) / 2) * 100;
  const pctMax = ((cdiMax + 1) / 2) * 100;
  rangeFill.style.left = pctMin + "%";
  rangeFill.style.width = (pctMax - pctMin) + "%";
}
function onRangeChange() {
  updateRangeUI();
  drawCanvas();
  refreshDots();
  updateCityStats();
}
cdiMinSlider.addEventListener("input", onRangeChange);
cdiMaxSlider.addEventListener("input", onRangeChange);
document.getElementById("range-reset").addEventListener("click", () => {
  cdiMinSlider.value = -1; cdiMaxSlider.value = 1;
  onRangeChange();
});
updateRangeUI();

// ─────────────────────────────────────────────────────────────────────────────
// LANDING MAP
// ─────────────────────────────────────────────────────────────────────────────
const landingMap = L.map("landing-map", { zoomControl: false }).setView([42.5, 12.5], 4);
L.control.zoom({ position: "bottomright" }).addTo(landingMap);
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  subdomains: "abcd", maxZoom: 19,
}).addTo(landingMap);
const landingMarkers = [];

async function buildLandingMarkers() {
  for (const c of CITIES) {
    const has = await cityHasData(c.slug);
    const fillColor = has ? "#b03a2e" : "#bdb6a9";
    const fillOpacity = has ? 0.35 : 0.15;
    const stroke = has ? "#b03a2e" : "#988e7c";
    const marker = L.circleMarker(c.center, {
      radius: has ? 7 : 5, color: stroke, weight: 2,
      fillColor, fillOpacity,
    }).addTo(landingMap);
    marker.bindTooltip(`<b>${c.name}</b>${has ? "" : `<br><span style="opacity:.6">${t("no_data_badge")}</span>`}`,
      { direction: "top" });
    if (has) marker.on("click", () => goCity(c.slug));
    landingMarkers.push(marker);
  }
  try {
    landingMap.fitBounds(L.featureGroup(landingMarkers).getBounds().pad(0.05));
  } catch (e) {}
}

// ─────────────────────────────────────────────────────────────────────────────
// CITY LIST
// ─────────────────────────────────────────────────────────────────────────────
async function renderCityList(filter = "") {
  const q = filter.trim().toLowerCase();
  const el = document.getElementById("city-list");
  el.innerHTML = "";
  for (const c of CITIES) {
    if (q && !c.name.toLowerCase().includes(q)) continue;
    const has = await cityHasData(c.slug);
    const card = document.createElement("div");
    card.className = "city-card" + (has ? "" : " disabled");
    card.innerHTML = `<strong>${c.name}</strong>${has ? '<span class="arrow">›</span>' : `<span class="badge">${t("no_data_badge")}</span>`}`;
    if (has) card.onclick = () => goCity(c.slug);
    el.appendChild(card);
  }
}
document.getElementById("search-input").addEventListener("input", (e) => renderCityList(e.target.value));

// ─────────────────────────────────────────────────────────────────────────────
// CITY MAP (Leaflet base + canvas overlay for hexagons)
// ─────────────────────────────────────────────────────────────────────────────
let cityLeaflet = null;
function initCityMap() {
  if (cityLeaflet) return;
  cityLeaflet = L.map("city-map", { zoomControl: false }).setView([0, 0], 2);
  L.control.zoom({ position: "bottomright" }).addTo(cityLeaflet);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    subdomains: "abcd", maxZoom: 19,
  }).addTo(cityLeaflet);
  cityLeaflet.on("move zoom moveend zoomend", redrawCanvas);
}
const canvas = document.getElementById("map-canvas");
const ctx = canvas.getContext("2d");
function resizeCanvas() {
  const r = document.getElementById("map-panel").getBoundingClientRect();
  canvas.width = r.width * devicePixelRatio;
  canvas.height = r.height * devicePixelRatio;
  canvas.style.width = r.width + "px";
  canvas.style.height = r.height + "px";
}
function project(lng, lat) {
  const pt = cityLeaflet.latLngToContainerPoint(L.latLng(lat, lng));
  return [pt.x * devicePixelRatio, pt.y * devicePixelRatio];
}
function inFilter(cdi) {
  return Number.isFinite(cdi) && cdi >= cdiMin && cdi <= cdiMax;
}
function drawCanvas() {
  if (!cityLeaflet) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const f of features) {
    const p = f.properties;
    const cdi = p.cdi;
    const isHov = p.id === hoveredId, isSel = p.id === selectedId;
    const visible = inFilter(cdi);
    const color = isSel ? "#111" : cdiColor(cdi);
    const alpha = isSel || isHov ? 1.0 : visible ? HEX_ALPHA : HEX_ALPHA_DIM;

    for (const ring of f.geometry.coordinates) {
      ctx.beginPath();
      for (let j = 0; j < ring.length; j++) {
        const [x, y] = project(ring[j][0], ring[j][1]);
        if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.globalAlpha = isSel ? 0.9 : isHov ? 0.65 : visible ? 0.18 : 0.06;
      ctx.strokeStyle = isSel || isHov ? "#333" : "rgba(255,255,255,.7)";
      ctx.lineWidth = isSel ? 2 * devicePixelRatio : 0.6 * devicePixelRatio;
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
}
function redrawCanvas() { resizeCanvas(); drawCanvas(); }

// HIT TEST
function hitTest(cx, cy) {
  const px = cx * devicePixelRatio, py = cy * devicePixelRatio;
  for (let i = features.length - 1; i >= 0; i--) {
    for (const ring of features[i].geometry.coordinates) {
      let inside = false;
      for (let j = 0, k = ring.length - 1; j < ring.length; k = j++) {
        const [xi, yi] = project(ring[j][0], ring[j][1]);
        const [xk, yk] = project(ring[k][0], ring[k][1]);
        if (((yi > py) !== (yk > py)) && (px < ((xk - xi) * (py - yi)) / (yk - yi) + xi)) inside = !inside;
      }
      if (inside) return features[i];
    }
  }
  return null;
}
const mapPanel = document.getElementById("map-panel");
mapPanel.addEventListener("mousemove", (e) => {
  if (!cityLeaflet) return;
  const r = canvas.getBoundingClientRect();
  const hit = hitTest(e.clientX - r.left, e.clientY - r.top);
  const newId = hit ? hit.properties.id : null;
  if (newId !== hoveredId) {
    hoveredId = newId;
    hit ? showTooltip(e, hit) : hideTooltip();
    refreshDots();
    drawCanvas();
  } else if (hit) {
    tooltip.style.left = (e.clientX + 14) + "px";
    tooltip.style.top = (e.clientY - 10) + "px";
  }
});
mapPanel.addEventListener("mouseleave", () => {
  hoveredId = null; hideTooltip(); refreshDots(); drawCanvas();
});
mapPanel.addEventListener("click", (e) => {
  if (!cityLeaflet) return;
  const r = canvas.getBoundingClientRect();
  const hit = hitTest(e.clientX - r.left, e.clientY - r.top);
  if (hit) selectFeature(hit);
});

// ─────────────────────────────────────────────────────────────────────────────
// SCATTER (Opportunity-by-Car  vs.  Opportunity-by-PT)
// ─────────────────────────────────────────────────────────────────────────────
const scatterSVG = document.getElementById("scatter-svg");
const SM = { top: 40, right: 30, bottom: 52, left: 62 };
let scatterDots = [];
function buildScatter() {
  scatterSVG.innerHTML = "";
  if (!features.length) return;
  const W = scatterSVG.clientWidth || scatterSVG.getBoundingClientRect().width;
  const H = scatterSVG.clientHeight || scatterSVG.getBoundingClientRect().height;
  const pw = W - SM.left - SM.right;
  const ph = H - SM.top - SM.bottom;
  scatterSVG.setAttribute("viewBox", `0 0 ${W} ${H}`);

  const carV = features.map((f) => f.properties.o_car);
  const ptV  = features.map((f) => f.properties.o_pt);
  // Use the same axis max so the diagonal y=x is at 45° => visually "balanced"
  const maxAll = Math.max(Math.max(...carV), Math.max(...ptV)) * 1.05 || 1;

  const sx = (v) => SM.left + (v / maxAll) * pw;
  const sy = (v) => SM.top + ph - (v / maxAll) * ph;
  const g = se("g"); scatterSVG.appendChild(g);

  // Soft background quadrants: above diagonal = blue (PT-favoured), below = red.
  const polyAbove = `M ${SM.left},${SM.top} L ${SM.left + pw},${SM.top} L ${SM.left + pw},${sy(maxAll)} L ${sx(maxAll)},${sy(maxAll)} L ${SM.left},${sy(0)} Z`;
  // We just shade triangles via a clip approach (simpler: two polygons).
  const upTri = `M ${SM.left},${SM.top} L ${sx(maxAll)},${sy(maxAll)} L ${SM.left},${sy(maxAll)} Z`;
  const lowTri = `M ${sx(maxAll)},${sy(maxAll)} L ${sx(maxAll)},${sy(0)} L ${SM.left},${sy(0)} Z`;
  // Note: above the diagonal y=x means y>x → PT > Car → CDI<0 → blue
  const above = se("path", { d: upTri, fill: "rgba(31, 78, 140, .07)" });
  const below = se("path", { d: lowTri, fill: "rgba(176, 58, 46, .07)" });
  g.appendChild(below); g.appendChild(above);

  // Small zone labels in opposite corners
  const labelStyle = { "text-anchor": "middle", "dominant-baseline": "middle", fill: "rgba(0,0,0,.22)", "font-size": "10", "font-family": "DM Sans" };
  const ptLbl = se("text", { x: SM.left + pw * 0.22, y: SM.top + ph * 0.18, ...labelStyle });
  ptLbl.textContent = t("info_pt_favoured"); g.appendChild(ptLbl);
  const carLbl = se("text", { x: SM.left + pw * 0.78, y: SM.top + ph * 0.82, ...labelStyle });
  carLbl.textContent = t("info_car_dep"); g.appendChild(carLbl);

  // Diagonal y = x  (CDI = 0)
  g.appendChild(se("line", {
    x1: sx(0), y1: sy(0), x2: sx(maxAll), y2: sy(maxAll),
    stroke: "rgba(0,0,0,.35)", "stroke-width": "1", "stroke-dasharray": "4,3",
  }));
  const diagText = se("text", {
    x: sx(maxAll) - 6, y: sy(maxAll) + 12,
    "text-anchor": "end", fill: "rgba(0,0,0,.45)", "font-size": "9", "font-family": "DM Mono",
  });
  diagText.textContent = t("scatter_diag_label"); g.appendChild(diagText);

  // Axes
  const ac = "rgba(0,0,0,.13)";
  g.appendChild(se("line", { x1: SM.left, y1: SM.top, x2: SM.left, y2: SM.top + ph, stroke: ac }));
  g.appendChild(se("line", { x1: SM.left, y1: SM.top + ph, x2: SM.left + pw, y2: SM.top + ph, stroke: ac }));

  for (let i = 0; i <= 4; i++) {
    const v = (maxAll * i) / 4;
    const x = sx(v), y = sy(v);
    g.appendChild(se("line", { x1: x, y1: SM.top + ph, x2: x, y2: SM.top + ph + 4, stroke: ac }));
    const tx = se("text", { x, y: SM.top + ph + 14, "text-anchor": "middle", fill: "rgba(0,0,0,.4)", "font-size": "9" });
    tx.textContent = fmtK(v); g.appendChild(tx);

    g.appendChild(se("line", { x1: SM.left - 4, y1: y, x2: SM.left, y2: y, stroke: ac }));
    const ty = se("text", { x: SM.left - 7, y, "text-anchor": "end", "dominant-baseline": "middle", fill: "rgba(0,0,0,.4)", "font-size": "9" });
    ty.textContent = fmtK(v); g.appendChild(ty);
  }

  const xl = se("text", { x: SM.left + pw / 2, y: H - 8, "text-anchor": "middle", fill: "rgba(0,0,0,.55)", "font-size": "10" });
  xl.textContent = t("scatter_x_label"); g.appendChild(xl);
  const yl = se("text", { x: 14, y: SM.top + ph / 2, "text-anchor": "middle", fill: "rgba(0,0,0,.55)", "font-size": "10", transform: `rotate(-90,14,${SM.top + ph / 2})` });
  yl.textContent = t("scatter_y_label"); g.appendChild(yl);

  scatterDots = [];
  for (const f of features) {
    const p = f.properties;
    const c = se("circle", {
      cx: sx(p.o_car), cy: sy(p.o_pt), r: 3.5,
      fill: cdiColor(p.cdi), "fill-opacity": "0.78", stroke: "none", "stroke-width": "1.5",
      style: "cursor:pointer;transition:r .1s",
    });
    g.appendChild(c);
    scatterDots.push({ feat: f, el: c });
    c.addEventListener("mouseenter", (e) => { hoveredId = p.id; showTooltip(e, f); drawCanvas(); refreshDots(); });
    c.addEventListener("mouseleave", () => { hoveredId = null; hideTooltip(); drawCanvas(); refreshDots(); });
    c.addEventListener("click", () => selectFeature(f));
  }
  refreshDots();
}
function refreshDots() {
  for (const d of scatterDots) {
    const p = d.feat.properties;
    const isSel = p.id === selectedId, isHov = p.id === hoveredId;
    const visible = inFilter(p.cdi);
    d.el.setAttribute("r", isSel ? 6.5 : isHov ? 5.5 : 3.5);
    d.el.setAttribute("stroke", isSel ? "#111" : isHov ? "rgba(0,0,0,.55)" : "none");
    d.el.setAttribute("fill-opacity", isSel || isHov ? "1" : visible ? "0.78" : "0.14");
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SELECTION & INFO
// ─────────────────────────────────────────────────────────────────────────────
function selectFeature(f) {
  selectedId = f ? f.properties.id : null;
  updateInfoBox(f); refreshDots(); drawCanvas();
}
function updateInfoBox(f) {
  const box = document.getElementById("info-box");
  if (!f) { box.innerHTML = `<p class="no-sel">${t("no_selection")}</p>`; return; }
  const p = f.properties;
  const bucket = cdiBucket(p.cdi);
  const cdiPct = ((Math.max(-1, Math.min(1, p.cdi)) + 1) / 2) * 100;
  box.innerHTML = `
    <p class="info-title">Hexagon #${p.id}</p>
    <div class="info-row">
      <span class="info-key">${t("info_zone")}</span>
      <span class="info-val" style="color:${cdiBucketColor(bucket)};text-transform:capitalize">${cdiBucketLabel(bucket)}</span>
    </div>
    <div class="info-row">
      <span class="info-key">${t("info_cdi")}</span>
      <span class="info-val">${fmtSigned(p.cdi)}</span>
    </div>
    <div class="info-cdi-bar"><div class="info-cdi-marker" style="left:calc(${cdiPct}% - 1px)"></div></div>
    <div class="info-row"><span class="info-key">${t("info_o_car")}</span><span class="info-val">${fmtK(p.o_car)}</span></div>
    <div class="info-row"><span class="info-key">${t("info_o_pt")}</span><span class="info-val">${fmtK(p.o_pt)}</span></div>
    <div class="info-row info-row-muted"><span class="info-key">${t("info_population")}</span><span class="info-val">${Math.round(p.pop || 0).toLocaleString()}</span></div>
  `;
}
function updateCityStats() {
  const n = features.length;
  if (!n) {
    ["s-hex", "s-pop", "s-med-cdi", "s-avg-cdi", "s-pt-share", "s-car-share"].forEach((id) => {
      document.getElementById(id).textContent = "—";
    });
    return;
  }
  const filtered = features.filter((f) => inFilter(f.properties.cdi));
  const cdis = filtered.map((f) => f.properties.cdi).sort((a, b) => a - b);
  const totalPop = filtered.reduce((s, f) => s + (f.properties.pop || 0), 0);
  const wsum = filtered.reduce((s, f) => s + f.properties.cdi * (f.properties.pop || 0), 0);
  const med = cdis.length ? cdis[Math.floor(cdis.length / 2)] : 0;
  const avg = totalPop > 0 ? wsum / totalPop : NaN;
  const ptN = filtered.filter((f) => f.properties.cdi < -0.05).length;
  const carN = filtered.filter((f) => f.properties.cdi > 0.05).length;

  document.getElementById("s-hex").textContent = `${filtered.length.toLocaleString()}` + (filtered.length !== n ? ` / ${n.toLocaleString()}` : "");
  document.getElementById("s-pop").textContent = Math.round(totalPop).toLocaleString();
  document.getElementById("s-med-cdi").textContent = filtered.length ? fmtSigned(med) : "—";
  document.getElementById("s-avg-cdi").textContent = Number.isFinite(avg) ? fmtSigned(avg) : "—";
  document.getElementById("s-pt-share").textContent = filtered.length ? `${(ptN / filtered.length * 100).toFixed(1)}%` : "—";
  document.getElementById("s-car-share").textContent = filtered.length ? `${(carN / filtered.length * 100).toFixed(1)}%` : "—";
}

// ─────────────────────────────────────────────────────────────────────────────
// TOOLTIP
// ─────────────────────────────────────────────────────────────────────────────
const tooltip = document.getElementById("tooltip");
function showTooltip(e, f) {
  const p = f.properties;
  const bucket = cdiBucket(p.cdi);
  tooltip.innerHTML = `
    <strong class="tt-cdi-strong">${t("tt_cdi")}: ${fmtSigned(p.cdi)}</strong>
    <span class="tt-desc">${cdiBucketLabel(bucket)}</span>
    ${t("tt_car")}: ${fmtK(p.o_car)}<br>
    ${t("tt_pt")}: ${fmtK(p.o_pt)}<br>
    ${t("tt_pop")}: ${Math.round(p.pop || 0).toLocaleString()}`;
  tooltip.classList.add("visible");
  tooltip.style.left = (e.clientX + 14) + "px";
  tooltip.style.top = (e.clientY - 10) + "px";
}
function hideTooltip() { tooltip.classList.remove("visible"); }

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE TABS
// ─────────────────────────────────────────────────────────────────────────────
document.querySelectorAll(".mobile-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mobile-tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const panel = btn.dataset.panel;
    if (window.innerWidth <= 1024) {
      document.getElementById("map-panel").style.display = panel === "map" ? "block" : "none";
      document.getElementById("scatter-panel").style.display = panel === "scatter" ? "block" : "none";
      document.getElementById("city-sidebar").style.display = panel === "sidebar" ? "flex" : "none";
      if (panel === "map") { cityLeaflet?.invalidateSize(); redrawCanvas(); }
      if (panel === "scatter" && features.length) setTimeout(() => buildScatter(), 50);
    }
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    document.getElementById("map-panel").style.display = "";
    document.getElementById("scatter-panel").style.display = "";
    document.getElementById("city-sidebar").style.display = "";
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// ROUTING
// ─────────────────────────────────────────────────────────────────────────────
function goCity(slug) { location.hash = "#/city/" + encodeURIComponent(slug); }
function goHome() { location.hash = "#/"; }
function goStats() { location.hash = "#/stats"; }
document.getElementById("back-btn").addEventListener("click", goHome);
document.getElementById("stats-btn").addEventListener("click", goStats);

async function router() {
  const hash = location.hash || "#/";
  if (hash.startsWith("#/city/")) {
    const slug = decodeURIComponent(hash.split("/city/")[1] || "");
    if (!slug || !CITIES_BY_SLUG.has(slug)) { goHome(); return; }
    await showCityView(slug);
  } else if (hash === "#stats" || hash === "#/stats") {
    await showStatsView();
  } else {
    showLandingView();
  }
  // Track route as a GA pageview
  if (typeof gtag === "function") {
    gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: window.location.hash || "#/",
      page_title: document.getElementById("header-sub")?.textContent || "Car Dependency Index",
    });
  }
}

function showLandingView() {
  document.getElementById("view-landing").style.display = "grid";
  document.getElementById("view-city").style.display = "none";
  document.getElementById("view-city").classList.remove("active");
  document.getElementById("view-stats").style.display = "none";
  document.getElementById("back-btn").style.display = "none";
  document.getElementById("header-sub").textContent = t("header_sub");
  setTimeout(() => landingMap.invalidateSize(), 50);
}

async function showCityView(slug) {
  const city = CITIES_BY_SLUG.get(slug);
  currentCity = city;
  document.getElementById("view-landing").style.display = "none";
  document.getElementById("view-city").style.display = "";
  document.getElementById("view-city").classList.add("active");
  document.getElementById("view-stats").style.display = "none";
  document.getElementById("back-btn").style.display = "inline-block";
  document.getElementById("header-sub").textContent = city.name;
  if (window.innerWidth > 1024) {
    document.getElementById("view-city").style.gridTemplateColumns = `var(--sidebar-w) 1fr 8px 1fr`;
  }

  // ── Reset state and tear down the previous city IMMEDIATELY (before any await).
  features = []; mapFeatures = []; cartogramFeatures = null; viewMode = "cartogram";
  selectedId = null; hoveredId = null;

  if (cityLeaflet) {
    cityLeaflet.remove();
    cityLeaflet = null;
  }
  if (canvas && ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  document.getElementById("view-city").classList.remove("side-closed");
  citySideToggle.textContent = "‹";
  cdiMinSlider.value = -1; cdiMaxSlider.value = 1; updateRangeUI();
  updateInfoBox(null);
  updateCityStats();
  syncViewToggleUI();
  document.querySelectorAll(".mobile-tab").forEach((b) => b.classList.remove("active"));
  document.querySelector('.mobile-tab[data-panel="map"]')?.classList.add("active");
  if (window.innerWidth <= 1024) {
    document.getElementById("map-panel").style.display = "block";
    document.getElementById("scatter-panel").style.display = "none";
    document.getElementById("city-sidebar").style.display = "none";
  }

  document.getElementById("info-box").innerHTML =
    `<p style="color:var(--muted);font-size:.8rem">Loading ${city.name}…</p>`;

  // ── Yield once so the cleared state paints, then build the empty Leaflet map
  // centered on the city's known coordinates BEFORE the fetch starts.
  await new Promise((r) => requestAnimationFrame(r));
  initCityMap();
  cityLeaflet.invalidateSize({ animate: false });
  if (city.center && Number.isFinite(city.zoom)) {
    cityLeaflet.setView(city.center, city.zoom, { animate: false });
  }

  // Show the loading overlay over the (now-centered, empty) map.
  showMapLoading(true);

  const loadStartedFor = slug;

  // ── Load the cartogram FIRST (it's the default view).
  const cg = await loadCartogramFeatures(slug);
  if (currentCity?.slug !== loadStartedFor) { showMapLoading(false); return; }

  if (cg && cg.length) {
    // Cartogram available → use it as the initial view.
    cartogramFeatures = cg;
    viewMode = "cartogram";
    features = cartogramFeatures;

    if (window.innerWidth <= 1024) {
      document.getElementById("map-panel").style.display = "block";
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      cityLeaflet.invalidateSize({ animate: false });
    }

    // Fit bounds to the cartogram and render.
    refitMapToFeatures();
    resizeCanvas();
    drawCanvas();
    buildScatter();
    updateCityStats();
    syncViewToggleUI();
    updateInfoBox(null);
    showMapLoading(false);   // hide immediately, no rAF dance

    // Wait for the browser to actually paint the hexes before hiding the spinner.
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    showMapLoading(false);

    // Load the geographic hexes in the background so the toggle is instant.
    loadCityFeatures(slug).then((loaded) => {
      if (currentCity?.slug !== loadStartedFor) return;
      if (loaded) mapFeatures = loaded;
      syncViewToggleUI();
    });

  } else {
    // No cartogram for this city → fall back to geographic map.
    cartogramFeatures = cg; // false/null — toggle stays disabled
    viewMode = "map";

    const loaded = await loadCityFeatures(slug);
    if (currentCity?.slug !== loadStartedFor) { showMapLoading(false); return; }

    if (!loaded) {
      showMapLoading(false);
      document.getElementById("info-box").innerHTML =
        `<p style="color:#b03a2e">Could not load data for ${city.name}.</p>`;
      return;
    }

    mapFeatures = loaded;
    features = mapFeatures;

    if (window.innerWidth <= 1024) {
      document.getElementById("map-panel").style.display = "block";
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      cityLeaflet.invalidateSize({ animate: false });
    }

    refitMapToFeatures();
    resizeCanvas();
    drawCanvas();
    buildScatter();
    updateCityStats();
    syncViewToggleUI();
    updateInfoBox(null);

    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    showMapLoading(false);
  }
}

let _loadingHideTimer = null;
function showMapLoading(on) {
  let el = document.getElementById("map-loading");
  if (on) {
    if (_loadingHideTimer) { clearTimeout(_loadingHideTimer); _loadingHideTimer = null; }
    if (!el) {
      el = document.createElement("div");
      el.id = "map-loading";
      el.innerHTML = `<div class="map-loading-spinner"></div><span>${t("loading") || "Loading…"}</span>`;
      document.getElementById("map-panel").appendChild(el);
    }
    el.style.display = "flex";
  } else if (el) {
    el.style.display = "none";
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CITY DATA LOADER (geojson + CSV join)
// ─────────────────────────────────────────────────────────────────────────────
async function loadCityFeatures(slug) {
  try {
    const [geoRes, csvRes] = await Promise.all([
      fetch(dataPath(slug, "hexes.geojson")),
      fetch(dataPath(slug, "cdi.csv")),
    ]);
    if (!geoRes.ok || !csvRes.ok) throw new Error("missing data");
    const gj = await geoRes.json();
    const csvTxt = await csvRes.text();
    const parsed = Papa.parse(csvTxt, { header: true, dynamicTyping: true, skipEmptyLines: true });
    const csvMap = new Map();
    for (const r of parsed.data) {
      if (r.hexagon_id != null) csvMap.set(String(r.hexagon_id), r);
    }
    const out = [];
    for (const f of gj.features || []) {
      const k = f.properties?.id;
      if (k == null) continue;
      const row = csvMap.get(String(k));
      if (!row) continue;
      const cdi = Number(row.CDI);
      if (!Number.isFinite(cdi)) continue;
      out.push({
        type: "Feature",
        geometry: f.geometry,
        properties: {
          id: k,
          o_car: Number(row.o_score_car),
          o_pt: Number(row.o_score_pt),
          cdi,
          pop: Number(row.population) || Number(f.properties.population) || 0,
        },
      });
    }
    return out;
  } catch (e) {
    console.error("loadCityFeatures failed", slug, e);
    return null;
  }
}

// Cartogram loader. The cartogram geojson has CDI/o_score_pt/o_score_car already
// in feature properties — no CSV join needed. Each feature's `id` matches the
// geographic hexes' `id` so we can preserve selection/hover across the toggle.
async function loadCartogramFeatures(slug) {
  try {
    const res = await fetch(dataPath(slug, `cartogram.geojson`));
    if (!res.ok) return false;
    const gj = await res.json();
    const out = [];
    for (const f of gj.features || []) {
      const p = f.properties || {};
      const cdi = Number(p.CDI);
      if (!Number.isFinite(cdi)) continue;
      out.push({
        type: "Feature",
        geometry: f.geometry,
        properties: {
          id: p.id,
          o_car: Number(p.o_score_car),
          o_pt: Number(p.o_score_pt),
          cdi,
          pop: Number(p.population) || 0,
        },
      });
    }
    return out;
  } catch (e) {
    console.error("loadCartogramFeatures failed", slug, e);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// STATS VIEW
// ─────────────────────────────────────────────────────────────────────────────
let cityStats = null;

async function showStatsView() {
  document.getElementById("view-landing").style.display = "none";
  document.getElementById("view-city").style.display = "none";
  document.getElementById("view-city").classList.remove("active");
  document.getElementById("view-stats").style.display = "block";
  document.getElementById("back-btn").style.display = "inline-block";
  document.getElementById("header-sub").textContent = t("stats_title");

  if (!cityStats) {
    document.getElementById("stats-loading").style.display = "";
    document.getElementById("stats-empty").style.display = "none";
    document.getElementById("stats-content").style.display = "none";
    cityStats = [];

    // Probe each city in parallel; only keep ones with bundled data.
    const tasks = CITIES.map(async (c) => {
      const has = await cityHasData(c.slug);
      if (!has) return null;
      const feats = await loadCityFeatures(c.slug);
      if (!feats || !feats.length) return null;
      return summariseCity(c, feats);
    });
    const results = (await Promise.all(tasks)).filter(Boolean);
    cityStats = results;
  }

  document.getElementById("stats-loading").style.display = "none";
  if (!cityStats.length) {
    document.getElementById("stats-empty").style.display = "";
    document.getElementById("stats-content").style.display = "none";
    return;
  }
  document.getElementById("stats-empty").style.display = "none";
  document.getElementById("stats-content").style.display = "";
  renderStats();
}

function summariseCity(city, feats) {
  const n = feats.length;
  const pop = feats.reduce((s, f) => s + (f.properties.pop || 0), 0);
  const cdis = feats.map((f) => f.properties.cdi).sort((a, b) => a - b);
  const med = cdis[Math.floor(n / 2)];
  const wsumCdi = pop > 0 ? feats.reduce((s, f) => s + f.properties.cdi * (f.properties.pop || 0), 0) / pop : NaN;
  const wsumCar = pop > 0 ? feats.reduce((s, f) => s + f.properties.o_car * (f.properties.pop || 0), 0) / pop : NaN;
  const wsumPt  = pop > 0 ? feats.reduce((s, f) => s + f.properties.o_pt  * (f.properties.pop || 0), 0) / pop : NaN;
  const ptShare  = feats.filter((f) => f.properties.cdi < -0.05).length / n;
  const carShare = feats.filter((f) => f.properties.cdi >  0.05).length / n;

  // CDF of CDI by population (sorted ascending by cdi)
  const sorted = [...feats].sort((a, b) => a.properties.cdi - b.properties.cdi);
  const cdf = [];
  let running = 0;
  for (const f of sorted) {
    running += f.properties.pop || 0;
    cdf.push({ cdi: f.properties.cdi, cum: pop > 0 ? running / pop : 0 });
  }

  return {
    slug: city.slug, city: city.name,
    n, pop,
    medCdi: med,
    avgCdi: wsumCdi,
    avgCar: wsumCar,
    avgPt: wsumPt,
    ptShare, carShare,
    cdf,
  };
}

function renderStats() {
  const sortKey = document.getElementById("stats-sort").value;
  const data = [...cityStats].sort((a, b) => {
    if (sortKey === "avg_cdi") return a.avgCdi - b.avgCdi;          // ascending: most PT-friendly first
    if (sortKey === "med_cdi") return a.medCdi - b.medCdi;
    if (sortKey === "pt_share") return b.ptShare - a.ptShare;        // descending
    if (sortKey === "population") return b.pop - a.pop;
    return 0;
  });

  // ─── Diverging bar chart of pop-weighted CDI ──────────────────────────────
  const chartEl = document.getElementById("stats-bar-chart");
  chartEl.innerHTML = "";
  const cdiVals = data.map((d) => d.avgCdi).filter(Number.isFinite);
  const absMax = Math.max(0.05, Math.max(...cdiVals.map(Math.abs))) * 1.05;
  for (const d of data) {
    const row = document.createElement("div");
    row.className = "cdi-bar-row";
    row.title = d.city + " — CDI " + fmtSigned(d.avgCdi);
    row.onclick = () => goCity(d.slug);
    const fill = document.createElement("div");
    const widthPct = (Math.abs(d.avgCdi) / absMax) * 50;
    if (d.avgCdi >= 0) {
      fill.style.left = "50%"; fill.style.width = widthPct + "%";
      fill.style.background = cdiColor(d.avgCdi);
    } else {
      fill.style.left = (50 - widthPct) + "%"; fill.style.width = widthPct + "%";
      fill.style.background = cdiColor(d.avgCdi);
    }
    fill.className = "cdi-bar-fill";
    fill.style.top = "0"; fill.style.bottom = "0";
    const track = document.createElement("div");
    track.className = "cdi-bar-track";
    const zero = document.createElement("div");
    zero.className = "cdi-bar-zero";
    track.appendChild(fill); track.appendChild(zero);
    row.innerHTML = `<div class="cdi-bar-label">${d.city}</div>`;
    row.appendChild(track);
    const pctEl = document.createElement("div");
    pctEl.className = "cdi-bar-pct";
    pctEl.textContent = fmtSigned(d.avgCdi);
    row.appendChild(pctEl);
    chartEl.appendChild(row);
  }

  // ─── City-level scatter (avgCar vs avgPt) ──────────────────────────────────
  const svg = document.getElementById("stats-city-scatter");
  svg.innerHTML = "";
  const W = svg.clientWidth || 600, H = svg.clientHeight || 340;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  const ms = { top: 30, right: 30, bottom: 45, left: 60 };
  const spw = W - ms.left - ms.right, sph = H - ms.top - ms.bottom;
  const maxAll = Math.max(
    Math.max(...data.map((d) => d.avgCar || 0)),
    Math.max(...data.map((d) => d.avgPt || 0))
  ) * 1.1 || 1;
  const ssx = (v) => ms.left + (v / maxAll) * spw;
  const ssy = (v) => ms.top + sph - (v / maxAll) * sph;
  const sg = se("g"); svg.appendChild(sg);

  // Diagonal CDI=0 line
  sg.appendChild(se("line", { x1: ssx(0), y1: ssy(0), x2: ssx(maxAll), y2: ssy(maxAll), stroke: "rgba(0,0,0,.3)", "stroke-width": "1", "stroke-dasharray": "4,3" }));

  const sac = "rgba(0,0,0,.15)";
  sg.appendChild(se("line", { x1: ms.left, y1: ms.top, x2: ms.left, y2: ms.top + sph, stroke: sac }));
  sg.appendChild(se("line", { x1: ms.left, y1: ms.top + sph, x2: ms.left + spw, y2: ms.top + sph, stroke: sac }));
  for (let i = 0; i <= 4; i++) {
    const v = (maxAll * i) / 4;
    const x = ssx(v), y = ssy(v);
    sg.appendChild(se("line", { x1: x, y1: ms.top + sph, x2: x, y2: ms.top + sph + 4, stroke: sac }));
    const tx = se("text", { x, y: ms.top + sph + 14, "text-anchor": "middle", fill: "rgba(0,0,0,.4)", "font-size": "9" });
    tx.textContent = fmtK(v); sg.appendChild(tx);
    sg.appendChild(se("line", { x1: ms.left - 4, y1: y, x2: ms.left, y2: y, stroke: sac }));
    const ty = se("text", { x: ms.left - 7, y, "text-anchor": "end", "dominant-baseline": "middle", fill: "rgba(0,0,0,.4)", "font-size": "9" });
    ty.textContent = fmtK(v); sg.appendChild(ty);
  }
  const sxl = se("text", { x: ms.left + spw / 2, y: H - 8, "text-anchor": "middle", fill: "rgba(0,0,0,.55)", "font-size": "10" });
  sxl.textContent = t("scatter_x_label"); sg.appendChild(sxl);
  const syl = se("text", { x: 14, y: ms.top + sph / 2, "text-anchor": "middle", fill: "rgba(0,0,0,.55)", "font-size": "10", transform: `rotate(-90,14,${ms.top + sph / 2})` });
  syl.textContent = t("scatter_y_label"); sg.appendChild(syl);

  for (const d of data) {
    const cx = ssx(d.avgCar), cy = ssy(d.avgPt);
    const rPx = Math.max(5, Math.min(18, Math.sqrt((d.pop || 1) / 50000)));
    const dot = se("circle", {
      cx, cy, r: rPx,
      fill: cdiColor(d.avgCdi), "fill-opacity": "0.78",
      stroke: "#fff", "stroke-width": "1.5",
      style: "cursor:pointer",
    });
    dot.addEventListener("click", () => goCity(d.slug));
    dot.addEventListener("mouseenter", (e) => {
      tooltip.innerHTML = `<strong>${d.city}</strong>${t("tt_cdi")}: ${fmtSigned(d.avgCdi)}<br>${t("tt_car")}: ${fmtK(d.avgCar)}<br>${t("tt_pt")}: ${fmtK(d.avgPt)}<br>${t("tt_pop")}: ${Math.round(d.pop).toLocaleString()}`;
      tooltip.classList.add("visible");
      tooltip.style.left = (e.clientX + 14) + "px";
      tooltip.style.top = (e.clientY - 10) + "px";
    });
    dot.addEventListener("mousemove", (e) => { tooltip.style.left = (e.clientX + 14) + "px"; tooltip.style.top = (e.clientY - 10) + "px"; });
    dot.addEventListener("mouseleave", () => { tooltip.classList.remove("visible"); });
    sg.appendChild(dot);
    const lbl = se("text", { x: cx, y: cy - rPx - 3, "text-anchor": "middle", fill: "rgba(0,0,0,.6)", "font-size": "9", "font-family": "DM Sans", style: "pointer-events:none" });
    lbl.textContent = d.city; sg.appendChild(lbl);
  }

  // ─── CDF of CDI by population ─────────────────────────────────────────────
  const cdfSvg = document.getElementById("stats-cdf");
  cdfSvg.innerHTML = "";
  const W2 = cdfSvg.clientWidth || 600, H2 = cdfSvg.clientHeight || 280;
  cdfSvg.setAttribute("viewBox", `0 0 ${W2} ${H2}`);
  const m2 = { top: 18, right: 18, bottom: 36, left: 44 };
  const pw2 = W2 - m2.left - m2.right, ph2 = H2 - m2.top - m2.bottom;
  const cx2 = (v) => m2.left + ((v + 1) / 2) * pw2;
  const cy2 = (v) => m2.top + ph2 - v * ph2;
  const cdfG = se("g"); cdfSvg.appendChild(cdfG);
  // Shaded background bands (blue / red) as a hint
  cdfG.appendChild(se("rect", { x: m2.left, y: m2.top, width: cx2(0) - m2.left, height: ph2, fill: "rgba(31, 78, 140, .04)" }));
  cdfG.appendChild(se("rect", { x: cx2(0), y: m2.top, width: m2.left + pw2 - cx2(0), height: ph2, fill: "rgba(176, 58, 46, .04)" }));
  // Zero line
  cdfG.appendChild(se("line", { x1: cx2(0), y1: m2.top, x2: cx2(0), y2: m2.top + ph2, stroke: "rgba(0,0,0,.25)", "stroke-dasharray": "3,3" }));
  const ac2 = "rgba(0,0,0,.18)";
  cdfG.appendChild(se("line", { x1: m2.left, y1: m2.top, x2: m2.left, y2: m2.top + ph2, stroke: ac2 }));
  cdfG.appendChild(se("line", { x1: m2.left, y1: m2.top + ph2, x2: m2.left + pw2, y2: m2.top + ph2, stroke: ac2 }));
  // Ticks
  for (const xv of [-1, -0.5, 0, 0.5, 1]) {
    const x = cx2(xv);
    cdfG.appendChild(se("line", { x1: x, y1: m2.top + ph2, x2: x, y2: m2.top + ph2 + 4, stroke: ac2 }));
    const tx = se("text", { x, y: m2.top + ph2 + 14, "text-anchor": "middle", fill: "rgba(0,0,0,.45)", "font-size": "9", "font-family": "DM Mono" });
    tx.textContent = fmtSigned(xv); cdfG.appendChild(tx);
  }
  for (const yv of [0, 0.25, 0.5, 0.75, 1]) {
    const y = cy2(yv);
    cdfG.appendChild(se("line", { x1: m2.left - 4, y1: y, x2: m2.left, y2: y, stroke: ac2 }));
    const ty = se("text", { x: m2.left - 6, y, "text-anchor": "end", "dominant-baseline": "middle", fill: "rgba(0,0,0,.45)", "font-size": "9", "font-family": "DM Mono" });
    ty.textContent = (yv * 100).toFixed(0) + "%"; cdfG.appendChild(ty);
  }
  // Axis labels
  const cdfXL = se("text", { x: m2.left + pw2 / 2, y: H2 - 6, "text-anchor": "middle", fill: "rgba(0,0,0,.55)", "font-size": "10" });
  cdfXL.textContent = "CDI"; cdfG.appendChild(cdfXL);
  // Lines
  data.forEach((d, idx) => {
    if (!d.cdf || !d.cdf.length) return;
    const stroke = cdiColor(d.avgCdi);
    let path = "";
    for (let i = 0; i < d.cdf.length; i++) {
      const pt = d.cdf[i];
      path += (i === 0 ? "M" : "L") + cx2(pt.cdi) + "," + cy2(pt.cum);
    }
    const p = se("path", { d: path, fill: "none", stroke, "stroke-width": "1.4", "stroke-opacity": "0.7" });
    p.addEventListener("mouseenter", (e) => {
      p.setAttribute("stroke-width", "2.5"); p.setAttribute("stroke-opacity", "1");
      tooltip.innerHTML = `<strong>${d.city}</strong>${t("tt_cdi")} ${t("stats_th_avg")}: ${fmtSigned(d.avgCdi)}<br>${t("tt_pop")}: ${Math.round(d.pop).toLocaleString()}`;
      tooltip.classList.add("visible");
      tooltip.style.left = (e.clientX + 14) + "px"; tooltip.style.top = (e.clientY - 10) + "px";
    });
    p.addEventListener("mousemove", (e) => { tooltip.style.left = (e.clientX + 14) + "px"; tooltip.style.top = (e.clientY - 10) + "px"; });
    p.addEventListener("mouseleave", () => { p.setAttribute("stroke-width", "1.4"); p.setAttribute("stroke-opacity", "0.7"); tooltip.classList.remove("visible"); });
    p.addEventListener("click", () => goCity(d.slug));
    p.style.cursor = "pointer";
    cdfG.appendChild(p);
  });

  // ─── Table ────────────────────────────────────────────────────────────────
  const tbody = document.getElementById("stats-tbody");
  tbody.innerHTML = "";
  for (const d of data) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="city-name-cell">${d.city}</td>
      <td>${d.n.toLocaleString()}</td>
      <td>${Math.round(d.pop).toLocaleString()}</td>
      <td>${fmtSigned(d.medCdi)}</td>
      <td>${fmtSigned(d.avgCdi)}</td>
      <td>${(d.ptShare * 100).toFixed(1)}%</td>
      <td>${(d.carShare * 100).toFixed(1)}%</td>`;
    tr.querySelector(".city-name-cell").addEventListener("click", () => goCity(d.slug));
    tbody.appendChild(tr);
  }
}

document.getElementById("stats-sort").addEventListener("change", () => { if (cityStats) renderStats(); });

// ─────────────────────────────────────────────────────────────────────────────
// RESIZE
// ─────────────────────────────────────────────────────────────────────────────
const ro = new ResizeObserver(() => {
  if (document.getElementById("view-city").style.display !== "none") {
    cityLeaflet?.invalidateSize(); redrawCanvas();
    if (features.length) buildScatter();
  }
  landingMap?.invalidateSize();
});
ro.observe(document.getElementById("app"));

// ─────────────────────────────────────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────────────────────────────────────
function se(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}
function fmtK(v) {
  if (!Number.isFinite(v)) return "—";
  return v >= 1000 ? (v / 1000).toFixed(1) + "k" : Math.round(v).toString();
}

// ─────────────────────────────────────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────────────────────────────────────
window.addEventListener("hashchange", router);
window.addEventListener("load", async () => {
  applyLanguage();
  await loadManifest();
  await renderCityList();          // initial list (with availability badges)
  buildLandingMarkers();           // async, paints pins as availability resolves
  router();
  setTimeout(() => document.getElementById("loading")?.classList.add("fade"), 300);
});
