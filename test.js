'use strict'

const tape = require('tape')
const areas = require('./index')

const testLevel = (name) => {
	tape(`german-administrative-areas.${name}`, (t) => {
		t.plan(2)
		t.ok(areas[name].type==='FeatureCollection', `${name} is 'FeatureCollection'`)
		t.ok(areas[name].features.length>0, `${name} has 'Feature's`)
	})
}

for(let key in areas) testLevel(key)