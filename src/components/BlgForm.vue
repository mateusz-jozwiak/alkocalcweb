<template>
  <div class="center">
    <v-card
      v-show="!isShown"
      class="mx-2 my-2 rounded-lg"
      max-width="auto"
      center
    >
      <v-img
        class="white--text align-end"
        height="100px"
        src="https://cdn.pixabay.com/photo/2015/02/04/09/03/brown-sugar-623514_1280.jpg"
      >
        <v-container class="d-flex justify-right align-right"> </v-container>
      </v-img>
      <v-card-title
        >Obliczenia nastawu
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
                  Obliczenia związane z nastawem<v-icon
                    color="primary"
                    class="ml-2"
                    >mdi-information</v-icon
                  >
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
                  label="Objętość nastawu"
                  required
                  clearable="true"
                  precision="2"
                  suffix="l."
                  v-model="objNastawu"
                ></v-numeric>
                <v-numeric
                  label="Początkowe BLG"
                  clearable="true"
                  min="0"
                  max="100"
                  precision="1"
                  suffix="°blg"
                  v-model="startoweBLG"
                  required
                ></v-numeric>
              </v-col>

              <v-col cols="12" md="6">
                <v-simple-table dense :disabled="ilosc <= 0">
                  <template v-slot:default>
                    <!-- <thead>
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
                                             </thead> -->
                    <tbody>
                      <tr>
                        <td>Objętość wody:</td>
                        <td class="red--text font-weight-bold">
                          {{ objWody().toFixed(2) }} l
                        </td>
                      </tr>
                      <tr>
                        <td>Ilość cukru:</td>
                        <td class="red--text font-weight-bold">
                          {{ iloscCukru().toFixed(2) }} kg
                        </td>
                      </tr>
                      <tr>
                        <td>Stęzenie:</td>
                        <td class="red--text font-weight-bold">
                          {{ stezenieNastawu().toFixed(2) }} %
                        </td>
                      </tr>
                      <tr>
                        <td>Objętość etanolu:</td>
                        <td class="red--text font-weight-bold">
                          {{ objEtanolu().toFixed(2) }} l
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

    <v-card
      v-show="!isShown"
      class="mx-2 my-2 rounded-lg"
      max-width="auto"
      center
    >
      <v-card-title
        >Obliczenia °Blg<template>
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
                  Obliczenia °Blg
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
        </template></v-card-title
      >
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-numeric
                  label="Ilość wody"
                  required
                  clearable="true"
                  precision="2"
                  suffix="l."
                  v-model="iloscWody"
                ></v-numeric>
                <v-numeric
                  label="Ilość cukru"
                  clearable="true"
                  min="0"
                  max="100"
                  precision="2"
                  suffix="kg"
                  v-model="ileCukru"
                  required
                ></v-numeric>
              </v-col>

              <v-col cols="12" md="6">
                <v-simple-table dense :disabled="ilosc <= 0">
                  <template v-slot:default>
                    <!-- <thead>
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
                                        </thead> -->
                    <tbody>
                      <tr>
                        <td>Objętość nastawu:</td>
                        <td class="red--text font-weight-bold">
                          {{ iloscNastawu().toFixed(2) }} l
                        </td>
                      </tr>
                      <tr>
                        <td>°Blg:</td>
                        <td class="red--text font-weight-bold">
                          {{ ileeCukru().toFixed(2) }} °blg
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      objNastawu: 0,
      startoweBLG: 0,
      iloscWody: 0,
      ileCukru: 0,
      dialog: false,
      dialog2: false,
    };
  },
  methods: {
    // objNastawu-((0,6*objNastawu*startoweBlg)/100/(1-(0,4*startoweBlg/100)))
    objWody() {
      this.resultWody =
        Number(this.objNastawu) -
        (0.6 * this.objNastawu * Number(this.startoweBLG)) /
          100 /
          (1 - (0.4 * this.startoweBLG) / 100);
      return this.resultWody || 0;
    },
    //  (objNastawu*startoweBlg/100)/(1-(0.4*startoweBlg/100))
    iloscCukru() {
      this.resultCukru =
        (this.objNastawu * this.startoweBLG) /
        100 /
        (1 - (0.4 * this.startoweBLG) / 100);
      return this.resultCukru || 0;
    },
    objEtanolu() {
      this.resultEtanol = this.resultCukru * 0.6;
      return this.resultEtanol || 0;
    },
    stezenieNastawu() {
      // oobjEtanolu/objNastawu * 100
      this.resultStezenie = ((this.resultCukru * 0.6) / this.objNastawu) * 100;
      return this.resultStezenie || 0;
    },
    iloscNastawu() {
      this.resultNastaw = Number(this.iloscWody) + Number(this.ileCukru) * 0.6;
      return this.resultNastaw || 0;
    },
    ileeCukru() {
      this.resultCukier =
        (this.ileCukru / (this.ileCukru + this.iloscWody)) * 100;
      return this.resultCukier || 0;
    },
  },
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
}
</style>
