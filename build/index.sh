#!/usr/bin/env bash

# this script assumes ogr2ogr to be installed (e.g. on mac: brew install gdal)

set -e

rm -rf data
mkdir -p data/shapes-processed

wget 'https://daten.gdz.bkg.bund.de/produkte/vg/vg250_ebenen_0101/aktuell/vg250_01-01.utm32s.shape.ebenen.zip' -O data/shapes.zip

unzip -d data/shapes-raw data/shapes.zip

ogr2ogr -f GeoJSON data/shapes-processed/staat.geo.json data/shapes-raw/vg250_01-01.utm32s.shape.ebenen/vg250_ebenen_0101/VG250_STA.shp
ogr2ogr -f GeoJSON data/shapes-processed/laender.geo.json data/shapes-raw/vg250_01-01.utm32s.shape.ebenen/vg250_ebenen_0101/VG250_LAN.shp
ogr2ogr -f GeoJSON data/shapes-processed/regierungsbezirke.geo.json data/shapes-raw/vg250_01-01.utm32s.shape.ebenen/vg250_ebenen_0101/VG250_RBZ.shp
ogr2ogr -f GeoJSON data/shapes-processed/kreise.geo.json data/shapes-raw/vg250_01-01.utm32s.shape.ebenen/vg250_ebenen_0101/VG250_KRS.shp
ogr2ogr -f GeoJSON data/shapes-processed/verwaltungsgemeinschaften.geo.json data/shapes-raw/vg250_01-01.utm32s.shape.ebenen/vg250_ebenen_0101/VG250_VWG.shp
ogr2ogr -f GeoJSON data/shapes-processed/gemeinden.geo.json data/shapes-raw/vg250_01-01.utm32s.shape.ebenen/vg250_ebenen_0101/VG250_GEM.shp

rm -f ./*.geo.json
node build/flatten.js
