<template>
  <v-layout class="rounded rounded-md">
    <v-bottom-navigation :elevation="8" grow :bg-color="colorNav" style="position: relative">
      <v-btn value="comprar" @mouseover="zoomIn" @mouseleave="zoomOut">
        <v-icon icon="mdi-account-cash" size="24" style="background-color: transparent" />
        <span>Comprar</span>
      </v-btn>

      <v-btn value="agregar" @mouseover="zoomIn" @mouseleave="zoomOut" @click="addToCart">
        <v-icon icon="mdi-cart" size="24" style="background-color: transparent" />

        <span>Agregar</span>
      </v-btn>

      <v-btn value="compartir" @mouseover="zoomIn" @mouseleave="zoomOut">
        <v-icon
          icon="mdi-human-capacity-increase"
          size="24"
          style="background-color: transparent"
        />

        <span>Compartir</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script>
export default {
  props: {
    addToCart: Function
  },
  data: () => ({ value: 3 }),
  computed: {
    colorNav() {
      switch (this.value) {
        case 0:
          return '#4CAF50'
        case 1:
          return 'teal'
        case 2:
          return 'brown'
        case 3:
          return '#448AFF'
        default:
          return 'blue-grey'
      }
    }
  },
  methods: {
    zoomIn(event) {
      event.target.style.transform = 'scale(1.1)'
      event.target.style.background = '#303F9F'

      let iconElement = event.target.querySelector('.v-icon')
      if (iconElement) {
        iconElement.style.backgroundColor = 'transparent' // Restaura el color de fondo del icono
      }
      let spanElement = event.target.querySelector('.v-btn__content')
      if (spanElement) {
        spanElement.style.backgroundColor = 'transparent' // Restaura el color de fondo del icono
        let spanElementTwo = spanElement.getElementsByTagName('span')
        spanElementTwo[0].style.backgroundColor = 'transparent'
      }
    },
    zoomOut(event) {
      event.target.style.transform = 'scale(1)'
      event.target.style.background = '#448AFF'
      let iconElement = event.target.querySelector('.v-icon')
      if (iconElement) {
        iconElement.style.backgroundColor = 'transparent' // Restaura el color de fondo del icono
      }
      let spanElement = event.target.querySelector('.v-btn__content')
      if (spanElement) {
        spanElement.style.backgroundColor = 'transparent'
        let spanContentElement = spanElement.querySelector('span')
        spanContentElement.style.backgroundColor = 'transparent'
      }
    }
  }
}
</script>

<style>
v-btn {
  transition: transform 0.3s ease;
}
</style>