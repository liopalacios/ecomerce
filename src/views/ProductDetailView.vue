<template>
  <div>
    <product v-if="producto" :key="producto.id" :product="producto" />
  </div>
</template>

<script>
import Product from '../components/Product.vue'
import axios from 'axios'

export default {
  components: {
    Product
  },
  data() {
    return {
      producto: {},
      loading: false
    }
  },
  mounted() {
    this.fetchProduct()
  },
  methods: {
    async fetchProduct() {
      try {
        this.loading = true

        const response = await axios.get(
          'https://fakestoreapi.com/products/' + this.$route.params.productId
        )
        console.log(response.data)
        this.producto = response.data
        this.loading = false
      } catch (error) {
        console.error('Error al cargar los producto:', error)
        this.loading = false
      }
    }
  }
}
</script>

<style>
</style>