<script setup lang="ts">
import CategoryBox from '@/components/CategoryBox.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';

const categories = ref("")


onMounted(async () => {
  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(d => d.json()).then((final) => categories.value = final.categories)

})

</script>

<template>
<ul class="text-[#dee0e4] grid gap-y-6 content-center">
  <h1 class="text-2xl font-bold font-[Playfair-Display]">Categories</h1>
  <CategoryBox v-for="categorey in categories" :title="categorey.strCategory" :image="categorey.strCategoryThumb" :key="categorey.idCategory"></CategoryBox>
</ul>
</template>
