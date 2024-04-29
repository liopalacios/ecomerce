<template>
  <div class="contenedor">
    <h1>Listado de productos</h1>

    <div>
      <div class="product-list">
        <div class="product-card-main" :class="{ expanded: isExpanded }">
          <product
            class="product-card"
            v-for="product in products"
            :key="product.id"
            :product="product"
            :showExpandedCard="showExpandedCard"
          />
        </div>
        <transition name="fade">
          <div v-if="expandedProduct" class="expanded-card" v-show="isExpanded">
            <div
              class="expanded-card-image"
              :style="{
                backgroundImage: 'url(' + expandedProduct.image + ')'
              }"
              @click="hideExpandedCard"
            ></div>
            <br />
            <p>
              <span style="font-weight: bold; font-size: small">S/</span>:
              <span style="font-size: x-large; font-weight: bold; color: #303f9f">{{
                expandedProduct.price
              }}</span>
            </p>
            <div>
              <span
                v-for="star in 5"
                :key="star"
                :class="{ filled: star <= expandedProduct.rating }"
                style="color: darkorange"
                >&#9733;</span
              >
            </div>
            <p style="font-size: medium; margin-bottom: 8px">{{ expandedProduct.title }}</p>
            <nav-product :addToCart="addToCart"></nav-product>
          </div>
        </transition>
      </div>
    </div>

    <h2>Total Clics: {{ store.totalClicks }}</h2>
    <div class="card">
      <button type="button" @click="store.increment('a')">
        Option A clicked {{ store.options['a'] }} times
      </button>
      <button type="button" @click="store.delayedIncrement('b')">
        Option B clicked {{ store.options['b'] }} times
      </button>
      <button type="button" @click="store.increment('c')">
        Option C clicked {{ store.options['c'] }} times
      </button>
    </div>
  </div>
</template>

<script setup>
//import { useCartStore } from '../stores/cartStore'
import { onMounted } from 'vue'
const store = useCartStore()

onMounted(() => {
  console.log('==>> INICIO MOUNTED')
  // store.getProduts()
})
</script>

<script>
import Product from '../components/Product.vue'
import NavProduct from '../components/navs/NavProduct.vue'
import axios from 'axios'

export default {
  components: {
    Product,
    NavProduct
  },
  data() {
    return {
      products: [],
      loading: false,
      expandedProduct: null,
      isExpanded: false
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        this.loading = true
        const response = await axios.get('https://fakestoreapi.com/products')
        this.products = response.data
        this.loading = false
      } catch (error) {
        console.error('Error al cargar los productos:', error)
        this.loading = false
      }
    },
    showExpandedCard(product) {
      if (this.isExpanded && this.expandedProduct.id != product?.id) {
        this.expandedProduct = product
      } else {
        this.expandedProduct = product
        this.isExpanded = !this.isExpanded
      }
    },
    hideExpandedCard() {
      this.expandedProduct = null
    }
  }
}
</script>

<style scoped>
.contenedor {
  width: 100%;
}
.product-list {
  display: flex;
}
.product-card-main {
  flex: 1;
  transition: flex 0.5s;
  cursor: pointer;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  overflow-y: scroll; /* Activamos el desplazamiento vertical */
  scrollbar-width: none; /* Ocultamos la barra de desplazamiento en Firefox */
  -ms-overflow-style: none;
}
.product-card-main::-webkit-scrollbar {
  display: none; /* Oculta la barra de desplazamiento en navegadores WebKit */
}
.product-card {
  cursor: pointer;
  transition: transform 0.3s;
  scroll-behavior: smooth;
}
.expanded-card {
  background-color: rgba(255, 255, 255, 0.9);
  flex: 0 0 33.33%; /* Ocupa una tercera parte */
  transition: flex 0.5s;
  display: block;
  height: 100vh;
  cursor: pointer;
  background-size: cover;
  max-height: 100vh;
  max-width: 400px;
  background-position: center;
}
.expanded-card-image {
  background-color: rgba(255, 255, 255, 0.9);

  flex: 0 0 33.33%; /* Ocupa una tercera parte */
  transition: flex 0.5s;
  display: block;
  height: 500px;
  cursor: pointer;
  background-size: cover;
  max-height: 500px;
  max-width: 400px;
  background-position: center;
}
.expanded {
  flex: 0 0 66.66%; /* Ocupa dos tercios */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>