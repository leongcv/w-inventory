<template>
  <div v-if="!data.inventoryList" class="my-8 text-center">
    <progress class="progress w-56"></progress>
  </div>
  <div v-else>
    <div class="w-full flex gap-2 mb-2">
      <div class="flex-1">
        <h2>{{ apartmentTitle }}</h2>
      </div>
      <div v-if="(data.inventoryList?.length < 20)" class="btn-group btn-group-vertical lg:btn-group-horizontal">
        <button class="btn btn-sm" @click="goToInventoryAdd">
          <IconPlusSmallVue /><span class="hidden md:inline">Add item</span>
        </button>
      </div>
      <button class="btn btn-sm btn-ghost btn-circle" @click="fetchData" title="Refresh">
        <IconRefresh />
      </button>
    </div>
    <div class="overflow-x-auto">
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
              <button class="btn btn-sm mt-2" @click="goToInventoryAdd">
                <IconPlusSmallVue />Add item
              </button>
            </td>
          </tr>
          <tr v-for="inventory, i in data.inventoryList" :key="inventory.id">
            <th>{{ i + 1 }}</th>
            <td>{{ inventory.item }}</td>
            <td>{{ inventory.quantity }}</td>
            <td>
              <div class="w-full flex gap-2 justify-end">
                <button class="btn btn-ghost btn-xs text-blue-500"
                  @click="goToInventoryEdit(inventory.id)">edit</button>
                <button class="btn btn-ghost btn-xs text-red-500" @click="deleteInventory(inventory.id)">delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script setup>
import { reactive, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import IconRefresh from '@/components/icons/IconRefresh.vue';
import IconPlusSmallVue from '@/components/icons/IconPlusSmall.vue';

const props = defineProps({
  id: String
})

const route = useRoute();
const router = useRouter();
const data = reactive({});

fetchData();

async function fetchData() {
  data.apartment = null;
  data.inventoryList = null;
  fetch(`/apartment?id=${props.id}`).then((r) => r.json()).then(d => data.apartment = d);
  fetch(`/apartment/inventory?id=${props.id}`).then((r) => r.json()).then(d => data.inventoryList = d);
}

async function deleteInventory(idToDelete) {
  // TODO: confirmation
  fetch(`/inventory/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: idToDelete }),
  }).then((r) => {
    // TODO: Show success message
    fetchData();
  })
}

// Apartment title
const apartmentTitle = computed(() => {
  return data?.apartment?.name ?? ''
})

const goToInventoryEdit = (id) => {
  router.push(`/inventory/${id}/edit`)
}

const goToInventoryAdd = () => {
  router.push({ name: 'inventory-add', params: { id: props.id } })
}

</script>
