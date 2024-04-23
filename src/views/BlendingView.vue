<template>
    <div class="blending">
      <Blend></Blend>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Blend from '@/components/BlendingForm.vue'
  
  export default {
    name: 'BlendingView',
    components: {
      Blend
    }
  }
  </script>
