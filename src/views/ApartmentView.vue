<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import IconRefresh from '@/components/icons/IconRefresh.vue';
import { computed } from '@vue/reactivity';

const router = useRouter();
const data = reactive({});

fetchData();

async function fetchData() {
  data.apartments = null;
  fetch(`/apartments`).then((r) => r.json()).then(d => data.apartments = d);
}

const goToInventoryList = (id) => {
  router.push(`/apartment/${id}`)
}

const fullAddress = computed(() => {

})
</script>

<template>
  <div class="apartment">
    <div v-if="data.apartments" class="w-full flex flex-row-reverse mb-2">
      <button class="btn btn-sm btn-ghost btn-circle" @click="fetchData" title="Refresh">
        <IconRefresh />
      </button>
    </div>
    <div v-if="!data.apartments" class="my-8 text-center">
      <progress class="progress w-56"></progress>
    </div>
    <div v-else class="overflow-x-auto">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Full Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="apartment, i in data.apartments" :key="apartment.id">
            <th>{{ i + 1 }}</th>
            <td>{{ apartment.name }}</td>
            <td>{{ apartment.address + ' ' + apartment.floor + '-' + apartment.doorNo }}</td>
            <td>
              <div class="w-full flex gap-2 justify-end">
                <button class="btn btn-ghost btn-xs text-blue-500"
                  @click="goToInventoryList(apartment.id)">manage</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
