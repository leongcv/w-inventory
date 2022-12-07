<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Breadcrumbs from './components/Breadcrumbs.vue';
import TopHeader from './components/TopHeader.vue';
import { leftNavigation } from './router';
</script>

<template>
  <div>
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-base-100">
        <TopHeader />
        <div class="container p-4">
          <!-- <Breadcrumbs /> -->
          <h1>{{ $route.meta.title }}</h1>
          <RouterView />
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-200 text-base-content">
          <li v-for="route in leftNavigation" :key="route.path">
            <RouterLink :to="route">{{ route.meta.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
