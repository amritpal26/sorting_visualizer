<template>
    <v-app>
        <v-app-bar app dark color="primary">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="./assets/sort.png"
                transition="scale-transition"
                width="60" />
            <div class="app-bar-title app-bar-text">Sorting Visualizer</div>
            <v-spacer></v-spacer>
            <span class="mr-2 app-bar-text">by Amritpal Singh</span>
        </v-app-bar>
        <v-main>
            <sorter/>
        </v-main>
  </v-app>
</template>

<script>
import Sorter from './components/Sorter';
export default {
  name: 'App',
  components: {
    'sorter': Sorter
  }
};
</script>

<style>
.app-bar-title {
    font: bold;
    font-size: 2.0em;
}
.app-bar-text {
    font-family: "Comic Sans MS", "Comic Sans", cursive;
}
</style>