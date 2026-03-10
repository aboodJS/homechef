<script setup lang="ts">
const props = defineProps(["title", "image", "id"])

</script>

<template>
  <li  :id="props.id" class="flex w-56  items-center border border-[#e6e7eb] rounded-lg cursor-pointer"><img class="w-24 relative z-0" :src="props.image" alt=""><p>{{ props.title }}</p></li>
</template>
