const fs = require('fs')
const { groupBy } = require('lodash')
const { resolve } = require('path')

const flatten = (e) => {
	const features = e.features.filter(f => f.properties.SDV_ARS !== '--')
	const entityGroups = Object.values(groupBy(features, f => f.properties.SDV_ARS))
	return entityGroups.map(group => {
		if (group.length === 1) return group[0]
		return {
			type: 'FeatureCollection',
			features: group,
		}
	})
}

['staat', 'laender', 'regierungsbezirke', 'kreise', 'verwaltungsgemeinschaften', 'gemeinden'].forEach(level => {
	const inputPath = resolve(__dirname, '../data/shapes-processed/', `${level}.geo.json`)
	const outputPath = resolve(__dirname, '../', `${level}.geo.json`)
	fs.writeFile(outputPath, JSON.stringify(flatten(require(inputPath))) + '\n', (err) => { if (err) throw new Error(err) })
})
