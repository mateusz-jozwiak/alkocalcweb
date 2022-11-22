<template>
    <div class="blg">
      <CorrectionView></CorrectionView>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import CorrectionView from '@/components/CorrectionForm.vue'
  
  export default {
    name: 'HomeView',
    components: {
      CorrectionView
    }
  }
  </script>