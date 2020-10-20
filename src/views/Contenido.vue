<template>
  <v-container>
    <v-row>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.name" :cols="card.flex">
            <v-card class="align-end">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle
                    >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-card-title v-text="card.name"></v-card-title>

              <v-col class="display-1" cols="12"> {{ card.temp }}&deg;C </v-col>

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
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDNruUnouT2GwJbvGzHkRdIfszbyXm4rBM",
  },
});
export default {
  props: ["resultado"],
  data() {
    return {
      center: {
        lat: parseFloat(localStorage.getItem("latD")),
        lng: parseFloat(localStorage.getItem("lonD")),
      },
      markers: [
        {
          lat: parseFloat(localStorage.getItem("latD")),
          lng: parseFloat(localStorage.getItem("lonD")),
        },
      ],
      cards: JSON.parse(localStorage.getItem("clima")),
      zoom: 7,
    };
  },
};
</script>

