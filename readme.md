# german-administrative-areas

German administrative areas as WGS84 GeoJSON. Data provided by the [Federal Agency for Cartography and Geodesy](http://www.geodatenzentrum.de/geodaten/gdz_rahmen.gdz_div?gdz_spr=deu&gdz_akt_zeile=5&gdz_anz_zeile=0&gdz_user_id=0), subject to [this ordinance](http://www.geodatenzentrum.de/docpdf/geonutzv.pdf).

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
const districts = require('german-administrative-areas/regierungsbezirke.geo.json')
const municipalities = require('german-administrative-areas/gemeinden.geo.json')
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/german-administrative-areas/issues).
