'use strict'

const staat = require('./staat.geo.json')
const laender = require('./länder.geo.json')
const regierungsbezirke = require('./regierungsbezirke.geo.json')
const kreise = require('./kreise.geo.json')
const verwaltungsgemeinschaften = require('./verwaltungsgemeinschaften.geo.json')
const gemeinden = require('./gemeinden.geo.json')

module.exports = {
	staat,
	'länder': laender,
	regierungsbezirke,
	kreise,
	verwaltungsgemeinschaften,
	gemeinden
}