<template>
  <div class="blog">
    <Navbar/>
    <div class="container">
        <div class="alert alert-danger">
            Maaf Halaman ini masih dalam <strong>pengembangan</strong>
        </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Blog',
  components: {
    Navbar
  }
}
</script>
<style scoped>
    .container{
        margin-top: 90px;
    }
</style>
