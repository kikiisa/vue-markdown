<script>
import Navbar from '@/components/Navbar.vue'
import Product from '@/components/Product.vue'
export default {
    name:"Course",
    components:{
        Navbar,Product
    }
}
</script>
<template>
    <div class="course">
        <Navbar/>
        <Product/>
    </div>
</template>