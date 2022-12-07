<script setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import FormStepsVue from '@/components/FormSteps.vue';

const props = defineProps({
  id: String
})

const route = useRoute();
const router = useRouter();
const data = reactive({});
const form = reactive({
  id: '',
  apartmentId: '',
  item: '',
  quantity: 1,
});
const inventoryItems = ref([]);
const submitButtonTitle = ref('Preview')
const currentStep = ref(1);
const IS_ADD_MODE = route.name === 'inventory-add';
const ADD_EDIT_STEP = IS_ADD_MODE ? 'Add item' : 'Edit item';
const PREVIEW_STEP = 'Preview & Approve';
const steps = ref({ steps: [ADD_EDIT_STEP, PREVIEW_STEP], currentStep: currentStep });


if (IS_ADD_MODE) {
  fetchInventoryItems();
  form.apartmentId = props.id;
} else {
  fetchData();
}

async function fetchData() {
  data.inventory = null;
  fetch(`/inventory?id=${props.id}`).then((r) => r.json()).then(d => {
    data.inventory = d;
    Object.assign(form, d);
  });
}

async function fetchInventoryItems() {
  inventoryItems.value = [];
  fetch(`/inventory-items?apartmentId=${props.id}`).then((r) => r.json()).then(d => {
    inventoryItems.value = d;
  });
}

function handleSubmit() {
  console.log('Submit!')
  if (!isPreview()) { // Step #1 - Add / Edit
    currentStep.value = 2;
    submitButtonTitle.value = 'Approve';
  } else { // Step #2 - Preview
    // TODO: Submit
    if (IS_ADD_MODE) {
      addInventory();
    } else {
      editInventory();
    }
  }
}

function handleBack() {
  if (isPreview()) { // Step #2 - Preview
    currentStep.value = 1;
    submitButtonTitle.value = 'Preview';
    console.log('back... true')
  } else { // Step #1 - Add / Edit
    goBackToApartmentDetails();
  }
}

function goBackToApartmentDetails() {
  router.push({ name: 'apartment-detail', params: { id: form.apartmentId } })
}

async function addInventory() {
  fetch(`/inventory/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  }).then((r) => {
    // Success & redirect
    goBackToApartmentDetails();
  }) // .then(d => data.apartment = d);
}

async function editInventory() {
  fetch(`/inventory/edit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  }).then((r) => {
    // Success & redirect
    goBackToApartmentDetails();
  })
}

const isPreview = () => currentStep.value === 2;

</script>

<template>
  <div v-if="!IS_ADD_MODE && !data.inventory" class="my-8 text-center">
    <progress class="progress w-56"></progress>
  </div>
  <div v-else class="flex flex-col md:flex-row">

    <FormStepsVue v-bind="steps" />

    <div class="container max-w-xs">
      <h2 v-if="!IS_ADD_MODE">{{ data.inventory.item }}</h2>

      <form @submit.prevent="handleSubmit" class="inventory-form flex flex-col gap-4">

        <div v-if="IS_ADD_MODE" class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Item</span>
          </label>
          <select v-model="form.item" class="select select-bordered" :disabled="isPreview()" required>
            <option disabled selected value="">Pick one</option>
            <option v-for="item in inventoryItems" :value="item.name">{{ item.name }}</option>
          </select>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Quantity</span>
          </label>
          <input v-model="form.quantity" type="number" min="1" max="20" inputmode="numeric" placeholder="Quantity"
            class="input w-full max-w-xs input-bordered" 
            :disabled="isPreview()" required />
        </div>

        <!-- <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Item Image</span>
          </label>
          <input v-if="!isPreview()" type="file" class="file-input file-input-bordered w-full max-w-xs" />
        </div> -->

        <div class="flex flex-1 items-end justify-end gap-2 mt-8">
          <button type="submit" class="btn btn-primary flex-auto">{{ submitButtonTitle }}</button>
          <button @click.prevent="handleBack" class="btn flex-auto">back</button>
        </div>
      </form>

    </div>
  </div>
</template>
