<template>
  <div class="about">
    <AboutForm></AboutForm>
    
  </div>
</template>

<script>
// @ is an alias to /src
import AboutForm from '@/components/AboutForm.vue'

export default {
  name: 'AboutView',
  components: {
    AboutForm
  }
}
</script>