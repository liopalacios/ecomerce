import { defineStore } from 'pinia'
import axios from 'axios'
export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
    cart: [],
    order: []
  }),
  actions: {
    setProducts(products) {
      this.products = products
    },
    addToCart(product) {
      let checkProductInCart = this.cart.findIndex((item) => item.productId === product.productId)
      if (checkProductInCart != -1) {
        this.state.cart[checkProductInCart].quantity++
        return
      }
      product.quantity = 1
      this.cart.push(product)
      console.log(this.cart)
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
    },
    setCart(cart) {
      this.cart = cart
    },
    setOrder(order) {
      this.order = order
    },
    getToCartList() {
      return this.items
    },
    clearCart() {
      this.items = []
    },
    getProduts() {
      axios
        .get('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((json) => {
          this.products = json.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {
    cartTotal() {
      return this.items.reduce((total, item) => total + item.price, 0)
    }
  },
  persist: {
    storage: localStorage,
    key: 'local-products'
  }
})
