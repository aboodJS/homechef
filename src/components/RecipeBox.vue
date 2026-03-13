<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps(["image", "name", "mealId", "current-meal"])
</script>


<template>
  <div :class="['h-[35vh] w-66 bg-[#394050] cursor-pointer rounded-lg p-2 grid']">
    <img class="w-62 object-cover h-46 rounded-lg justify-self-center self-center" :src="props.image" alt="">
    <p class="font-[Montserrat] text-sm hover:underline text-[#e6e6e9] indent-2">
      <RouterLink :to="{path:`/recipes/${props.mealId}`}">{{ props.name }}</RouterLink>
    </p>
  </div>
</template>
