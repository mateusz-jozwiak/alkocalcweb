<template>

  <div>



    <v-card v-show="!isShown" class="mx-2 my-2" max-width="auto" center>
      <v-img class="white--text align-end" height="100px"
        src="https://cdn.pixabay.com/photo/2015/11/30/23/32/champagner-1071356_1280.jpg">

        <v-container class="d-flex justify-right align-right">



        </v-container>
      </v-img>
      <v-card-title>Ile uzyskasz z posiadanego spirytusu:</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-form>
          <v-container>


            <v-row>
              <v-col cols="12" md="6">
                <v-numeric label="Ilość posiadanego alkoholu" required clearable="true" precision="0" suffix="ml."
                  v-model="ilosc"></v-numeric>
                <v-numeric label="Moc alkoholu" clearable="true" min="0" max="100" precision="1" suffix="%"
                  v-model="moc" required></v-numeric>
                <v-numeric label="Moc docelowa" clearable="true" min="0" max="100" precision="1" suffix="%"
                  v-model="moc_doc" required></v-numeric>
              </v-col>

              <v-col cols="12" md="6">
                <v-simple-table dense :disabled="ilosc <= 0">
                  <template v-slot:default>
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
                        <td class="red--text font-weight-bold">
                          {{ ilosc_wody().toFixed(0) }}
                        </td>
                        <td class="blue--text font-weight-bold">
                          {{ (ilosc_wody() / 1000).toFixed(3) }}
                        </td>

                      </tr>
                      <tr>
                        <td>Otrzymasz wódki:</td>
                        <td class="red--text font-weight-bold">
                          {{ ilosc_alkoholu().toFixed() }}
                        </td>
                        <td class="blue--text font-weight-bold">
                          {{ (ilosc_alkoholu() / 1000).toFixed(3) }}
                        </td>
                      </tr>
                      <tr>
                        <td>Kontrakcja:</td>
                        <td class="red--text font-weight-bold">
                          {{ kontrakcja().toFixed(0) }}
                        </td>
                        <td class="blue--text font-weight-bold">
                          {{ (kontrakcja() / 1000).toFixed(3) }}
                        </td>

                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>


            </v-row>

          </v-container>
        </v-form>



        <!-- <v-alert dense v-model="alert"  elevation="2" colored-border> -->

        <!-- </v-alert> -->

      </v-card-text>

      <v-divider class="mx-4"></v-divider>


      <v-card-action justify="space-around">
        <!-- <v-btn :disabled="ilosc <= 0" color="primary" @click=" alert = true" dark> Oblicz </v-btn> -->
        <v-btn block color="success" v-on:click="isShown = !isShown">Ile potrzebujesz wódki ?</v-btn>
        <v-btn block color="error" depressed @click="clear()"> Wyczyść </v-btn>
      </v-card-action>




    </v-card>
















    <v-card v-show="isShown" class="mx-2 my-2" max-width="auto" center>
      <v-img class="white--text align-end" height="100px"
        src="https://cdn.pixabay.com/photo/2018/12/28/01/34/rum-3898745_1280.jpg">
        <v-container class="d-flex justify-right align-right">



        </v-container>
      </v-img>



      <v-card-title>Ilość wódki jaką chcesz uzyskać:</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-form>
          <v-container>


            <v-row>
              <v-col cols="12" md="6">
                <v-numeric label="Ilość potrzebnej wódki" required clearable="true" precision="0" suffix="ml."
                  v-model="ile_wodki"></v-numeric>
                <v-numeric label="Docelowaa moc wódki" clearable="true" min="0" max="100" precision="1" suffix="%"
                  v-model="moc_wodki" required></v-numeric>
                <v-numeric label="Moc posiadanego spirytusu" clearable="true" min="0" max="100" precision="1" suffix="%"
                  v-model="moc_spirytusu" required></v-numeric>
              </v-col>

              <v-col cols="12" md="6">
                <v-simple-table dense :disabled="ilosc <= 0">
                  <template v-slot:default>
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
                        <td>Ilość potrzebnego spirytusu:</td>
                        <td class="red--text font-weight-bold">
                          {{ potrzeba_spirytusu().toFixed(0) }}
                        </td>
                        <td class="blue--text font-weight-bold">
                          {{ (potrzeba_spirytusu() / 1000).toFixed(3) }}
                        </td>

                      </tr>
                      <tr>
                        <td>Ilość potrzebnej wody:</td>
                        <td class="red--text font-weight-bold">
                          {{ potrzeba_wody().toFixed(0) }}
                        </td>
                        <td class="blue--text font-weight-bold">
                          {{ (potrzeba_wody() / 1000).toFixed(3) }}
                        </td>
                      </tr>
                      <tr>
                        <td>Kontrakcja:</td>
                        <td class="red--text font-weight-bold">
                          {{ kontrakcja2().toFixed(0) }}
                        </td>
                        <td class="blue--text font-weight-bold">
                          {{ (kontrakcja2() / 1000).toFixed(3) }}
                        </td>

                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>

            </v-row>

          </v-container>
        </v-form>



        <!-- <v-alert dense v-model="alert"  elevation="2" colored-border> -->

        <!-- </v-alert> -->

      </v-card-text>

      <v-divider class="mx-4"></v-divider>


      <v-card-action justify="space-around">
        <!-- <v-btn :disabled="ilosc <= 0" color="primary" @click=" alert = true" dark> Oblicz </v-btn> -->
        <v-btn block color="success" v-on:click="isShown = !isShown" style="float: center">Ile masz spirytusu ?</v-btn>
        <v-btn block color="error" depressed @click="clear()"> Wyczyść </v-btn>
      </v-card-action>




    </v-card>


  </div>

</template>


<script>
export default {
  data: () => ({

    isShown: true,

    loading: false,
    selection: 1,
    ilosc: 0,
    moc: 0,
    moc_doc: 0,
    alert: false,
    alert1: false,
    chip2: true,

    ile_wodki: 0,
    moc_wodki: 0,
    moc_spirytusu: 0,
    dialog: false,
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
      this.result_kontrakcja = (this.result_alko * 0.03)
      return this.result_kontrakcja || 0
    },

    potrzeba_spirytusu() {
      this.result_potrzeba_spirytusu = parseFloat(this.ile_wodki * this.moc_wodki) / this.moc_spirytusu
      return this.result_potrzeba_spirytusu || 0
    },

    potrzeba_wody() {
      this.result_potrzeba_wody = parseFloat(this.ile_wodki) - parseFloat((this.ile_wodki * this.moc_wodki) / this.moc_spirytusu) + this.result_kontrakcja2
      return this.result_potrzeba_wody || 0
    },

    kontrakcja2() {
      this.result_kontrakcja2 = parseFloat(this.ile_wodki * 0.03)
      return this.result_kontrakcja2
    },

    clear() {
      this.ilosc = 0
      this.moc = 0
      this.moc_doc = 0
      this.ile_wodki = 0
      this.moc_spirytusu = 0
      this.moc_wodki = 0
      this.alert = false

    },
    mounted() {
      document.title = "Rozcieńcznie";
    },
  },


};
</script>