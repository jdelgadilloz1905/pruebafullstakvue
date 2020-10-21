<template>
  <v-app>
    <v-main>
      <Navegacion />

      <Buscador />
    </v-main>
  </v-app>
</template>

<script>
import Navegacion from "./views/Navegacion";
import Buscador from "./views/Buscador";

export default {
  name: "App",

  components: {
    Navegacion,
    Buscador,
  },

  data: () => ({
    //
  }),

  /*mounted() {
    if (!localStorage.getItem("variableSesion")) {
      //window.location.href = "http://localhost:3000";
      alert("variable no existe");
    } else {
      alert("variable si existe");
    }
  },*/
};
</script>
