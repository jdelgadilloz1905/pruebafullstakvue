<template>
  <v-app>
    <v-main>
      <Navegacion />

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navegacion from "./views/Navegacion";

export default {
  name: "App",

  components: {
    Navegacion,
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
