'use strict'

const fs = require('fs')
const filter = require('lodash.filter')

const ebenen = ['staat', 'laender', 'regierungsbezirke', 'kreise', 'verwaltungsgemeinschaften', 'gemeinden']

const collectRS = (e) => {
	const rs = []
	for(let o of e){
		if(rs.indexOf(o.properties.SDV_RS)<0) rs.push(o.properties.SDV_RS)
	}
	return rs
}

const flatten = (e) => {
	const features = filter(e.features, (t) => t.properties.SDV_RS !== '--')
	const results = []
	for(let rs of collectRS(features)){
		const f = filter(features, (t) => t.properties.SDV_RS===rs)
		if(f.length === 1) results.push(f[0])
		else results.push({
			type: 'FeatureCollection',
			features: f
		})
	}
	return results
}

const build = () => {
	for(let ebene of ebenen){
		fs.writeFile(`./${ebene}.geo.json`, JSON.stringify(flatten(require(`./data/${ebene}.geo.json`))), (err) => {
			if(err) throw new Error(err)
		})
	}
}

build()
