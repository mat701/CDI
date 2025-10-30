<script>

  // Global list to be filled from data/index.json
  let CITIES = [];

  async function loadCitiesManifest() {
    const res = await fetch('data/index.json', { cache: 'no-store' });
    if (!res.ok) {
      console.error('❌ Failed to load data/index.json');
      return;
    }
    const manifest = await res.json();

    // Build each city definition automatically
    CITIES = manifest.map(m => ({
      name: m.name || (m.slug[0].toUpperCase() + m.slug.slice(1)),
      slug: m.slug,
      center: m.center || [42.5, 12.5],
      zoom: m.zoom || 9,
      layers: [
        {
          name: 'CDI (hex grid)',
          url: `data/${m.slug}/hexes.geojson`,
          join: {
            csv: `data/${m.slug}/cdi.csv`,
            csvId: 'hexagon_id',
            geoId: 'id',
            valueColumn: 'CDI'
          }
        }
      ]
    }));
  }

  const REPO_URL = 'https://github.com/mat701/CDI'; // set your GitHub repo URL here
  document.getElementById('repoLink').href = REPO_URL;

  // =====================
  // LANDING: list + pins
  // =====================
  
  // Boot AFTER manifest is loaded (build pins + list, then start router)
  async function boot() {
    await loadCitiesManifest();

    const landingMap = L.map('mapLanding', { zoomControl: true }).setView([42.5, 12.5], 5);
    const baseLanding = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; OpenStreetMap & CARTO', maxZoom: 19 }).addTo(landingMap);

    const markers = [];
    CITIES.forEach(c => {
      const m = L.marker(c.center).addTo(landingMap).bindPopup(`<b>${c.name}</b><br/><a href="#/city/${c.slug}">Open map</a>`);
      m.on('click', () => goCity(c.slug));
      markers.push(m);
    });
    try {
      const group = L.featureGroup(markers);
      landingMap.fitBounds(group.getBounds().pad(0.2));
    } catch(e) {}

    const listEl = document.getElementById('cityList');
    function renderList(filter=''){
      const q = filter.trim().toLowerCase();
      listEl.innerHTML = '';
      CITIES.filter(c => !q || c.name.toLowerCase().includes(q)).forEach(c => {
        const card = document.createElement('div');
        card.className = 'city-card';
        card.innerHTML = `<div><div><strong>${c.name}</strong></div><div class=\"muted\">${c.layers.length} layer${c.layers.length>1?'s':''}</div></div><div>›</div>`;
        card.onclick = () => goCity(c.slug);
        listEl.appendChild(card);
      });
    }
    renderList();

    document.getElementById('search').addEventListener('input', (e)=> renderList(e.target.value));
    document.getElementById('clear').addEventListener('click', ()=>{ document.getElementById('search').value=''; renderList(''); });

    router()
  }

  // =====================
  // COLOR SCALES
  // =====================
  function fmt(v){ return Number.isFinite(v) ? new Intl.NumberFormat().format(v) : 'n/a'; }

  const BLUE  = [0x00, 0x00, 0x4C];   // ~seismic min
  const MID   = [0xF0, 0xF0, 0xF0];   // softer mid (try F7F7F7, EDEDED, etc.)
  const RED   = [0x80, 0x00, 0x00];   // ~seismic max

  function lerp(a, b, t) { return a + (b - a) * t; }
  function toHex(rgb) {
    return '#' + rgb.map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
  }

  /**
   * Piecewise-linear color:
   * v in [-1, 0]: BLUE → MID
   * v in [ 0, 1]: MID  → RED
   */
  const SEISMIC_COLORS = [
    { stop: 0.00, rgb: [0x00, 0x00, 0x4C] },  // deep blue
    { stop: 0.25, rgb: [0x6E, 0x8B, 0xC6] },  // light blue
    { stop: 0.50, rgb: [0xFF, 0xFF, 0xFF] },  // white
    { stop: 0.75, rgb: [0xD6, 0x83, 0x83] },  // light red
    { stop: 1.00, rgb: [0x80, 0x00, 0x00] }   // dark red
  ];

  function lerp(a, b, t) { return a + (b - a) * t; }

  function toHex(rgb) {
    return '#' + rgb.map(v => Math.round(v).toString(16).padStart(2,'0')).join('');
  }

  function seismicColor(v) {
    if (!Number.isFinite(v)) return '#cccccc';
    const t = Math.max(-1, Math.min(1, v));      // clamp
    const x = (t + 1) / 2;                       // normalize to [0,1]

    // find the two color stops surrounding x
    let lower = SEISMIC_COLORS[0], upper = SEISMIC_COLORS[SEISMIC_COLORS.length - 1];
    for (let i = 0; i < SEISMIC_COLORS.length - 1; i++) {
      if (x >= SEISMIC_COLORS[i].stop && x <= SEISMIC_COLORS[i + 1].stop) {
        lower = SEISMIC_COLORS[i];
        upper = SEISMIC_COLORS[i + 1];
        break;
      }
    }

    const u = (x - lower.stop) / (upper.stop - lower.stop);
    const rgb = [
      lerp(lower.rgb[0], upper.rgb[0], u),
      lerp(lower.rgb[1], upper.rgb[1], u),
      lerp(lower.rgb[2], upper.rgb[2], u)
    ];
    return toHex(rgb);
  }


  function makeQuantileScale(values, n = 7) {
    const sorted = values.filter(v => Number.isFinite(v)).sort((a,b) => a-b);
    if (!sorted.length) return v => '#cccccc';
    const qs = Array.from({length:n+1}, (_,i)=> sorted[Math.min(sorted.length-1, Math.floor(i*(sorted.length-1)/n))]);
    const palette = ['#f1eef6','#d4b9da','#c994c7','#df65b0','#e7298a','#ce1256','#91003f'];
    return function(v){ if (!Number.isFinite(v)) return '#cccccc'; for (let i=0;i<n;i++) if (v <= qs[i+1]) return palette[i]; return palette[n-1]; };
  }

  // =====================
  // LEGEND CONTROL
  // =====================
  /*const Legend = L.Control.extend({
    options: { position: 'bottomright' },
    onAdd: function(){ const d = L.DomUtil.create('div','legend'); d.innerHTML = '<b>Legend</b><div class="scale" id="legend-scale"></div><div class="muted" id="legend-note"></div>'; this._div=d; return d; },
    updateSwatches: function(colors, labels){
      const scale=this._div.querySelector('#legend-scale');
      scale.innerHTML='';
      for(let i=0;i<colors.length;i++){
        const sw=document.createElement('div'); sw.className='swatch'; sw.style.background=colors[i]; sw.title=labels && labels[i] ? labels[i] : '';
        scale.appendChild(sw);
      }
      this._div.querySelector('#legend-note').textContent = '';
    },
    note: function(text){ this._div.querySelector('#legend-note').textContent = text || ''; }
  });*/
  const Legend = L.Control.extend({
    options: { position: 'topright' },

    onAdd: function () {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML = `
        <b>CDI</b>
        <div class="legend-bar">
          <div class="legend-gradient"></div>
          <div class="legend-labels">
            <div><b>1</b></div>
            <div><b>0.5</b></div>
            <div><b>0</b></div>
            <div><b>-0.5</b></div>
            <div><b>-1</b></div>
          </div>
        </div>`;
      return (this._div = div);
    },

    // not used for continuous scale, but keep for compatibility
    updateSwatches: function () {},
    note: function (text) {
      if (this._div) this._div.querySelector('b').textContent = text || 'CDI';
    }
  });


  // =====================
  // CSV LOADER / JOIN
  // =====================
  async function loadCsvMap(url, keyCol, valueCol){
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to load CSV '+url);
    const text = await res.text();
    const parsed = Papa.parse(text, { header:true, dynamicTyping:true, skipEmptyLines:true });
    const map = new Map();
    parsed.data.forEach(r => {
      const k = r[keyCol];
      const v = r[valueCol];
      if (k !== undefined) map.set(String(k), v);
    });
    return map;
  }

  // =====================
  // CITY VIEW (reuses Leaflet)
  // =====================
  let cityMap, layerControl, legend, baseLayer;
  let currentOverlays = [];

  async function loadCity(slug){
    if (layerControl) {
      // remove overlay layers from the map and from the control
      currentOverlays.forEach(lyr => {
        try { cityMap.removeLayer(lyr); } catch(e){}
        try { layerControl.removeLayer(lyr); } catch(e){}
      });
      currentOverlays = [];

      // (optional but clean) rebuild the control so no stale entries remain
      try { cityMap.removeControl(layerControl); } catch(e){}
      layerControl = L.control.layers({ 'Light': baseLayer }, {}, { collapsed: false }).addTo(cityMap);
    }

    // reset legend (optional)
    if (legend) { legend.note(''); }

    const city = CITIES.find(c => c.slug === slug);
    if (!city) return goHome();

    // swap views
    document.getElementById('view-landing').style.display='grid'; // keep layout while we prep
    document.getElementById('view-city').style.display='block';
    document.getElementById('view-landing').style.display='none';
    document.getElementById('subtitle').textContent = city.name;
    document.getElementById('cityBreadcrumb').textContent = city.name;

    if (!cityMap){
      cityMap = L.map('map', { zoomControl:true });
      baseLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; OpenStreetMap & CARTO', maxZoom:19 }).addTo(cityMap);
      layerControl = L.control.layers({ 'Light': baseLayer }, {}, { collapsed:false }).addTo(cityMap);
      legend = new Legend({ position: 'topright' }); legend.addTo(cityMap);
    }

    cityMap.setView(city.center, city.zoom || 12);

    // remove existing overlays from control
    const toRemove = [];
    cityMap.eachLayer(l => { /* keep base */ });
    if (layerControl && layerControl._layers){
      Object.values(layerControl._layers).forEach(obj => { if (obj.overlay) toRemove.push(obj.layer); });
      toRemove.forEach(l => { try{ cityMap.removeLayer(l); }catch(e){} });
    }

    const overlayGroups = {};

    for (const def of city.layers){
      try {
        const res = await fetch(def.url);
        if (!res.ok) throw new Error('failed '+def.url);
        const gj = await res.json();

        // Optional CSV join for CDI
        let joinMap = null, csvId, geoId, valueCol;
        if (def.join){
          csvId = def.join.csvId || 'hexagon_id';
          geoId = def.join.geoId || 'id';
          valueCol = def.join.valueColumn || 'CDI';
          joinMap = await loadCsvMap(def.join.csv, csvId, valueCol);
          // annotate features with CDI
          (gj.features||[]).forEach(f => {
            const k = f.properties?.[geoId];
            if (k !== undefined){
              const v = joinMap.get(String(k));
              if (v !== undefined) f.properties[valueCol] = v;
            }
          });
        }

        // Determine color function
        let styleColor, legendColors, legendLabels, legendNote;
        if (def.join){
          styleColor = f => seismicColor(Number(f.properties?.[valueCol]));
          // Build a simple diverging legend with 9 swatches from -1 .. 1
          const steps = 9;
          legendColors = Array.from({length:steps}, (_,i)=> seismicColor((i/(steps-1))*2-1));
          legendLabels = ['-1 … 1 scale'];
          legendNote = `${valueCol}`;
        } else {
          // fallback quantiles by def.valueProp
          const vals=[]; (gj.features||[]).forEach(f=>{ const v=Number(f.properties?.[def.valueProp]); if(Number.isFinite(v)) vals.push(v); });
          const color = makeQuantileScale(vals, 7);
          styleColor = f => color(Number(f.properties?.[def.valueProp]));
          legendColors = ['#f1eef6','#d4b9da','#c994c7','#df65b0','#e7298a','#ce1256','#91003f'];
          legendNote = def.valueProp || '';
        }


        const layer = L.geoJSON(gj, {
          style: f => ({ color:'transparent'/*'#333'*/, weight:0, fillOpacity:0.65, fillColor: seismicColor(Number(f.properties?.[valueCol]))/*styleColor(f)*/ }),
          onEachFeature:(feature, lyr)=>{ /* ... */ }
        });

        // attach handler BEFORE adding the layer
        layer.on('add', () => {
          /*legend.updateSwatches(legendColors);
          legend.note(legendNote);*/
          legend.note(`${valueCol}`);
        });

        // now add to map (this will trigger the handler and show the legend immediately)
        layer.addTo(cityMap);

        currentOverlays.push(layer);                 // <— track it
        layerControl.addOverlay(layer, def.name);    // register in the control

        /*overlayGroups[def.name] = layer;
        layerControl.addOverlay(layer, def.name);*/

        // (optional) also call once explicitly to be extra safe:
        legend.updateSwatches(legendColors);
        legend.note(legendNote);

        /*const layer = L.geoJSON(gj, {
          style: f => ({ color:'#333', weight:0.6, fillOpacity:0.85, fillColor: styleColor(f) }),
          onEachFeature:(feature, lyr)=>{
            const p=feature.properties||{};
            const cdi = def.join ? Number(p[valueCol]) : undefined;
            const showVal = def.join ? `${valueCol}: <b>${Number.isFinite(cdi)? cdi.toFixed(3):'n/a'}</b>` : `${def.valueProp}: <b>${fmt(Number(p[def.valueProp]))}</b>`;
            const keys=Object.keys(p).filter(k=>!['uid','id'].includes(k));
            const rows=keys.map(k=>`<tr><td><strong>${k}</strong></td><td>${p[k]}</td></tr>`).join('');
            lyr.bindPopup(`<div><b>${def.name}</b><br/>${showVal}<table>${rows}</table></div>`);
          }
        }).addTo(cityMap);

        overlayGroups[def.name]=layer;
        layerControl.addOverlay(layer, def.name);
        // Update legend when toggled
        layer.on('add', ()=> { legend.updateSwatches(legendColors); legend.note(legendNote); });*/
      } catch(e){ console.error(e); }
    }

    // fit to first overlay
    const names = Object.keys(overlayGroups);
    if (names.length){ try{ cityMap.fitBounds(overlayGroups[names[0]].getBounds(), { padding:[20,20] }); }catch(e){} }
  }

  function goCity(slug){ location.hash = `#/city/${slug}`; }
  function goHome(){ location.hash = '#/'; }

  document.getElementById('backBtn').addEventListener('click', goHome);

  // simple hash router
  function router(){
    const hash = location.hash || '#/';
    if (hash.startsWith('#/city/')){
      const slug = hash.split('/')[2];
      document.getElementById('title').textContent = 'City • ' + slug;
      loadCity(slug);
    } else {
      document.getElementById('title').textContent = 'Car Dependency Index';
      document.getElementById('subtitle').textContent = '';
      document.getElementById('view-landing').style.display='grid';
      document.getElementById('view-city').style.display='none';
    }
  }
  window.addEventListener('hashchange', router);
  boot();
</script>