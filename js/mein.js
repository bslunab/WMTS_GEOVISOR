import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { Group as LayerGroup } from "ol/layer";
import { mapasbase, grouplayers, tilelayer, controlcapas } from "./funciones";

//        -----------------------  MAPAS QUE SE VAN A MOSTRAR --------------------------------
var geiper = new Map({
  layers: [
    mapasbase(),
    new LayerGroup({
      // Inicio del layerswitcher con dos grupos (Continentes - Información Mundial)
      title: "Mundial",
      fold: "open",
      layers: [
        new LayerGroup({
          // Inicio del grupo de Continentes - America
          title: "America",
          fold: "close",
          layers: [
            new LayerGroup({
              // Inicio de los pises de america, Colombia
              title: "Colombia",
              fold: "close",
              layers: [
                new LayerGroup({
                  // se divide en dos grupos (Departamentos - Información de Colombia)
                  //Inicio del grupo Cundinamarca (Contiene información sobre el departamento y sus municipios)
                  title: "Cundinamarca",
                  fold: "close",
                  layers: [
                    //
                    new LayerGroup({
                      // Inicio del Grupo Geografía Cundinamarca
                      title: "Geografía",
                      fold: "close",
                      layers: [
                        tilelayer("208cor", "Plancha 208"),
                        tilelayer("209cor", "Plancha 209"),
                        tilelayer("229cor", "Plancha 229")
                      ]
                    }),
                    //Fin del grupo Geografia - Cundinamarca.
                    new LayerGroup({
                      // Incicio del grupo Uso y Covertura - Cundinamarca
                      title: "Uso y Cobertura",
                      fold: "close",
                      layers: [
                        tilelayer("ERS1_Escena1", "ERS 1 - Escena 1"),
                        tilelayer("ERS1_Escena2", "ERS 1 - Escena 2"),
                        tilelayer("ERS1_Escena3", "ERS 1 - Escena 3"),
                        new LayerGroup({
                          title: "L5 TM10 BSQ 1997 08 30",
                          fold: "close",
                          layers: [
                            tilelayer("p008r57_5t19950214_nn1", "Banda 1"),
                            tilelayer("p008r57_5t19950214_nn2", "Banda 2"),
                            tilelayer("p008r57_5t19950214_nn3", "Banda 3"),
                            tilelayer("p008r57_5t19950214_nn4", "Banda 4"),
                            tilelayer("p008r57_5t19950214_nn5", "Banda 5"),
                            tilelayer("p008r57_5t19950214_nn6", "Banda 6"),
                            tilelayer("p008r57_5t19950214_nn7", "Banda 7")
                          ]
                        }),
                        tilelayer("TMBogogota14Feb1995", "LANDSAT 14 Feb 1995"),
                        grouplayers(
                          "RS2 de enero 30 de 2011 HV - HH",
                          "imagery_HV",
                          "HV",
                          "RS2_20110130_S5_HH",
                          "HH"
                        ),
                        tilelayer(
                          "IMAGE_HH_SRA_spot_042",
                          "TSX1 HH, de octubre 11 de 2007"
                        )
                      ]
                    }),
                    //Fin del grupo Uso y Cobertura - Cundinamarca. Los demás grupos tematicos de cundinamarca,
                    //se deben añadir sobre este comentrario
                    new LayerGroup({
                      // Iicio del grupo Bogotá
                      title: "Bogotá",
                      fold: "close",
                      layers: [
                        new LayerGroup({
                          // Inicio del grupo Uso y Cobertura - Bogotá
                          title: "Uso y Cobertura",
                          fold: "close",
                          layers: [
                            tilelayer(
                              "SPOT_DICIEMBRE_1997",
                              "SPOT DICIEMBRE de 1997"
                            ),
                            tilelayer(
                              "SPOT_FEBRERO_1998",
                              "SPOT FEBRERO de 1998"
                            ),
                            grouplayers(
                              "TerraSAR X de 7 de abril de 2008",
                              "TSX_2008_3_7_IMAGE_VV",
                              "TerraSAR X de 7 de abril de 2008 - VV",
                              "TSX_2008_3_7_IMAGE_HH",
                              "TerraSAR X de 7 de abril de 2008 - HH"
                            ) //,
                            //Si sequiere añadir información, se debe hacer en este parrafo. Se descomenta la ","
                          ]
                        })
                        //Fin del grupo Uso y Cobertura
                      ]
                    }),
                    //Fin del grupo Bogotá
                    new LayerGroup({
                      // Inicio del grupo La Calera
                      title: "La Calera",
                      fold: "close",
                      layers: [
                        new LayerGroup({
                          // Inicio del grupo Ortoimagenes - La calera
                          title: "Ortoimágenes",
                          fold: "close",
                          layers: [
                            grouplayers(
                              "La Calera",
                              "MBT1-E214680f",
                              "Ortoimagen 1",
                              "MBT1-E214680g",
                              "Ortoimagen 2"
                            )
                          ]
                        })
                        //Fin del grupo Ortoimagenes
                      ]
                    }),
                    //Fin del grupo La Calera
                    new LayerGroup({
                      // Inicio del grupo Guaduas
                      title: "Guaduas",
                      fold: "close",
                      layers: [
                        new LayerGroup({
                          // Inicio del grupo Ortoimagenes - Guaduas
                          title: "Ortoimágenes",
                          fold: "close",
                          layers: [
                            tilelayer(
                              "ortoimagen_guaduas",
                              "Municipio de Guaduas."
                            )
                          ]
                        })
                        //Fin del grupo Ortoimagenes
                      ]
                    })
                    //Fin del grupo de guaduas
                  ]
                }),
                new LayerGroup({
                  // Titulo del layer group (obligatorio)
                  title: "Valle del Cauca",
                  fold: "close",
                  layers: [
                    new LayerGroup({
                      // Inicio del grupo buenaventura
                      title: "Buenaventura",
                      fold: "close",
                      layers: [
                        // Inicios de grupos sobre tematica.
                        new LayerGroup({
                          title: "Uso y Cobertura",
                          fold: "close",
                          layers: [
                            tilelayer(
                              "TSX1_20070909T105710_IMAGE_VV_strip",
                              "TerraSAR X de septiembre 09 de 2007"
                            )
                          ]
                        })
                        //Fin del grupo Uso y Cobertura de Buenaventura
                      ]
                    })
                    //Fin del grupo Valle del Cauca
                  ]
                }),
                //Inicio de la información sobre este nivel nacional(Elevación...etc)
                new LayerGroup({
                  // Inicio del grupo de Elevación
                  title: "Elevación",
                  fold: "close",
                  layers: [
                    tilelayer("norte_bogota", "Norte de Colombia"),
                    tilelayer("sur_bogota", "Sur de Colombia"),
                    tilelayer("este_bogota", "Este de Colombia"),
                    tilelayer("central_bogota", "Centro de Colombia")
                  ]
                }) //,
                //Fin del grupo elevación nacionalotra información mundial se pone debajo de este código se debe descomentar la ","
              ]
            }) //,
            //Fin del grupo Colombia - Nacional otra información mundial se pone debajo de este código se debe descomentar la ","
          ]
        }),
        //Inicio de información a nivel mundial
        new LayerGroup({
          // Inicio del grupo de elevación Mundial
          title: "Elevación",
          fold: "close",
          layers: [tilelayer("SRTM_GTOPO_u30_mosaic", "DEM SRTM 30mts")]
        })
        //Fin del grupo de Elevación Mundial
      ]
    }) //,
    //Fin del grupo general de GEIPER, otra información mundial se pone debajo de este código se debe descomentar la ","
  ],
  target: "geiper",
  view: new View({
    center: [-8248582, 503697],
    zoom: 1
  })
});
geiper.addControl(controlcapas(geiper));

// var usobuenav = new Map({
//   layers: [
//     mapasbase(),
//     new LayerGroup({
//       title: "Capas",
//       fold: "open",
//       layers: []
//     })
//   ],
//   target: "usobuenav",
//   view: new View({
//     center: [-8580000, 433697],
//     zoom: 10.5
//   })
// });
// usobuenav.addControl(controlcapas(usobuenav));
