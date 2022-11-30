<template>
  <div class="apartment">
    <h1>Apartment List</h1>
    <!-- <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div> -->

    <!-- <h2>{{ msg }}</h2> -->
    <!-- <div v-if="post" class="content">
      <h2>{{ msg }}</h2>
    </div> -->
  </div>
</template>
  
<script setup>
import ApartmentItem from '../components/ApartmentItem.vue'
const msg = 'Apartment!';
</script>
  
<style>
.apartment {
}
</style>
