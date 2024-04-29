
<template>
  <div>
    <h1>HAHAHAHHA</h1>
    <div v-for="(item, index) in cartItems" :key="index">
      {{ item.name }} - ${{ item.price }}
      <button @click="removeFromCart(index)">Remove</button>
    </div>
    <div>Total: ${{ cartTotal }}</div>
  </div>
</template>
  
  <script>
import { useCartStore } from '@/stores/cartStore'
//const store = useCartStore()
export default {
  computed: {
    //cartItems() {
    //console.log(store.getToCartList)
    //return store.getToCartList
    //},
    //cartTotal() {
    //return store.cartTotal
    // }
  },
  methods: {
    removeFromCart(index) {
      //store.removeFromCart(index)
    }
  }
}
</script>