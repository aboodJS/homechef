<script setup lang="ts">
import CategoryBox from '@/components/CategoryBox.vue';
import RecipeBox from '@/components/RecipeBox.vue';
import { ref, type Ref } from 'vue';
import { onMounted } from 'vue';

const categories: Ref = ref([])
const currentCategorey: Ref = ref("dessert")

const results: Ref = ref([])

async function getMeals(categorey:string) {
  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorey}`).then(d => d.json()).then((final) => results.value = final.meals)

}


onMounted(async () => {
  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(d => d.json()).then((final) => categories.value = final.categories)
  await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert").then(d => d.json()).then((final) => results.value =  final.meals)

})

</script>

<template>
  <section class="grid grid-cols-5">
      <div class="flex row-span-1 col-span-full">
        <h1 class="w-[30vw] text-[#e6e6e9] text-2xl font-bold font-[Playfair-Display]">Categories</h1>
        <h1 class="w-[70vw] text-center text-[#e6e6e9] text-2xl font-bold font-[Playfair-Display]">{{ currentCategorey }}</h1>

      </div>
    <div class="grid gap-y-4 row-span-2 col-span-1 self-start justify-self-start">

      <ul class="text-[#dee0e4] grid gap-y-3 content-center top-0 w-fit">
        <CategoryBox @click="() => {
          currentCategorey = categorey.strCategory
          getMeals(categorey.strCategory)
        }" v-for="categorey in categories.slice(0, 6)" :title="categorey.strCategory" :image="categorey.strCategoryThumb" :key="categorey.idCategory"></CategoryBox>
  </ul>
</div>
<div class="grid grid-rows-2 gap-3 grid-cols-4 row-span-2 col-span-4 self-center">
    <RecipeBox v-for="meal in results.splice(0,8)" :name="meal.strMeal" :image="meal.strMealThumb" :meal-id="meal.idMeal"></RecipeBox>
  </div>
  </section>


</template>
