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
};
</script>
