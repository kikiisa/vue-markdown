<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="container top">
                  <h1 class="title">Kiky Code</h1>
                  <div class="child-text mt-3">
                    <p>Welcome to <strong>Kiky Code | Quote | Blog | Course Online.</strong></p>
                    <p>Tempat ini mengenai Jati diri  gua cuy</p>
                    <p><strong>Apapun segala postingan/tweet tidak mewakili instansi manapun murni dari pemikiran sendiri</strong></p>
                    <p>cita cita saya adalah menjadi seorang 🌟 Dosen Hebat di indonesia ! Bahkan ingin menjadi seorang REKTOR</p>
                    <p>Pokonya ana orang <strong>GORONTALO</strong></p>
                    <div class="social mt-3">
                        <a><i class="fa-brands fa-github fa-2x"></i></a>
                        <a><i class="fa-brands fa-facebook fa-2x"></i></a>
                        <a><i class="fa-brands fa-instagram fa-2x"></i></a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="container quote">
            <div class="row justify-content-center mb-4 mt-4">
                <div class="col-md-6 col-12 mt-3 posts" v-on:click="test(1)" v-for="y in data" :key="y.id">
                    <div class="card shadow">
                        <div class="card-body">
                            <i class="fa-solid fa-quote-left fa-1x"></i>
                            <blockquote class="text-center mt-4">
                                {{y.quotes}}
                            </blockquote>
                            <p class="text-muted">{{y.waktu}} <strong>{{y.author}}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Posts from '../Posts/blog.json'
export default {
    name: 'Hero',
    data(){
        return{
            data:[]
        }
    },
    methods:{
        async test(id)
        {
            console.log(Posts[0].judul)
        },
        async create()
        {
            this.data = Posts
        }
    },
    created(){
        this.create();
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    blockquote{
        font-weight: 500;
    }
    .posts{
        cursor: pointer;
    }
    .container .quote{
        margin-top: 100px;
    }
    .card{
        border-color: white;
        border-radius: 9px;
    }
    .top{
        margin-top:50px;
    }

    .card-title{
        font-weight: bold;
    }

    .text-muted{
        font-size: 14px;
    }

    .title{
        font-weight: bold;
        font-size:34px;
    }
    .child-text p{
        font-size: 16px;
        margin-bottom: 1px;
    }

    .social a{
        margin-right:10px;
        color: black;
    }
</style>
