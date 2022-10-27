
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <SideBar></SideBar>
      
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>AlkoCalc</v-toolbar-title>

      <v-spacer></v-spacer>

      <div>

        <!-- <v-switch  v-model="$vuetify.theme.dark" hide-details></v-switch> -->
        <v-checkbox class="pt-5" v-model="$vuetify.theme.dark" off-icon="mdi-theme-light-dark"
          on-icon="mdi-theme-light-dark"></v-checkbox>

      </div>
    </v-app-bar>

    <v-main>
      
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {

  data: () => ({ drawer: null }),
  t:true,
  components: {
    SideBar,

  },
  
  
};
</script>
