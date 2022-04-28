
<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="container top">
                  <h1 class="title">Kiky code</h1>
                  <div class="child-text mt-3">
                    <p>Welcome to demo of hugo’s theme PaperMod.</p>
                    <p>PaperMod is a <strong>simple but fast and responsive</strong> theme with useful feature-set that enhances UX</p>
                    <p>Do give a 🌟 on Github !</p>
                    <p>PaperMod is based on theme Paper.</p>
                    <div class="social mt-3">
                        <a><i class="fa-brands fa-github fa-2x"></i></a>
                        <a><i class="fa-brands fa-facebook fa-2x"></i></a>
                        <a><i class="fa-brands fa-instagram fa-2x"></i></a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <article>
            <div class="row justify-content-center mb-4 mt-4">
                <div class="col-md-7 col-12 mt-3 posts" v-on:click="test(1)">
                    <div class="container">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title">Javascript Dasar</h2>
                                <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio vel perferendis.</p>
                                <p class="text-muted">January 20, 2021 Mohamad Rizky Isa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
  name: 'Hero',
  methods:{
      async test(id)
      {
          alert(id);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .posts{
        cursor: pointer;
    }
    article{
        margin-top: 100px;
    }
    .card{
        border-color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border-radius: 9px;
    }
    .top{
        margin-top:90px;
    }

    .card-title{
        font-weight: bold;
    }

    .text-muted{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
    }
    .title{
        font-weight: bold;
        font-size:34px;
    }
    .child-text p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        margin-bottom: 1px;
    }

    .social a{
        margin-right:10px;
        color: black;
    }
</style>
