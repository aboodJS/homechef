<script setup lang="ts">
import CategoryBox from '@/components/CategoryBox.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';

const categories = ref([])


onMounted(async () => {
  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(d => d.json()).then((final) => categories.value = final.categories)

})

</script>

<template>
  <div class="grid gap-y-4">
  <h1 class="text-[#e6e6e9] text-2xl font-bold font-[Playfair-Display]">Categories</h1>
  <ul class="text-[#dee0e4] grid gap-y-3 content-center top-0 w-fit">
  <CategoryBox v-for="categorey in categories.slice(0, 6)" :title="categorey.strCategory" :image="categorey.strCategoryThumb" :key="categorey.idCategory"></CategoryBox>
  </ul>
  </div>

</template>
