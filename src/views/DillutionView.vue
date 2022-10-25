<template>
    <div class="dillution">
      <Dillution></Dillution>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Dillution from '@/components/DilutionForm.vue'
  
  export default {
    name: 'HomeView',
    components: {
      Dillution
    }
  }
  </script>