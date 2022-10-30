<template>
    <v-layout align-start>
        <v-flex>
            <v-container grid-list-sm class="pa-4 white">
                <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg12 xl12>
                        <v-data-table :headers="headerDetails" :items="detailsWithSubTotal" hide-default-footer
                            class="elevation-1">
                            <template v-slot:no-data>
                                <h3>There are no current products added on details.</h3>
                            </template>
                        </v-data-table>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>
  
<script>

export default {
    data() {
        return {
            headerDetails: [
                { text: 'Product', value: 'product', sortable: false },
                { text: 'Quantity', value: 'quantity', sortable: false },
                { text: 'Price', value: 'price', sortable: false },
                { text: 'Subtotal', value: 'subtotal', sortable: false }
            ],
            details: [
                {product: 'acer', quantity: 8, price: 135},
            ],
            code: ''
        }
    },
    computed: {
        detailsWithSubTotal() {
            // Each new added detail, updates the detailsWithSubTotal
            // computed property, so you have the subtotal calc in
            // each detail
            return this.details.map((detail) => ({
                ...detail,
                subtotal: detail.quantity * detail.price
            }))
        }
    },
    methods: {
        
        addDetail(data = []) {
            this.details.push({
                
                product: data['name'],
                quantity: 10,
                price: 150
            })
        }
    }
}
</script>