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

  mounted() {
    this.$router.push("/search");
  },
};
</script>
