<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="fruit in fruits"
        :key="fruit.name"
      >
        <v-card>
          <v-img :src="fruit.img" height="200px" >
          <v-card-title class="headline">
            
            <v-card-actions>
              
              
            </v-card-actions>
          </v-card-title>
        </v-img>
        <router-link class="deco" :to="fruit.link" :class="linkClass">
          {{ fruit.name }}
        </router-link>
        <v-btn color="red" variant="flat" size="small" :to="fruit.link" >➜</v-btn>
        <v-card-text>
          <p class="text-h4 text--primary"></p>

          <div class="text--primary">
            {{ fruit.opis }}
          </div>
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        { name: 'Rozcieńczanie', img: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-FMvarUABNYLxZIO.png?nc=1', link: "/dillution", opis: "Rozcieśczanie posiadanego alkoholu" },
        { name: 'Mieszanie', img: 'https://via.placeholder.com/150', link: "/blending"},
        { name: 'Obliczenia Blg', img: 'https://via.placeholder.com/150', link: "/blg" },
        { name: 'Korekta odczytu', img: 'https://via.placeholder.com/150', link: "/correction"  },
        { name: 'About', img: 'https://via.placeholder.com/150', link: "/about"  },
      ],
    };
  },
  computed: {
    linkClass() {
      return {
        'white--text': this.$vuetify.theme.dark,
        'black--text': !
        this.$vuetify.theme.dark,
}
}
},
};
</script>


<style scoped>
.deco {
  text-decoration: none;
}

.djv {
  position: relative;
}

.pee {
  position: absolute;
  bottom: 0;
}
</style>
