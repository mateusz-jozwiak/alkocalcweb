<template>
  <div class="responsive-div">
    <v-card class="mx-2 my-2 rounded-lg" max-width="auto" center>
      <v-img
        class="white--text align-end"
        height="100px"
        src="https://cdn.pixabay.com/photo/2017/05/10/08/05/gin-2300124_1280.jpg"
      >
        <v-container class="d-flex justify-right align-right"> </v-container>
      </v-img>
      <v-card-title>Mieszanie alkoholu o róznych stężeniach:</v-card-title>

      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <div>
          <div class="form-wrap">
            <form action="#">
              <v-row>
                <v-col cols="12" md="6">
                  <v-numeric
                    label="Ilość"
                    required
                    clearable="true"
                    precision="0"
                    suffix="ml"
                    v-model="addModel"
                  ></v-numeric>
                </v-col>

                <v-col cols="12" md="6">
                  <v-numeric
                    label="Stężenie"
                    required
                    clearable="true"
                    precision="2"
                    min="0"
                    max="100"
                    suffix="%"
                    v-model="addYear"
                  ></v-numeric>
                </v-col>
              </v-row>

              <div class="d-flex justify-end">
                <v-btn class=""
                  type="submit"
                  color="success"
                  v-on:click.prevent="addData"
                >
                  Dodaj
                </v-btn>
              </div>
            </form>
          </div>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">Ilość</th>
                  <th class="text-left">Stężenie</th>
                  <th class="text-left">Akcje</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(car, index) in cars" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ car.model }}</td>
                  <td>{{ car.year }}</td>
                  <td>
                    <span>
                      <v-btn
                        small
                        icon
                        color="error"
                        @click="remove(car, index)"
                        class="btn btn-sm btn-outline-secondary mr-2"
                        ><v-icon>mdi-delete</v-icon></v-btn
                      >
                    </span>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left">Objętość (ml)</th>
                    <th class="text-left">Objętość (l)</th>
                    <th class="text-left">Stężenie (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <v-divider></v-divider>
                  <tr>
                    <td>Wynik mieszania:</td>
                    <td
                      style="float: center"
                      class="red--text font-weight-bold"
                    >
                      {{ subatotal(item) }}
                    </td>

                    <td
                      style="float: center"
                      class="red--text font-weight-bold"
                    >
                      {{ subatotal(item) / 1000 }}
                    </td>
                    <td class="blue--text font-weight-bold">
                      {{
                        ((allSubTotal / subatotal(item)) * 100).toFixed(2) +
                        " %"
                      }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </div>
      </v-card-text>

      <!-- <v-card-action justify="space-around">
        <v-btn block color="error" depressed > Wyczyść </v-btn>
      </v-card-action> -->
    </v-card>
  </div>
</template>

<style>
.cell {
  margin-top: 25px;
}
</style>

<script>
export default {
  data() {
    return {
      cars: [],
      addModel: "",
      addYear: "",
      tax: 10,
    };
  },
  methods: {
    addData() {
      this.cars.push({
        model: this.addModel,
        year: this.addYear,
      });
      (this.addModel = ""), (this.addYear = "");
    },
    remove(car, index) {
      this.cars.splice(index, 1);
    },
    subtotal(car) {
      return car.model * (car.year / 100) || 0;
    },
    subatotal() {
      return (
        this.cars
          .map((car) => car.model)
          .reduce((prev, current) => prev + parseFloat(current, 10)) || 0
      );
    },
  },
  computed: {
    allSubTotal() {
      return (
        this.cars.map((car) => this.subtotal(car)).reduce((a, b) => a + b, 0) ||
        0
      );
    },

    total() {
      return this.tax
        ? this.allSubTotal + this.allSubTotal * (this.tax / 100)
        : this.allSubTotal || 0;
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.responsive-div {
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
}

.right {
  
  margin-left: auto;
}
</style>
