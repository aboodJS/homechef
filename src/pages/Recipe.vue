<script setup lang="ts">
import { onMounted, ref, type Ref, } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const details: Ref = ref([])
const ingrediants: Ref = ref([])




onMounted(async () => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`).then(d => d.json()).then(final => {
    details.value = final.meals[0]
  }).catch(err => console.log(err))

  for (const key in details.value) {
    if (key.match("strIngredient")  != null) {
      if (details.value[key] !== "") {
        ingrediants.value.push(details.value[key])
      }

    }

  }
})

</script>

<template>
  <section class="text-white grid gap-6">
    <div>
      <h1 class="font-bold text-2xl">{{ details.strMeal }}</h1>
      <p class="font-bold">Origin: {{ details.strArea }}</p>

    </div>
    <div>
      <p>Instructions</p>
      <p>{{ details.strInstructions }}</p>

    </div>
       <div class="gap-3 grid">
         <h1 class="font-bold text-xl">ingrediants</h1>
               <ul class="list-disc">
                  <li :key="i"  v-for="ing,i in ingrediants">- {{ ing }}</li>
               </ul>
       </div>

  </section>
</template>
