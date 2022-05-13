<template>
    <div>
        <div class="row mb-4">
            <div class="col-md-12">
                <div class="jumbotron">
                    <div class="bottom text-white">
                        <h1 class="text-center">Mau Kursus Koding ?</h1>
                        <h5 class="text-center">Kalian tersesat di tempat yang tepat, belajar koding? mulai dari sini !</h5>
                    </div>
                </div>
                <h2 class="text-center class mt-4">Kelas Terbaru</h2>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="col-md-6">
                    <div class="card bg-white" style="border-radius:30px;">
                        <div class="bg text-center">
                            <img src="../assets/logo.png"  srcset="" width="200" class="img-fluid" alt="Responsive image">
                        </div>
                        <div class="card-body">
                            <h4>Belajar Vue Js Dasar</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Product"
}
</script>
<style>
    .row{
        margin-top:50px;
        font-family: 'Quicksand', sans-serif;
        margin-bottom: auto;
    }

    .bottom{
        margin-top:60px;
        margin-bottom: 60px;
    }

    .jumbotron{
        background-color: #37CDBE;
    }

    .class{
        font-weight: bold;
        font-size: 40px;
    }
    .bg{
        background-color: #3f3f3f;
    }

</style>