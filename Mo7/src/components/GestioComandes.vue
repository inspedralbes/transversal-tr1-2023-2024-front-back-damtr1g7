<template>
  <div class="page">
    <v-btn class="home-button" @click="redirectToHome">
      <img src="./home.png" alt="icono Pag Principal" width="40" height="45">
    </v-btn>

    <v-container>
      <div class="button-container">
        <v-btn class="custom-button" @click="mostrarRecepcioComandes">Recepció de Comandes</v-btn>
        <v-btn class="custom-button" @click="mostrarPreparacioComandes">Preparació de Comandes</v-btn>
        <v-btn class="custom-button" @click="mostrarResumComandes">Resum de Comandes</v-btn>
      </div>
      <div class="comandas-container">
        <RecepcioComandes v-if="mostrarRecepcio" />
        <PreparacioComandes v-if="mostrarPreparacio" />
        <ResumComandes v-if="mostrarResum" />
      </div>
    </v-container>
  </div>
</template>

<script>
import RecepcioComandes from './RecepcioComandes.vue';
import PreparacioComandes from './PreparacioComandes.vue';
import ResumComandes from './ResumComandes.vue';

export default {
  name: 'PaginaPrincipal',
  components: {
    RecepcioComandes,
    PreparacioComandes,
    ResumComandes
  },
  data() {
    return {
      mostrarRecepcio: false,
      mostrarPreparacio: false,
      mostrarResum: false
    };
  },
  methods: {
    mostrarRecepcioComandes() {
      this.mostrarRecepcio = true;
      this.mostrarPreparacio = false;
      this.mostrarResum = false;
    },
    mostrarPreparacioComandes() {
      this.mostrarRecepcio = false;
      this.mostrarPreparacio = true;
      this.mostrarResum = false;
    },
    mostrarResumComandes() {
      this.mostrarRecepcio = false;
      this.mostrarPreparacio = false;
      this.mostrarResum = true;
    },
    redirectToHome() {
      window.location.href = '/';
    }
  }
}
</script>

<style scoped>
.page {
  position: relative;
  background-color: #f4f4f4;
  height: 100vh;
  padding: 1rem;
}

.home-button {
  position: absolute;
  top: 1rem;
  left: 1rem;
  height: 55px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #c0392b;
}

.home-text {
  margin-left: 0.5rem;
}

.button-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.custom-button {
  margin-right: 1rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.custom-button:last-child {
  margin-right: 0;
}

.custom-button:hover {
  background-color: #c0392b;
}

.comandas-container {
  max-height: 70vh;
  overflow-y: auto;
}
</style>

