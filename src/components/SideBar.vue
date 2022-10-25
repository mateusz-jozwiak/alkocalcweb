<template>
    <v-app id="sidebar">

        <!-- <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
        <div>
            <v-toolbar dark>
                <v-btn icon>
                    <v-icon>mdi-glass-wine</v-icon>
                </v-btn>

                <!-- <v-list-item-avatar>
            <v-img src="@/assets/logo1.png"></v-img>
          </v-list-item-avatar> -->



                <v-toolbar-title>AlkoCalc</v-toolbar-title>

                <v-spacer></v-spacer>


            </v-toolbar>
        </div>


        <!-- <v-card width="100%" max-width="400"> -->
        <!-- <v-system-bar></v-system-bar> -->

        <!-- <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              AlkoCalc
            </v-list-item-title>
            <v-list-item-subtitle>
              by Mateusz Jóźwiak
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item> -->



        <v-list nav dense max-hight="100%">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
        <!-- </v-card> -->


    </v-app>
</template>
  
<script>
export default {
    data: () => ({
        selectedItem: 0,
        items: [
            // { text: "Kalkulatory", icon: "mdi-clock", link: "/" },
            { text: "Stęznia", icon: "mdi-account", link: "/dillution" },
            // { text: "Nastaw", icon: "mdi-desk-lamp-off", link: "/about" },
            // { text: "Piwowarstwo", icon: "mdi-flask-empty", link: "/about" },
            // { text: "Gorzelnictwo", icon: "mdi-flower", link: "/about" },
            // { text: "Winiarstwo", icon: "mdi-calculator", link: "/about" },
            // { text: "Nastaw", icon: "mdi-desk-lamp-off", link: "/about" },
            // { text: "Piwowarstwo", icon: "mdi-flask-empty", link: "/about" },
            // { text: "Gorzelnictwo", icon: "mdi-flower", link: "/about" },
            // { text: "Winiarstwo", icon: "mdi-calculator", link: "/about" },
            // { text: "About", icon: "mdi-calculator-variant-outline", link: "/about" },
        ],
    }),
};
</script>
  