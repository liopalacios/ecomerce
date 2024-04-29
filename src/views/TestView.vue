<template>
  <div class="container">
    <div class="left" :class="{ expanded: isExpanded }" @click="toggleExpand">
      <!-- Contenido del div izquierdo -->
      <div class="content">
        <!-- Div hijo dentro del div izquierdo -->
        <h1>TEST</h1>
        <br />
        <div class="child"></div>
      </div>
    </div>
    <transition name="fade">
      <div class="right" v-show="isExpanded">
        <!-- Contenido del div derecho -->
        <h1>LEFT</h1>
        <br />
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>
 <style scoped>
.container {
  display: flex;
}

.left {
  flex: 1;
  transition: flex 0.5s;
  cursor: pointer;
  background-color: aqua;
  height: 500px;
}

.right {
  flex: 0 0 33.33%; /* Ocupa una tercera parte */
  transition: flex 0.5s;
  display: block;
  height: 100px;
  background-color: chartreuse;
}

.expanded {
  flex: 0 0 66.66%; /* Ocupa dos tercios */
}

.content {
  /* Estilos del contenido del div izquierdo */
}

.child {
  /* Estilos del div hijo */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>