<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Dillution></Dillution>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Dillution from '@/components/DilutionForm.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    Dillution
  }
}
</script>
