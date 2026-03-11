<script setup lang="ts">
import { onMounted, ref, type Ref, } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const details: Ref = ref([])


onMounted(async () => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`).then(d => d.json()).then(final => {
    details.value = final.meals[0]
  }).catch(err => console.log(err))
})

</script>

<template>
  <section class="text-white">
    <h1 >{{ details.strMeal }}</h1>
    <p>Origin: {{ details.strArea }}</p>
    <div>
      <p>Instructions</p>
      <p>{{ details.strInstructions }}</p>

    </div>

  </section>
</template>
