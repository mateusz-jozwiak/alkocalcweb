<template>
  <div>
    <v-card class="mx-2 my-2" max-width="auto" center>
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
          <v-btn color="success" @click="add">Dodaj</v-btn>
        </div>
        <v-form>
          <v-container>
            <v-simple-table dense>
              <thead >
                <tr>
                  <th >#</th>
                  <th >Ilość (ml)</th>
                  
                  <th>Stężenie (%)</th>
                  <th>Akcje</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <td>{{index + 1 }}</td>
                  <td>
                    <span v-if="editIndex !== index">{{ item.qty }}</span>
                    <span v-if="editIndex === index">
                      <v-numeric class="form-control form-control-sm" type="number" v-model.number="item.qty"></v-numeric>
                    </span>
                  </td>
                  
                  <td>
                    <span v-if="editIndex !== index">{{ item.price }}</span>
                    <span v-if="editIndex === index">
                      <v-numeric class="form-control form-control-sm" type="number" v-model.number="item.price"></v-numeric>
                    </span>
                  </td>
                 
                  <!-- <td><div class="text-right">{{ subtotal(item) | money }}</div></td> -->
                  
                  <td>
                    <span v-if="editIndex !== index">
                      <v-btn small icon color="success" @click="edit(item, index)" class="btn btn-sm btn-outline-secondary mr-2"><v-icon>mdi-pencil</v-icon></v-btn>
                      <v-btn small icon color="error" @click="remove(item, index)" class="btn btn-sm btn-outline-secondary mr-2"><v-icon>mdi-delete</v-icon></v-btn>
                    </span>
                    <span v-else>
                      <v-btn small icon color="success" class="btn btn-sm btn-outline-secondary mr-2" @click="save(item)"><v-icon>mdi-content-save</v-icon></v-btn>
                      <v-btn small icon color="error" class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)"><v-icon>mdi-cancel</v-icon></v-btn>
                    </span>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-divider></v-divider>
          </v-container>
        </v-form>
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
                <td style="float: center" class="red--text font-weight-bold">
                  {{ subatotal(item)}} 
                </td>

                <td style="float: center" class="red--text font-weight-bold">
                  {{ subatotal(item)/1000}} 
                </td>
                <td class="blue--text font-weight-bold">
                  {{ (allSubTotal / subatotal(item)*100).toFixed(2) + " %"}}
                </td>
              </tr>
               
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>

      

      <!-- <v-card-action justify="space-around">
        <v-btn block color="error" depressed > Wyczyść </v-btn>
      </v-card-action> -->
      
    </v-card>
  </div>
</template>

<script>
export default {

  filters: {
    money: (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'PLN' }).format(value)
  },

  data() {
    return {
      editIndex: null,
      originalData: null,
      items: [
        // { qty: 1, unit: null, price: 43, },
        // { qty: 1, unit: null, price: 96, },
      ],
      tax: 10,
    }
  },

  methods: {

    add() {
      this.originalData = null
      this.items.push({ code: '', qty: 0, price: 0 })
      this.editIndex = this.items.length - 1
    },

    edit(item, index) {
      this.originalData = Object.assign({}, item)
      this.editIndex = index
    },

    cancel(item) {
      this.editIndex = null

      if (!this.originalData) {
        this.items.splice(this.items.indexOf(item), 1)
        return
      }

      Object.assign(item, this.originalData)
      this.originalData = null
    },

    remove(item, index) {
      this.items.splice(index, 1)
    },

    save() {
      this.originalData = null
      this.editIndex = null
    },

    subtotal(item) {
      return (item.qty * (item.price/100)) || 0
    },
    subatotal() {
      return this.items.map(item => item.qty)
    .reduce((prev, current) => prev + parseFloat(current,10)) || 0
    },

  },

  computed: {

    
    allSubTotal() {
      return this.items
        .map(item => this.subtotal(item))
        .reduce((a, b) => a + b, 0) || 0
    },

    total() {
      return this.tax
        ? this.allSubTotal + (this.allSubTotal * (this.tax / 100))
        : this.allSubTotal || 0
    }

  },

}
</script>
