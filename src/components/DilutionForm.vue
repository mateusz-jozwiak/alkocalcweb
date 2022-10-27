<template>
  <v-card class="mx-2 my-2" max-width="auto">
    <v-card-title>Rozcieńczanie alkoholu:</v-card-title>
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
              <v-numeric label="Moc alkoholu" clearable="true" min="0" max="100" precision="0" suffix="%" v-model="moc"
                required></v-numeric>
            </v-col>

            <v-col cols="12" md="4">
              <v-numeric label="Moc docelowa" clearable="true" min="0" max="100" precision="0" suffix="%"
                v-model="moc_doc" required></v-numeric>
            </v-col>
          </v-row>
          
        </v-container>
      </v-form>



      <!-- <v-alert dense v-model="alert"  elevation="2" colored-border> -->
        <v-simple-table dense :disabled="ilosc <= 0">
    <template v-slot:default >
      <thead>
        <tr>
          <th class="text-left">
            
          </th>
          <th class="text-left">
            ml
          </th>
          <th class="text-left">
            litry
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ilość potrzebnej wody:</td>
          <td>
            {{ ilosc_wody().toFixed(0)+ " ml"}}
           </td>
          <td>
            {{ (ilosc_wody() / 1000).toFixed(3) + " l" }}
          </td>
          
        </tr>
        <tr>
          <td>Otrzymasz wódki:</td>
          <td>
            {{ ilosc_alkoholu().toFixed(0)+ " ml" }}
          </td>
          <td> 
            {{ (ilosc_alkoholu() / 1000).toFixed(3) + " l" }}
          </td>    
        </tr>
        <tr>
          <td>Kontrakcja:</td>
          <td>
            {{ kontrakcja().toFixed(0) + " ml" }}
          </td>
          <td> 
            {{ (kontrakcja() / 1000).toFixed(3) + " l" }}
          </td>    
         
        </tr>
      </tbody>
    </template>
  </v-simple-table>
      <!-- </v-alert> -->

    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-action justify="space-around">
      <v-btn :disabled="ilosc <= 0" text color="primary" @click=" alert = true" dark> Oblicz </v-btn>
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
    ilosc: 0,
    moc: 0,
    moc_doc: 0,
    alert: false,
    alert1: false,
    chip2: true,
  }),

  methods: {
    ilosc_wody() {
      this.result_wody = parseFloat(((this.ilosc) * (this.moc)) / this.moc_doc - (this.ilosc))
      this.result_wody = ((this.result_wody + ((parseFloat(this.result_wody) + parseFloat(this.ilosc))) * 0.03))
      return this.result_wody || 0
    },
    ilosc_alkoholu() {
      this.result_alko = (((parseFloat(((this.ilosc) * (this.moc)) / this.moc_doc - (this.ilosc))) + parseFloat(this.ilosc)))
      return this.result_alko || 0
    },
    
    kontrakcja() {
      this.result_kontrakcja = (this.result_alko*0.03)
      return this.result_kontrakcja || 0
    },
    clear() {
      this.ilosc = 0
      this.moc = 0
      this.moc_doc = 0
      this.alert = false
      
    },
  },
  
};
</script>