<template>
  <div>
    
    <v-card class="mx-2 my-2" max-width="auto" center>
      <v-img class="white--text align-end" height="100px"
        src="https://cdn.pixabay.com/photo/2018/01/26/11/07/drink-3108436_1280.jpg">


      </v-img>
      
      <v-card-title>Mieszanie płynów o róznych stezeniach:</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-form>
          <v-container>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">

                    </th>
                    <th class="text-left">
                      Objętość
                    </th>
                    <th class="text-left">
                      Stęzenie
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mieszanina I:</td>
                    <td class="red--text font-weight-bold">
                      <v-numeric v-model="objetosc_a" required clearable="true" precision="0" suffix="ml."></v-numeric>
                    </td>
                    <td class="blue--text font-weight-bold">
                      <v-numeric v-model="stezenie_a" required clearable="true" precision="1" suffix="%"></v-numeric>
                    </td>

                  </tr>
                  <tr>
                    <td>Mieszanina II:</td>
                    <td class="red--text font-weight-bold">
                      <v-numeric v-model="objetosc_b" required clearable="true" precision="0" suffix="ml."></v-numeric>
                    </td>
                    <td class="blue--text font-weight-bold">
                      <v-numeric v-model="stezenie_b" required clearable="true" precision="1" suffix="%"></v-numeric>
                    </td>
                  </tr>
                  <v-divider></v-divider>
                  <tr >
                    <td>Wynik mieszania:</td>
                    <td style="float: center" class="red--text font-weight-bold">
                      {{ objetosc_all().toFixed(0) + " ml"
                          + " / " + objetosc_all().toFixed(3) / 1000 + " l"
                      }}
                    </td>
                    <td class="blue--text font-weight-bold">
                      {{ mieszanie().toFixed(1) }}
                    </td>

                  </tr>
                </tbody>
              </template>
            </v-simple-table>



          </v-container>
        </v-form>
      </v-card-text>

      <v-card-action justify="space-around">
        
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
    stezenie_a: 0,
    stezenie_b: 0,
  }),

  methods: {
    mieszanie() {
      this.result_mieszanie = parseFloat(((this.objetosc_a * this.stezenie_a) + (this.objetosc_b * this.stezenie_b)) / (this.objetosc_a + this.objetosc_b))
      return this.result_mieszanie || 0
    },
    objetosc_all() {
      this.result_objetosc = parseFloat(this.objetosc_a + this.objetosc_b)
      return this.result_objetosc || 0
    },
    clear() {
      this.stezenie_a = 0
      this.stezenie_b = 0
      this.objetosc_a = 0
      this.objetosc_b = 0

  },

  },
};
</script>