'use strict'

const ebenen = ['staat', 'länder', 'regierungsbezirke', 'kreise', 'verwaltungsgemeinschaften', 'gemeinden']

const e = {}

for(let ebene of ebenen) e[ebene] = require(`./${ebene}.geo.json`)

module.exports = e