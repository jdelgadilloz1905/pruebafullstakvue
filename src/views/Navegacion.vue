<template>
  <v-app-bar app color="blue-grey darken-4" dark>
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

    <v-spacer></v-spacer>

    <v-btn
      elevation="2"
      text
      raised
      rounded
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
    >
      <span class="mr-2">Home </span>
    </v-btn>

    <v-btn
      elevation="2"
      text
      raised
      rounded
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
    >
      <span class="mr-2">News </span>
    </v-btn>

    <v-btn
      elevation="2"
      text
      raised
      rounded
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
    >
      <span class="mr-2">Live cameras </span>
    </v-btn>

    <v-btn
      elevation="2"
      text
      raised
      rounded
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
    >
      <span class="mr-2">Photos </span>
    </v-btn>

    <v-btn
      elevation="2"
      text
      raised
      rounded
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
    >
      <span class="mr-2">Contact </span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navegacion",
};
</script>