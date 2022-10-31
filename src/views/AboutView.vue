<template>
  <div class="about">
    <About></About>
    
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/AboutForm.vue'

export default {
  name: 'AboutView',
  components: {
    About,
  }
}
</script>