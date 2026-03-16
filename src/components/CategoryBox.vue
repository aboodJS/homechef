<script setup lang="ts">
const props = defineProps(["title", "image", "id", "current"])

</script>

<template>
  <li  :id="props.id" :class="['flex md:w-56  items-center border border-[#e6e7eb] rounded-lg cursor-pointer', props.current === props.title ? 'bg-[#febd2f] text-black': '' ]"><img class="w-24 relative z-0" :src="props.image" alt=""><p class="max-md:text-xs">{{ props.title }}</p></li>
</template>
