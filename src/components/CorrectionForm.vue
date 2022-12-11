<template>
    <div class="flex-container">
        <v-card v-show="!isShown" class="mx-2 my-2 rounded-lg" max-width="auto" center>
            <v-img class="white--text align-end" height="100px"
                src="https://images.unsplash.com/photo-1590346318008-ed7bfaeeb2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
                <v-container class="d-flex justify-right align-right"> </v-container>
            </v-img>
            <v-card-title>Korekta cukromierza<template>
                    <div class="text-center">
                        <v-dialog v-model="dialog2" width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn class="ml-2" color="primary" icon dark v-bind="attrs" v-on="on">
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
                </template></v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-numeric label="Wartość °Blg" required clearable="true" precision="1" suffix="°blg"
                                    v-model="odczyt_blg"></v-numeric>
                                <v-numeric label="Temperatura odczytu" clearable="true" min="0" max="100" precision="1"
                                    suffix="°C" v-model="temp_nastawu" required></v-numeric>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-simple-table dense :disabled="ilosc <= 0">
                                    <template v-slot:default>
                                        <tbody>
                                            <tr>
                                                <td>Korekcja odczytu:</td>
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
        <!-- <v-checkbox v-model="kilometry">x1000</v-checkbox>
        <v-numeric label="liczba" required clearable="true" precision="1" suffix="ml" v-model="liczba"></v-numeric> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            temp_nastawu: 20,
            odczyt_blg: 0,

            dialog2: false,

            // kilometry: false,
            // mnoznik: 1,
            // liczba: 0,
        };
    },
    methods: {
        korekta() {
            this.resultKorekta =
                parseFloat(this.odczyt_blg) +
                (parseFloat(this.temp_nastawu) - 20) * 0.05;
            return this.resultKorekta;
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
