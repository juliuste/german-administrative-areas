const test = require('ava')
const { valid } = require('geojson-validation')
const areas = require('.')

const testLevel = (name) => {
	test(`german-administrative-areas.${name}`, async t => {
		t.true(areas[name].length > 0)
		for (const area of areas[name]) {
			t.deepEqual(valid(area, true), [])
		}
	})
}

for (const key in areas) testLevel(key)
