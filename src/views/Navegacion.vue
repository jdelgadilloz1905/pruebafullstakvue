<template>
  <v-app-bar app color="blue-grey darken-4" dark>
    <router-link to="/" style="text-decoration: none">
      <div class="d-flex align-center">
        <v-img
          alt="Company name"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <router-link to="/home" style="text-decoration: none">
      <v-btn elevation="2" text raised rounded>
        <span class="mr-2">Home </span>
      </v-btn>
    </router-link>
    <router-link to="/news" style="text-decoration: none">
      <v-btn elevation="2" text raised rounded>
        <span class="mr-2">News </span>
      </v-btn>
    </router-link>

    <router-link to="/livecamaras" style="text-decoration: none">
      <v-btn elevation="2" text raised rounded>
        <span class="mr-2">Live cameras </span>
      </v-btn>
    </router-link>
    <router-link to="/photos" style="text-decoration: none">
      <v-btn elevation="2" text raised rounded>
        <span class="mr-2">Photos </span>
      </v-btn>
    </router-link>
    <router-link to="/contact" style="text-decoration: none">
      <v-btn elevation="2" text raised rounded>
        <span class="mr-2">Contact </span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navegacion",
};
</script>