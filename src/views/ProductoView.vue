<template>
    <div class="about">
        <h1>Producto View</h1>
        <producto-data :producto="producto"> </producto-data>
    </div>
</template>

<script>
    import  ProductoData from '../components/ProductoData.vue';
    import axios from 'axios';
import { response } from 'express';

    export default{
        name: 'ProductoView',
        components:{
            ProductoData
        },
        data(){
            return{
                producto: null
            }
        },
        props:{
            url: String
        },
        mounted(){
            axios
               .get(this.url)
               .then(response => {
                this.producto = response.data;
               })
        }
    }
</script>

<style scoped>
</style>