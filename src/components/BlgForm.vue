<template>
    <div>
        <v-card v-show="!isShown" class="mx-2 my-2" max-width="auto" center>
            <v-img class="white--text align-end" height="100px"
                src="https://cdn.pixabay.com/photo/2015/02/04/09/03/brown-sugar-623514_1280.jpg">

                <v-container class="d-flex justify-right align-right">

                </v-container>
            </v-img>
            <v-card-title>Obliczenia nastawu</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
                <v-form>
                    <v-container>
                     <v-row>
                            <v-col cols="12" md="6">
                                <v-numeric label="Objętość nastawu" required clearable="true" precision="2" suffix="l."
                                    v-model="objNastawu"></v-numeric>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-numeric label="Początkowe BLG" clearable="true" min="0" max="100" precision="1"
                                    suffix="°blg" v-model="startoweBLG" required></v-numeric>
                            </v-col>
                        </v-row>

                    </v-container>
                </v-form>

                   <v-container>
                    <v-row>
                           <v-col cols="12" md="6">
                               
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

                
                <!-- </v-alert> -->

            </v-card-text>

          


           




        </v-card>



        <v-card v-show="!isShown" class="mx-2 my-2" max-width="auto" center>
            <v-card-title>Obliczenia blg</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
                <v-form>
                    <v-container>
                     <v-row>
                            <v-col cols="12" md="6">
                                <v-numeric label="Ilość wody" required clearable="true" precision="2" suffix="l."
                                    v-model="iloscWody"></v-numeric>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-numeric label="Ilość cukru" clearable="true" min="0" max="100" precision="0"
                                    suffix="kg" v-model="ileCukru" required></v-numeric>
                            </v-col>
                        </v-row>

                    </v-container>
                </v-form>
                
                <v-container>
                    <v-row>
                           <v-col cols="12" md="6">
                               
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

                
                <!-- </v-alert> -->

            </v-card-text>

          


           




        </v-card>
    </div>
</template>

<script>




export default {
    data() {
        return{
            objNastawu: 0,
            startoweBLG: 0,
            iloscWody: 0,
            ileCukru: 0,
        }
    },
   methods: {
    // objNastawu-((0,6*objNastawu*startoweBlg)/100/(1-(0,4*startoweBlg/100)))
     objWody() {
        this.resultWody = (Number(this.objNastawu)-(0.6 * (this.objNastawu) * Number(this.startoweBLG))/100/(1-(0.4 * this.startoweBLG/100)) )
        return this.resultWody || 0
     },
    //  (objNastawu*startoweBlg/100)/(1-(0.4*startoweBlg/100))
     iloscCukru() {
        this.resultCukru = (this.objNastawu * this.startoweBLG / 100) / (1-(0.4 * this.startoweBLG / 100) )
        return this.resultCukru || 0
     },
     objEtanolu() {
        this.resultEtanol = this.resultCukru * 0.6
        return this.resultEtanol || 0
     },
     stezenieNastawu() {
        // oobjEtanolu/objNastawu * 100
        this.resultStezenie = this.resultCukru * 0.6 / this.objNastawu * 100
        return this.resultStezenie || 0
     },
     iloscNastawu() {
       this.resultNastaw = Number(this.iloscWody) + (Number(this.ileCukru) * 0.6)
       return this.resultNastaw || 0
     },
     ileeCukru() {
        this.resultCukier = this.ileCukru / (this.ileCukru + this.iloscWody) * 100
        return this.resultCukier || 0
     }

    }


}
</script>

<style scoped>

</style>