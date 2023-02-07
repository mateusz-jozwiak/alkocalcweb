<template>
  <div class="flex-container">
    <v-card class="mx-2 my-2 rounded-lg" max-width="auto" center>
      <!-- <v-img
        class="white--text align-end"
        height="100px"
        src="https://images.unsplash.com/photo-1590346318008-ed7bfaeeb2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      >
        <v-container class="d-flex justify-right align-right"></v-container>
      </v-img> -->
      <v-card-title
        >Korekta cukromierza
        <template>
          <div class="text-center">
            <v-dialog v-model="dialog2" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ml-2"
                  color="primary"
                  icon
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-information</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 dark lighten-2">
                  Korekta cukromierza
                  <v-icon color="primary" class="ml-2">mdi-information</v-icon>
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog2 = false">
                    Ok
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-numeric
                  label="Wartość °Blg"
                  required
                  clearable="true"
                  precision="1"
                  suffix="°blg"
                  v-model="odczyt_blg"
                ></v-numeric>
                <v-numeric
                  label="Temperatura odczytu"
                  clearable="true"
                  min="0"
                  max="100"
                  precision="1"
                  suffix="°C"
                  v-model="temp_nastawu"
                  required
                ></v-numeric>
              </v-col>

              <v-col cols="12" md="6">
                <v-simple-table dense>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>Korekta odczytu:</td>
                        <td class="red--text font-weight-bold">
                          {{ korekta().toFixed(1) }} °blg
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <!-- </v-alert> -->
      </v-card-text>
    </v-card>

    <v-card class="mx-2 my-2 rounded-lg" max-width="auto" center>
      <v-card-title
        >Korekta alkoholomierza
        <template>
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ml-2"
                  color="primary"
                  icon
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-information</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 dark lighten-2">
                  Korekta Alkoholomierza
                  <v-icon color="primary" class="ml-2">mdi-information</v-icon>
                </v-card-title>

                <v-card-text>
                  {{ stala.J }}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    Ok
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-numeric
                  label="Zmierzona moc"
                  required
                  clearable="true"
                  precision="1"
                  suffix="%"
                  v-model="dupka"
                ></v-numeric>
                <v-numeric
                  label="Temperatura odczytu"
                  clearable="true"
                  min="0"
                  max="100"
                  precision="1"
                  suffix="°C"
                  v-model="temp_odczytu_alko"
                  required
                ></v-numeric>
              </v-col>

              <v-col cols="12" md="6">
                <v-simple-table dense>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>Korekta odczytu:</td>
                        <td class="red--text font-weight-bold">
                          {{ korekta_alko().toFixed(2) }} %
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <!-- </v-alert> -->
      </v-card-text>
    </v-card>
    <!-- <v-checkbox v-model="kilometry">x1000</v-checkbox>
            <v-numeric label="liczba" required clearable="true" precision="1" suffix="ml" v-model="liczba"></v-numeric> -->
  </div>
</template>

<script>
import { stale } from './stale';


export default {
  data() {
    return {
      temp_nastawu: 20,
      odczyt_blg: 0,

      dialog2: false,
      dialog: false,

      temp_odczytu_alko: 20,
      odczyt_mocy: 56,
      dupka: 0,

      // kilometry: false,
      // mnoznik: 1,
      // liczba: 0,
      stala: stale,
    };
  },
  methods: {
    korekta() {
      this.resultKorekta =
        parseFloat(this.odczyt_blg) +
        (parseFloat(this.temp_nastawu) - 20) * 0.05;
      return this.resultKorekta;
    },
    //=D3+0,001*(S15*(D3*100)^0+S17*(D3*100)^1+S19*(D3*100)^2+S21*(D3*100)^3
    //+S23*(D3*100)^4+S25*(D3*100)^5+S27*(D3*100)^6+S29*(D3*100)^7+S31*(D3*100)^8)*(H3-20)
    korekta_alko: function () {
      this.odczyt_mocy = this.dupka / 100;
      this.resultKorekt_alko =
        this.odczyt_mocy +
        0.001 *
          (this.stala.A * Math.pow(this.odczyt_mocy * 100, 0) +
            this.stala.B * Math.pow(this.odczyt_mocy * 100, 1) +
            this.stala.C * Math.pow(this.odczyt_mocy * 100, 2) +
            this.stala.D * Math.pow(this.odczyt_mocy * 100, 3) +
            this.stala.E * Math.pow(this.odczyt_mocy * 100, 4) +
            this.stala.F * Math.pow(this.odczyt_mocy * 100, 5) +
            this.stala.G * Math.pow(this.odczyt_mocy * 100, 6) +
            this.stala.H * Math.pow(this.odczyt_mocy * 100, 7) +
            this.stala.I * Math.pow(this.odczyt_mocy * 100, 8)) *
          (this.temp_odczytu_alko - 20);
      return this.resultKorekt_alko * 100;
    },
    // oblicz(){
    //     if (this.kilometry == true) {
    //         this.mnoznik = 'l'
    //     } else {
    //         this.mnoznik = 'ml'
    //     } return this.mnoznik
    // },
  },
};
</script>

<style scoped>
.flex-container {
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
}
</style>
