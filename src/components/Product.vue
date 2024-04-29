<template>
  <div class="product-card" @click="showExpandedCard(product)">
    <!--<router-link :to="'/products/' + product.id">-->
    <img :src="product.image" class="img-card-product" alt="Product Image" />
    <!--</router-link>-->

    <h3 class="texto-cortado">{{ product.title }}</h3>
    <p>Precio: {{ product.price }}</p>
    <div>
      <span v-for="star in 5" :key="star" :class="{ filled: star <= product.rating }">&#9733;</span>
    </div>
    <p v-if="product.promotion">¡{{ product.promotion }}!</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    showExpandedCard: Function
  },
  methods: {
    mostrarTextoCompleto() {
      console.log('djdjdj')
    }
  }
}
</script>

<style>
.img-card-product {
  width: 220px;
  height: 300px;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.product-card:hover .img-card-product {
  transform: scale(1.1); /* Escala la imagen al hacer hover en la tarjeta */
}
.texto-cortado {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* Número de líneas a mostrar */
  line-height: 1.4; /* Altura de línea para mejor visualización */
  height: calc(1.4 * 2); /* Altura fija para dos líneas de texto */
  transition: height 0.3s ease; /* Transición suave al expandirse */
}
.texto-cortado:hover {
  height: auto; /* Cambia la altura a automática al pasar el mouse */
}
.product-card {
  flex: 1 0 calc(90.33% - 20px) !important; /* Utiliza flexbox para distribuir las tarjetas en filas, ajustando el ancho */
  max-width: 250px; /* Establece el ancho máximo de la tarjeta */
  min-width: 250px;
  width: 250px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  float: left;
  height: 450px;
  min-height: 450px;
  max-height: 450px;
  cursor: pointer;
  overflow: hidden;
}

.product-card img {
  width: 220px;
  height: 300px;
}

.product-card h3 {
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 16px;
}

.product-card p {
  margin-bottom: 5px;
}

.product-card .filled {
  color: gold;
}
.zoomed {
  transform: scale(1.1); /* Escala la tarjeta al hacer hover */
}
</style>