<script setup lang="ts">
import CategoryBox from '@/components/CategoryBox.vue';
import RecipeBox from '@/components/RecipeBox.vue';
import { computed, ref, type Ref } from 'vue';
import { onMounted } from 'vue';

const categories: Ref = ref([])
const currentCategorey: Ref = ref("Dessert")

const results: Ref = ref([])

const query = ref("")

const filteredResults = computed(() => {
  return results.value.filter((food) => food.strMeal.toLowerCase().includes(query.value.trim().toLowerCase()))
})





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
      <div class="flex row-span-1 col-span-full my-9">
        <h1 class="w-[30vw] text-[#e6e6e9] text-2xl font-bold font-[Playfair-Display]">Categories</h1>
        <input type="search" v-model="query" class="text-white w-96 p-3 outline-0 border border-[#394050] rounded-3xl" placeholder="Search recipes and more..." name="" id="">

      </div>
    <div class="grid gap-y-4 row-span-2 col-span-1 self-start justify-self-start">

      <ul class="text-[#dee0e4] grid gap-y-3 content-center top-0 w-fit">
        <CategoryBox @click="() => {
          currentCategorey = categorey.strCategory
          getMeals(categorey.strCategory)
        }" v-for="categorey in categories.slice(0, 6)" :title="categorey.strCategory" :current="currentCategorey" :image="categorey.strCategoryThumb" :key="categorey.idCategory"></CategoryBox>
  </ul>
</div>
<div class="grid overflow-y-scroll overflow-x-hidden h-112 rounded-lg auto-rows-max gap-3 grid-cols-4 row-span-2 col-span-4 self-center">
    <RecipeBox v-for="meal in filteredResults" :name="meal.strMeal" :image="meal.strMealThumb" :meal-id="meal.idMeal"></RecipeBox>
  </div>
  </section>


</template>
