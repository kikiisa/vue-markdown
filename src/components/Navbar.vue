<script>
export default {
    name:'Navbar'
}
</script>
<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
                        <li class="nav-item">
                            <router-link to="/blog" class="nav-link">Shop</router-link>
                        </li>
                        <li class="nav-item">
                            <a to="/blog" class="nav-link">Course Online</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/blog" class="nav-link">Blog</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<style scoped>
    .navbar-brand{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        font-size: 24px;
    }
</style>