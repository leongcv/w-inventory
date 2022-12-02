<script setup>
import { computed, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import FormStepsVue from '@/components/FormSteps.vue';
import IconRefresh from '@/components/icons/IconRefresh.vue';
import IconPlusSmallVue from '@/components/icons/IconPlusSmall.vue';

const route = useRoute();
const data = reactive({});
const form = reactive({});
const submitButtonTitle = ref('Preview')
const editMode = ref('');
const currentStep = ref(1);
const PREVIEW_STEP = 'Preview & Approve';

switch (route.name) {
  case 'inventory-edit':
    editMode.value = 'Edit item';
    currentStep.value = '1';
    break;
  case 'inventory-add':
    editMode.value = 'Add item';
    currentStep.value = '1';
    break;
}


const steps = ref({ steps: [editMode.value, PREVIEW_STEP], currentStep: currentStep });

fetchData();


async function fetchData() {
  data.inventory = null;
  // data.inventoryList = null;
  fetch(`/inventory?id=${route.params.id}`).then((r) => r.json()).then(d => {
    data.inventory = d;
    Object.assign(form, d);
  });
  // fetch(`/apartment/inventory?id=${route.params.id}`).then((r) => r.json()).then(d => data.inventoryList = d);
}

function handleSubmit() {
  console.log('Submit!')
  if (!isPreview()) { // Step #1 - Add / Edit
    currentStep.value = 2;
    submitButtonTitle.value = 'Approve';
  } else { // Step #2 - Preview
    // TODO: Submit
    alert('Submit!')
  }
}

function handleBack() {
  console.log('back!')
  if (isPreview()) { // Step #2 - Preview
    currentStep.value = 1;
    submitButtonTitle.value = 'Preview';
    console.log('back... true')
  } else { // Step #1 - Add / Edit
    // TODO: Navigate back to Inventory List
    console.log('back... false')
  }
}

const isPreview = () => currentStep.value === 2;

</script>

<template>
  <div v-if="!data.inventory" class="my-8 text-center">
    <progress class="progress w-56"></progress>
  </div>
  <div v-else class="flex flex-col md:flex-row">

    <FormStepsVue v-bind="steps" />

    <div class="container max-w-xs">
      <h2>{{ data.inventory.item }}</h2>

      <form @submit.prevent="handleSubmit" class="inventory-form flex flex-col gap-4">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Quantity</span>
          </label>
          <!-- <input v-if="!isPreview()" v-model="form.quantity" type="number" min="1" max="20" placeholder="Quantity"
            class="input input-bordered w-full max-w-xs text-center" required />
          <div v-else>{{ form.quantity }}</div> -->
          <input v-model="form.quantity" type="number" min="1" max="20" placeholder="Quantity"
            class="input w-full max-w-xs" :class="[isPreview() ? 'input-ghost' : 'input-bordered']" :readonly="isPreview()" required />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Item Image</span>
          </label>
          <input v-if="!isPreview()" type="file" class="file-input file-input-bordered w-full max-w-xs" />
        </div>

        <div class="flex flex-1 items-end justify-end gap-2 mt-8">
          <button type="submit" class="btn btn-primary flex-auto">{{ submitButtonTitle }}</button>
          <button @click.prevent="handleBack" class="btn flex-auto">back</button>
        </div>
      </form>

    </div>
  </div>
</template>
