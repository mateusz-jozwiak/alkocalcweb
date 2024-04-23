<template>
  <v-container>
    <v-card class="pa-4 mx-auto" :class="{'w-100': isMobile, 'w-80': !isMobile}">
      <v-card-title>Formularz Mieszania Alkoholi</v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Objętość (ml)" v-model.number="newAlcohol.volume" type="number" hint="Wprowadź objętość alkoholu" persistent-hint></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Stężenie (%)" v-model.number="newAlcohol.concentration" type="number" hint="Wprowadź stężenie alkoholu" persistent-hint></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="primary" @click="addAlcohol">Dodaj alkohol</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-simple-table>
                <thead>
                  <tr>
                    <th class="text-left">Objętość (ml)</th>
                    <th class="text-left">Stężenie (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in alcohols" :key="index">
                    <td>{{ item.volume }}</td>
                    <td>{{ item.concentration }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
              <div>Totalna objętość: {{ totalVolume }} ml</div>
              <div>Średnie stężenie: {{ averageConcentration }} %</div>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const alcohols = ref([]);
const newAlcohol = ref({ volume: 0, concentration: 0 });

function addAlcohol() {
  alcohols.value.push({ ...newAlcohol.value });
  newAlcohol.value = { volume: 0, concentration: 0 };
}

const totalVolume = computed(() => {
  return alcohols.value.reduce((acc, curr) => acc + curr.volume, 0);
});

const averageConcentration = computed(() => {
  const totalConcentration = alcohols.value.reduce((acc, curr) => acc + curr.concentration * curr.volume, 0);
  return totalVolume.value ? (totalConcentration / totalVolume.value).toFixed(2) : 0;
});

// Responsive behavior using native window width
const isMobile = ref(window.innerWidth <= 600);

// Update isMobile on window resize
onMounted(() => {
  const updateMobileStatus = () => {
    isMobile.value = window.innerWidth <= 600;
  };
  window.addEventListener('resize', updateMobileStatus);
  // Cleanup on component unmount
  onUnmounted(() => {
    window.removeEventListener('resize', updateMobileStatus);
  });
});
</script>

<style scoped>
.w-80 {
  width: 80%;
}
@media (max-width: 600px) {
  .w-80 {
    width: 100%;
  }
}
</style>
