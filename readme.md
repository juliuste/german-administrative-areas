# german-administrative-areas

German administrative areas as WGS84 GeoJSON. Data provided by the [Federal Agency for Cartography and Geodesy _(current dataset from 2021-01-01)_](https://gdz.bkg.bund.de/index.php/default/digitale-geodaten/verwaltungsgebiete/verwaltungsgebiete-1-250-000-ebenen-stand-01-01-vg250-ebenen-01-01.html), subject to [this license](https://www.govdata.de/dl-de/by-2-0).

[![npm version](https://img.shields.io/npm/v/german-administrative-areas.svg)](https://www.npmjs.com/package/german-administrative-areas)
[![License](https://img.shields.io/github/license/juliuste/german-administrative-areas.svg?style=flat)](license)
[![Contact me](https://img.shields.io/badge/contact-email-turquoise)](mailto:mail@juliustens.eu)

## Installation

```bash
npm install --save german-administrative-areas
```

## Usage

The module contains seperate lists of GeoJSON objects for the following federal and administrative layers:

- `staat` - Federal Republic of Germany
- `laender` - states (e. g. Hessen, Thüringen, Bavaria, …)
- `regierungsbezirke` - administrative districts (e. g. Regierungsbezirk Münster)
- `kreise` - counties and and autonomous cities
- `verwaltungsgemeinschaften` - association of administrations / municipalities
- `gemeinden` - municipalities

You can either require the entire module (which will take a few seconds) to access all layers:

```js
const areas = require('german-administrative-areas')

console.log(areas.verwaltungsgemeinschaften) // list of GeoJSON objects
console.log(areas['laender'])
```

Or you require specific layers in case you don't need all of them:

```js
const states = require('german-administrative-areas/laender.geo.json')
const municipalities = require('german-administrative-areas/gemeinden.geo.json')
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/german-administrative-areas/issues).
