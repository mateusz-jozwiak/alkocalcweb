<template>
  <div class="container mt-4">

    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="1">#</th>
          <th width="10%">Ilość (ml)</th>
          
          <th width="10%">Stęzenie</th>
          
          <!-- <th width="10%">Total</th> -->
          <th width="150">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <span v-if="editIndex !== index">{{ item.qty }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" v-model.number="item.qty">
            </span>
          </td>
          
          <td>
            <span v-if="editIndex !== index">{{ item.price }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" v-model.number="item.price">
            </span>
          </td>
         
          <!-- <td><div class="text-right">{{ subtotal(item) | money }}</div></td> -->
          
          <td>
            <span v-if="editIndex !== index">
              <button @click="edit(item, index)" class="btn btn-sm btn-outline-secondary mr-2">Edit</button>
              <button @click="remove(item, index)" class="btn btn-sm btn-outline-secondary mr-2">Remove</button>
            </span>
            <span v-else>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)">Cancel</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="save(item)">Save</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="col-3 offset-9 text-right my-3">
      <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">Add item</button>
    </div>

    <div class="col-3 offset-9">

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Sub total</span>
        </div>
        <input class="form-control form-control-sm text-right" disabled :value="this.allSubTotal | money">
      </div>

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Tax</span>
        </div>
        <input class="form-control form-control-sm" type="number" v-model.number="tax">
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Total</span>
        </div>
        <input class="form-control form-control-sm text-right" disabled :value="this.total | money">
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Total - ilosc</span>
          
        </div>
        {{ subatotal(item)}}
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Total - ilosc</span>
          
        </div>
        {{ ((this.allSubTotal / subatotal(item))*100).toFixed(2) + "%"}} 
      </div>

    </div>

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
        { qty: 1, unit: null, price: 43, },
        { qty: 1, unit: null, price: 96, },
      ],
      tax: 10,
    }
  },

  methods: {

    add() {
      this.originalData = null
      this.items.push({ code: '', qty: 1, price: 0 })
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
      return (item.qty * (item.price/100))
    },
    subatotal() {
      return this.items.map(item => item.qty)
    .reduce((prev, current) => prev + parseFloat(current,10));
    },

  },

  computed: {

    
    allSubTotal() {
      return this.items
        .map(item => this.subtotal(item))
        .reduce((a, b) => a + b, 0)
    },

    total() {
      return this.tax
        ? this.allSubTotal + (this.allSubTotal * (this.tax / 100))
        : this.allSubTotal
    }

  },

}
</script>

<style>
  input[type="number"] {
    text-align: right;
  }
</style>
