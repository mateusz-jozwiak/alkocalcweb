<template>
<v-card class="mx-2 my-2" max-width="auto">
  <v-card-title>Mieszanie stęzeń:</v-card-title>
  <v-divider class="mx-4"></v-divider>
  <v-card-text>
    <v-form>
          <v-container>
            
            
            <v-row>
              <v-col cols="12" md="4">
                <v-numeric label="Ilość posiadanego alkoholu" required clearable="true" precision="0" suffix="ml."
                  v-model="ilosc"></v-numeric>
              </v-col>

              <v-col cols="12" md="4">
                <v-numeric label="Moc alkoholu" clearable="true" min="0" max="100" precision="0" suffix="%"
                  v-model="moc" required></v-numeric>
              </v-col>

              <v-col cols="12" md="4">
                <v-numeric label="Moc docelowa" clearable="true" min="0" max="100" precision="0" suffix="%"
                  v-model="moc_doc" required></v-numeric>
              </v-col>
            </v-row>
          </v-container>
        </v-form>



    <v-alert dense v-model="alert" dismissible color="primary" border="left" elevation="2" colored-border>
      <!-- <v-row justify="left">
        <v-icon large color="primary">mdi-calculator</v-icon> -->
      <h4>Ilość potrzebnej wody:
        <v-chip class="ma-2" color="blue" text-color="white">
          {{ ((result)).toFixed(0) + " ml"}}
        </v-chip> lub
        <v-chip class="ma-2" color="red" text-color="white">
          {{ (result/1000).toFixed(3) + " l"}}
        </v-chip>
       
      </h4>
      <!-- </v-row> -->
    </v-alert>


    <v-alert dense v-model="alert1" dismissible color="primary" border="left" elevation="2" colored-border>

      <h4>Otrzymasz z tego:
        <v-chip class="ma-2" color="blue" text-color="white">
          {{ ((parseFloat(result) + parseFloat(ilosc))).toFixed(0) + " ml"}}
        </v-chip> lub
        <v-chip class="ma-2" color="red" text-color="white">
          {{ ((parseFloat(result) + parseFloat(ilosc))/1000).toFixed(3) + " l"}}
        </v-chip> wódki.


      </h4>

    </v-alert>

  </v-card-text>

  <v-divider class="mx-4"></v-divider>


  <v-card-action justify="space-around">
    <v-btn text color="primary" @click="add(), alert = true, alert1 = true" dark> Oblicz </v-btn>
    <v-btn text color="error" @click="clear()"> Wyczyść </v-btn>
  </v-card-action>
  <v-divider class="mx-4"></v-divider>
  

</v-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    ilosc: "",
    moc: "",
    moc_doc: "",
    alert: false,
    alert1: false,
    result: 0,
    // all: 0,
    chip2: true,
  }),

  methods: {
    add() {
      this.result = ((parseFloat(this.ilosc)) * (parseFloat(this.moc)) / (parseFloat(this.moc_doc))) - (parseFloat(this.ilosc))
      return this.result

    },
    // whole() {
    //   this.all = parseFloat(this.result) + parseFloat(this.ilosc)
    //   return this.all
    // },
    clear() {
      this.ilosc = 0
      this.moc = 0
      this.moc_doc = 0
      this.alert = false
      this.alert1 = false
    }
  },
};
</script>