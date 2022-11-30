<script setup>
import { reactive, ref } from 'vue'
import { onMounted } from '@vue/runtime-core';
import ApartmentItem from '../components/ApartmentItem.vue'

const msg = reactive('Apartment!');
const loading = reactive(false);
const error = reactive(null);
let apartments = reactive(null);

onMounted(() => {
  fetch(`/apartments`).then((r) => r.json()).then(data => apartments = data)
})
</script>

<template>
  <div class="apartment">
    <h1>Apartment List</h1>

    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <ul>
      <li v-for="apartment in apartments" :key="apartment.id">
      {{ apartment.id + ' | ' + apartment.name + ' @ ' + apartment.address }}</li>
    </ul>

    <!-- <h2>{{ msg }}</h2> -->
    <!-- <div v-if="post" class="content">
      <h2>{{ msg }}</h2>
    </div> -->
  </div>
</template>
  
<style>
.apartment {
}
</style>
