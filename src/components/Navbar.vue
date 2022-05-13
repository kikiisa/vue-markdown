<script>
export default {
    name:'Navbar'
}
</script>
<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container navigasi">
                <router-link class="navbar-brand" to="/">
                    <i class="fa-solid fa-cube"></i>
                    Kiky Code
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li  class="menu-1 nav-item">
                            <router-link to="/course" class="menu-2 nav-link">Course Online</router-link>
                        </li>
                        <li class="menu-1 nav-item">
                            <router-link to="/blog" class="menu-2 nav-link">Blog</router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<style scoped>
    .navbar-brand{
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 24px;
    }
    .cart{
        border-color: transparent;
        background-color: transparent;
    }
    .menu-2
    {
        color:black;
        font-family:'Montserrat', sans-serif;
        text-transform: uppercase;
    }
    .total-cart{
        margin-left: 2px;
    }
</style>