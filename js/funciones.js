import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { Group as LayerGroup, Tile as TileLayer } from "ol/layer";
import { getWidth, getTopLeft, getTopRight } from "ol/extent";
import { get as getProjection } from "ol/proj";
import { OSM } from "ol/source";
import Stamen from "ol/source/Stamen";
import WMTS from "ol/source/WMTS";
import LayerSwitcher from "ol-layerswitcher";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { fromLonLat } from "ol/proj";

var projection = getProjection("EPSG:4326");
var projectionExtent = projection.getExtent();
var size = getWidth(projectionExtent) / 512;
var resolutions = new Array(18);
var matrixIds = new Array(18);
for (var z = 0; z < 18; ++z) {
  resolutions[z] = size / Math.pow(2, z);
  matrixIds[z] = z;
}

//función de bmapas base

export function mapasbase() {
  var basemaps = new LayerGroup({
    title: "Base maps",
    layers: [
      new LayerGroup({
        title: "Water color con etiquetas",
        type: "base",
        combine: true,
        visible: false,
        layers: [
          new TileLayer({
            source: new Stamen({
              layer: "watercolor"
            })
          }),
          new TileLayer({
            source: new Stamen({
              layer: "terrain-labels"
            })
          })
        ]
      }),
      new TileLayer({
        title: "Open Street Map",
        type: "base",
        visible: true,
        source: new OSM(),
        opacity: 0.7
      })
    ]
  });
  return basemaps;
}

//función para una sóla capa

export function tilelayer(capa, titulo) {
  var capas = new TileLayer({
    title: titulo,
    visible: false,
    source: new WMTS({
      attributions: 'Tiles © <a href="geiper.udistrital.edu.co">GEIPER</a>',
      url: "http://localhost:80/mapcache/wmts?",
      layer: capa,
      servertype: "mapserver",
      matrixSet: "WGS84",

      format: "image/png",
      projection: projection,
      tileGrid: new WMTSTileGrid({
        origin: getTopLeft(projectionExtent),
        resolutions: resolutions,
        matrixIds: matrixIds
      }),
      style: "default",
      wrapX: true
    })
  });
  return capas;
}

//función para crear un grupo de capas
export function grouplayers(nombre, capa1, nom1, capa2, nom2) {
  var grupo = new LayerGroup({
    title: nombre,
    fold: "close",
    layers: [tilelayer(capa1, nom1), tilelayer(capa2, nom2)]
  });
  return grupo;
}

//Funcion layerswitcher

export function controlcapas(mapa) {
  var mapa = new LayerSwitcher({
    tipLabel: "Légende" // Optional label for button
  });
  return mapa;
}
