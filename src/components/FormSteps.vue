<script setup>
defineProps(['steps', 'currentStep'])
</script>

<template>
  <!-- <ul class="steps steps-vertical lg:steps-horizontal"> -->
  <ul class="steps steps-horizontal md:steps-vertical md:h-80">
    <li v-for="(step, i) in steps" class="step" :class="{ 'step-primary': currentStep > i }">{{ step }}</li>
  </ul>
</template>