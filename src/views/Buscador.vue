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

          <v-btn dark color="blue" raised @click="getBuscar"> Find</v-btn>
        </div>
      </v-flex>
    </v-layout>
    <div>
      <v-main v-if="resultado.name.length > 0">
        <Contenido :resultado="resultado"> </Contenido>
      </v-main>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import Contenido from "./Contenido";

export default {
  name: "Buscador",
  components: {
    Contenido,
  },
  data: () => ({
    buscar: null,
    resultado: {
      name: "",
      temp: 0,
      icono: "",
      lat: 0,
      lon: 0,
      viento: "",
      status: "",
    },
  }),
  methods: {
    getBuscar() {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.buscar}&appid=2b97e54875261c96d38f74b56126f0ab`
        )
        .then((res) => {
          this.resultado = {
            id: res.data.sys.id,
            name: res.data.name,
            temp: (res.data.main.temp - 273.15).toFixed(2),
            icono: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
            lat: res.data.coord.lat,
            lon: res.data.coord.lon,
            viento: res.data.wind.speed,
            status: res.status,
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

      const datosClima = [
        {
          id: resultado.id,
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
        //comprobamos que nuestra variable CUENTAS EXISTA

        listaActual = JSON.parse(getlocal);

        listaActual.push({
          id: resultado.id,
          username: "jerrynaval@gmail.com",
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
      } else {
        localStorage.setItem("clima", JSON.stringify(datosClima));
      }
    },
  },
};
</script>
