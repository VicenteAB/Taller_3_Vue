<template>
  <div class="container mt-5">
    <h1>Tipo</h1>
    <span class="list" v-for="type in types" :key="type.name"> 
      {{type.name.toUpperCase()}} &nbsp;
    </span>
    <h1>Productos</h1>
    <input v-model="limit" type="number" min="0" />
    <button class="btn btn-primary" @click="getData()">Obtener Datos</button>
    <ul class="list-group" v-for="producto in producto" :key="producto.name">
      <li @click="showProductoData (producto.url)" class="list-group-item mb-2 hover">
        {{producto.name}}
      </li>
    </ul>
  </div>
</template>

<script>

import { listProducto } from '@/services/producto.service';
import typeService from "../services/type.service";

export default {
  name: 'HomeView',
  data(){
    return{
      productos: [],
      types: [],
      limit:10,
    };
  },
  mounted(){
    this.getTypes();
  },
  methods:{
    showProductoData(url){
      this.$router.push({ name: "pokemon", params: {url}});
    },
    async getData(){
      const response = await listProducto(100);
      this.productos = response.data.results;
    },
    async getTypes(){
      const response = await typeService.list();
      this.types = response.data.results;
    },
  },
};
</script>
