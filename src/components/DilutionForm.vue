<template>
    <v-container>
      <v-card class="pa-4 mx-auto" :class="{'w-100': isMobile, 'w-80': !isMobile}">
        <v-card-title>Kalkulator rozcieńczania alkoholu</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="currentStrength"
              label="Aktualne stężenie alkoholu (%)"
              type="number"
              inputmode="decimal"
              hint="Wprowadź obecne stężenie alkoholu w procentach"
              persistent-hint
            />
            <v-text-field
              v-model="desiredStrength"
              label="Pożądane stężenie alkoholu (%)"
              type="number"
              inputmode="decimal"
              hint="Wprowadź pożądane stężenie alkoholu w procentach"
              persistent-hint
            />
            <v-text-field
              v-model="currentVolume"
              :label="`Obecna objętość alkoholu (${volumeUnit})`"
              type="number"
              inputmode="decimal"
              hint="Wprowadź obecną objętość alkoholu"
              persistent-hint
            />
            <v-row align="center">
              <v-col cols="12" md="6">
                <v-radio-group v-model="volumeUnit" row>
                  <v-radio label="Litry (l)" value="l"></v-radio>
                  <v-radio label="Mililitry (ml)" value="ml"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-checkbox v-model="includeContraction" label="Uwzględnij kontrakcję"></v-checkbox>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="calculateDilution">Oblicz</v-btn>
          </v-form>
          <v-alert v-if="waterToAdd !== null" type="info" class="mt-4">
            Dodać {{ formattedWaterToAdd }} {{ volumeUnit }}
            <span v-if="includeContraction">, kontrakcja: {{ contractionAmount.toFixed(2) }} {{ volumeUnit }}</span>
          </v-alert>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  const currentStrength = ref(0)
  const desiredStrength = ref(0)
  const currentVolume = ref(0)
  const waterToAdd = ref(null)
  const volumeUnit = ref("l")
  const includeContraction = ref(false)
  const contractionAmount = ref(0)
  
  // Responsive behavior using native window width
  const isMobile = ref(window.innerWidth <= 600)
  
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
  })
  
  function calculateDilution() {
    const baseVolume = volumeUnit.value === "ml" ? currentVolume.value / 1000 : currentVolume.value;
    const alcoholContent = baseVolume * (currentStrength.value / 100);
    const targetVolume = alcoholContent / (desiredStrength.value / 100);
    const waterVolume = targetVolume - baseVolume;
    waterToAdd.value = volumeUnit.value === "ml" ? waterVolume * 1000 : waterVolume;
  
    if (includeContraction.value) {
      const contractionRatio = 0.03; // Example contraction ratio, adjust based on real data
      contractionAmount.value = waterToAdd.value * contractionRatio;
      waterToAdd.value -= contractionAmount.value;
    }
  }
  
  const formattedWaterToAdd = computed(() => {
    return waterToAdd.value !== null ? waterToAdd.value.toFixed(2) : null;
  });
  </script>
  
  
  
  
  
  <style scoped>
  .w-80 {
    width: 80%;
  }
  @media (max-width: 600px) { /* Adjust this breakpoint as needed */
    .w-80 {
      width: 100%;
    }
  }
  </style>
  