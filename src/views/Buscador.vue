<template>
  <v-container style="height">
    <v-layout row wrap>
      <v-flex xs8 offset-xs2>
        <div class="d-flex align-center">
          <v-text-field
            solo
            label="Find your location..."
            v-model="buscar"
          ></v-text-field>

          <v-btn
            style="margin: 0 100px 30px 0; height: 45px; border-radius: 8px"
            dark
            color="blue"
            raised
            @click="getBuscar"
          >
            Find</v-btn
          >
        </div>
      </v-flex>
    </v-layout>
    <div>
      <v-container>
        <v-row>
          <v-container fluid>
            <v-row dense>
              <v-col v-for="card in cards" :key="card.name" :cols="card.flex">
                <v-card class="align-end">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle>{{
                        dia.toUpperCase()
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-card-title v-text="card.name"></v-card-title>

                  <v-col class="display-1" cols="12">
                    {{ card.temp }}&deg;C
                  </v-col>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-send</v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle
                      >{{ card.viento }} km/h</v-list-item-subtitle
                    >
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-row>

        <v-row v-if="resultado.name.length > 0">
          <q-page class="col">
            <div id="mapa">
              <gmap-map
                :center="center"
                :zoom="zoom"
                style="width: 100%; height: 450px"
              >
                <gmap-marker
                  v-for="marker in markers"
                  :key="marker.key"
                  :position="marker"
                  :icon="icon"
                >
                </gmap-marker>
              </gmap-map>
            </div>
          </q-page>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
//import Contenido from "./Contenido";
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import {
  nombreDelDiaSegunFecha,
  POINT_MARKER_ICON_CONFIG,
} from "@/contants/mapSetting";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDNruUnouT2GwJbvGzHkRdIfszbyXm4rBM",
  },
});
export default {
  name: "Buscador",
  data() {
    return {
      buscar: null,
      dia: nombreDelDiaSegunFecha(new Date()),
      resultado: {
        name: "",
        temp: 0,
        icono: "",
        lat: 0,
        lon: 0,
        viento: "",
        status: "",
        flex: 2,
      },
      center: {
        lat: 0,
        lng: 0,
      },
      markers: [
        {
          lat: 0,
          lng: 0,
        },
      ],
      cards: {},
      zoom: 7,
      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      },
      icon: POINT_MARKER_ICON_CONFIG,
    };
  },

  methods: {
    getBuscar() {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.buscar}&appid=2b97e54875261c96d38f74b56126f0ab`
        )
        .then((res) => {
          this.resultado = {
            name: res.data.name,
            temp: (res.data.main.temp - 273.15).toFixed(2),
            icono: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
            lat: res.data.coord.lat,
            lon: res.data.coord.lon,
            viento: res.data.wind.speed,
            status: res.status,
            flex: 2,
          };
          //creo las variables localStorage para almacenar las coordenadas

          localStorage.setItem("latD", res.data.coord.lat);
          localStorage.setItem("lonD", res.data.coord.lon);

          //almaceno la busqueda para posteriormente mostrar el listado

          this.getAlmacenarBusqueda(this.resultado);
        })
        .catch((error) => {
          alert("no existe la ciudad indicada");
          console.log(error);
        });
    },

    getAlmacenarBusqueda(resultado) {
      let getlocal = localStorage.getItem("clima");

      let listaActual = [];

      //Buscar el nombre del usuario

      const datosClima = [
        {
          username: "jerrynaval@gmail.com",
          name: resultado.name,
          temp: resultado.temp,
          icono: resultado.icono,
          lat: resultado.lat,
          lon: resultado.lon,
          viento: resultado.viento,
          status: resultado.status,
          flex: 2,
        },
      ];

      if (
        getlocal != null &&
        getlocal != "" &&
        getlocal != false &&
        getlocal != undefined
      ) {
        //comprobamos que nuestra variable CLIMA EXISTA

        listaActual = JSON.parse(getlocal);

        //buscar la variable de sesion para incluirla en el resultado del clima e imprimir por pantalla

        listaActual.push({
          username: "tucorreo@gmail.com",
          name: resultado.name,
          temp: resultado.temp,
          icono: resultado.icono,
          lat: resultado.lat,
          lon: resultado.lon,
          viento: resultado.viento,
          status: resultado.status,
          flex: 2,
        });

        localStorage.setItem("clima", JSON.stringify(listaActual));
        this.cards = listaActual;
      } else {
        localStorage.setItem("clima", JSON.stringify(datosClima));
        this.cards = datosClima;
      }

      this.center.lat = resultado.lat;
      this.center.lng = resultado.lon;
      this.markers.lat = resultado.lat;
      this.markers.lng = resultado.lon;
    },
  },
};
</script>
