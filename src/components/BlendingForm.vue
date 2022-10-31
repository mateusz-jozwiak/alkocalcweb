<template>
  <div>
    <v-card class="mx-2 my-2" max-width="auto" center>
      <v-img class="white--text align-end" height="100px"
        src="https://cdn.pixabay.com/photo/2017/05/10/08/05/gin-2300124_1280.jpg">
        
        <v-container class="d-flex justify-right align-right">
            
            
          
        </v-container>
      </v-img>
      <v-card-title>Mieszanie alkoholu o róznych stezeniach:</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-form>
          <v-container>


            <v-row>
              <v-col cols="12" md="2">
                <v-subheader class="red--text font-weight-bold">Mieszanina A</v-subheader>
              </v-col>

              <v-col cols="12" md="5">
                <v-numeric v-model="objetosc_a" label="Objętość" required clearable="true" precision="0" suffix="ml"></v-numeric>   
              </v-col>

              <v-col cols="12" md="5">
                <v-numeric v-model="stezenie_a" label="Stęznie" required clearable="true" precision="1" suffix="%"></v-numeric>
              </v-col>

              <!-- <v-col cols="12" md="4">
                <v-numeric label="Moc docelowa" clearable="true" min="0" max="100" precision="1" suffix="%"
                  v-model="moc_doc" required></v-numeric>
              </v-col> -->
            </v-row>

            <v-divider></v-divider>

            <v-row>
              <v-col cols="12" md="2">
                <v-subheader class="blue--text font-weight-bold">Mieszanina B</v-subheader>
              </v-col>

              <v-col cols="12" md="5">
                <v-numeric v-model="objetosc_b" label="Objętość" required clearable="true" precision="0" suffix="ml"></v-numeric>
              </v-col>

              <v-col cols="16" md="5">
                <v-numeric v-model="stezenie_b" label="Stęznie" required clearable="true" precision="1" suffix="%"></v-numeric>
              </v-col>

            </v-row>

            <v-divider></v-divider>

            <v-row>
              <v-col cols="12" md="2">
                <v-subheader class="green--text font-weight-bold">Mieszanina C</v-subheader>
              </v-col>

              <v-col cols="12" md="5">
                <v-numeric v-model="objetosc_c" label="Objętość" required clearable="true" precision="0" suffix="ml"></v-numeric>
              </v-col>

              <v-col cols="16" md="5">
                <v-numeric v-model="stezenie_c" label="Stęznie" required clearable="true" precision="1" suffix="%"></v-numeric>
              </v-col>

            </v-row>

            <v-divider></v-divider>
          </v-container>
        </v-form>
        <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">

                    </th>
                    <th class="text-left">
                      Objętość (ml)
                    </th>
                    <th class="text-left">
                      Objętość (l)
                    </th>
                    <th class="text-left">
                      Stęzenie (%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  
                  <v-divider></v-divider>
                  <tr >
                    <td>Wynik mieszania:</td>
                    <td style="float: center" class="red--text font-weight-bold">
                      {{ objetosc_all().toFixed(0) 
                        
                      }}
                    </td>
                    
                    <td style="float: center" class="red--text font-weight-bold">
                      {{ objetosc_all().toFixed(3) /1000 
                          
                    
                      }}
                    </td>
                    <td class="blue--text font-weight-bold">
                      {{ mieszanie().toFixed(1) }}
                    </td>

                  </tr>
                </tbody>
              </template>
            </v-simple-table>

      </v-card-text>

      <v-divider class="mx-4"></v-divider>


      <v-card-action justify="space-around">
        <!-- <v-btn :disabled="ilosc <= 0" color="primary" @click=" alert = true" dark> Oblicz </v-btn> -->
        <v-btn block color="error" depressed @click="clear()"> Wyczyść </v-btn>
      </v-card-action>




    </v-card>
    
  </div>
</template>
  
<script>
export default {
  data: () => ({
    objetosc_a: 0,
    objetosc_b: 0,
    objetosc_c: 0,
    stezenie_a: 0,
    stezenie_b: 0,
    stezenie_c: 0,
  }),

  methods: {
    mieszanie() {
      this.result_mieszanie = parseFloat(((this.objetosc_a * this.stezenie_a) + (this.objetosc_b * this.stezenie_b) + (this.objetosc_c * this.stezenie_c) ) / (this.objetosc_a + this.objetosc_b + this.objetosc_c))
      return this.result_mieszanie || 0
    },
    objetosc_all() {
      this.result_objetosc = parseFloat(this.objetosc_a + this.objetosc_b + this.objetosc_c)
      return this.result_objetosc || 0
    },
    clear() {
      this.stezenie_a = 0
      this.stezenie_b = 0
      this.stezenie_c = 0
      this.objetosc_a = 0
      this.objetosc_b = 0
      this.objetosc_c = 0
      

  },

  },
};
</script>