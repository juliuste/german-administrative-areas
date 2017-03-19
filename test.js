'use strict'

const tape = require('tape')
const isValid = require('geojson-is-valid')
const areas = require('./index')

const testLevel = (name) => {
	tape(`german-administrative-areas.${name}`, (t) => {
		t.plan(2)
		t.ok(areas[name].length > 0, `${name} contains elements`)
		let valid = true
		for(let o of areas[name]){
			if(!isValid(o)){valid = false; break;}
		}
		t.ok(valid, `${name} contains only valid elements`)
	})
}

for(let key in areas) testLevel(key)