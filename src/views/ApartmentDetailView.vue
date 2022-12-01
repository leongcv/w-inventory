<template>
  <h2>{{ apartmentTitle }}</h2>

  <div v-if="!data.inventoryList" class="my-8 text-center">
    <progress class="progress w-56"></progress>
  </div>
  <div v-else>
    <div class="w-full flex flex-row-reverse gap-2 mb-2">
      <button class="btn btn-sm btn-ghost btn-circle" @click="fetchData" title="Refresh">
        <IconRefresh />
      </button>
      <div class="btn-group btn-group-vertical lg:btn-group-horizontal">
        <button class="btn btn-sm">Add</button>
      </div>
    </div>
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="data.inventoryList.length === 0">
          <td colspan="4" class="text-center">
            No items found.<br />
            <button class="btn btn-xs mt-2">Add new items</button>
          </td>
        </tr>
        <tr v-for="inventory, i in data.inventoryList" :key="inventory.id">
          <th>{{ i + 1 }}</th>
          <td>{{ inventory.item }}</td>
          <td>{{ inventory.quantity }}</td>
          <td>
            <!-- <button class="btn btn-ghost btn-xs" @click="goToInventoryList(apartment.id)">manage</button> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script setup>
import { computed } from '@vue/reactivity';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import IconRefresh from '@/components/icons/IconRefresh.vue';

const route = useRoute();
const data = reactive({});

fetchData();

async function fetchData() {
  data.apartment = null;
  data.inventoryList = null;
  fetch(`/apartment?id=${route.params.id}`).then((r) => r.json()).then(d => data.apartment = d);
  fetch(`/apartment/inventory?id=${route.params.id}`).then((r) => r.json()).then(d => data.inventoryList = d);
}

// Apartment title
const apartmentTitle = computed(() => {
  return data?.apartment?.name ?? ''
})

</script>
