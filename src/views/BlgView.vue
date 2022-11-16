<template>
    <div class="blg">
      <BlgView></BlgView>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import BlgView from '@/components/BlgForm.vue'
  
  export default {
    name: 'HomeView',
    components: {
      BlgView
    }
  }
  </script>