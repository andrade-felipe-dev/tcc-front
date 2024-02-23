<template>
  <v-app>
    <v-main>
        <router-view />
    </v-main>
  </v-app>
</template>


<script>
import NavigationDrawer from './pages/home/Index.vue'
  export default {
    components: [
      NavigationDrawer
    ]
  }
</script>

<style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

</style>