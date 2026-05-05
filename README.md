# Car Dependency Index — interactive viewer

An interactive visualisation of the **Car Dependency Index (CDI)**, a
high-resolution measure that compares opportunity access by **private car**
versus **public transport** for every ~200 m hexagonal cell of a city.

CDI is defined as

```
CDI = (O_car − O_PT) / (O_car + O_PT)
```

so it ranges from **−1** (PT-favoured) through **0** (balanced) to **+1**
(car-dependent).

The viewer accompanies the paper *Car Dependency in Urban Accessibility* by
Campanelli, Marzolla, Bruno, Melo & Loreto (2026 ·
[arXiv:2604.01019](https://arxiv.org/abs/2604.01019)) and is styled to match
the companion
[accessibility-pov](https://github.com/mat701/accessibility-pov) viewer for
the upstream proximity/opportunity framework
([Bruno et al., EPJ Data Science 2026](https://doi.org/10.1140/epjds/s13688-026-00623-8)).

## Features

- **World landing map** — pins for every city in `data/index.json`. Cities
  with bundled hex-level data are highlighted in red; others are dimmed and
  carry a *no data* badge.
- **City view** — three-panel layout:
  - Cartogram (Leaflet base + Canvas hexagon overlay) with a continuous
    blue ↔ white ↔ red CDI gradient.
  - Sidebar with: scale legend, dual-thumb CDI range filter, live city
    summary, selected-hexagon inspector and interaction tips.
  - Scatter plot of opportunity-by-car (x) vs. opportunity-by-PT (y), with
    the y = x diagonal marking CDI = 0. Cross-highlights with the map.
  - Drag-to-resize handle between map and scatter; sidebar can be collapsed.
- **Compare cities (Stats view)** — diverging bar chart of population-weighted
  CDI, city-level scatter, population-weighted CDI distribution and a sortable
  summary table.
- **About / map / scatter help modals** explaining the methodology.
- **Bilingual UI** (EN / IT) toggled from the header.
- **Mobile** responsive layout with tabbed cartogram / scatter / info panels.

## Data layout

```
data/
  index.json            ← city manifest (slug, name, center, zoom)
  <city-slug>/
    hexes.geojson       ← hexagonal polygons + properties.id
    cdi.csv             ← hexagon_id, o_score_pt, o_score_car, CDI, population, …
```

The viewer joins on `properties.id` (GeoJSON) ⇄ `hexagon_id` (CSV) at load
time. To add a city, drop its folder under `data/` and add an entry to
`data/index.json`. The landing page automatically detects which cities have
bundled data.

## Reference

Campanelli B., Marzolla F., Bruno M., Melo H. P. M., Loreto V. (2026).
*Car Dependency in Urban Accessibility.*
[arXiv:2604.01019](https://arxiv.org/abs/2604.01019)

The companion accessibility framework on which this work builds is described
in: Bruno M., Campanelli B., Melo H. P. M., Rossi Mori L., Loreto V. (2026).
*The dimensions of accessibility: proximity, opportunities, values.*
EPJ Data Science 15:22.
[doi:10.1140/epjds/s13688-026-00623-8](https://doi.org/10.1140/epjds/s13688-026-00623-8)
