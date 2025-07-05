<template>
  <div
    class="border border-gray-300 p-4 rounded bg-white h-[500px] overflow-auto shadow-md"
  >
    <p class="mb-4 text-sm text-gray-500">Bucket Content:</p>
    <ul class="space-y-1">
      <li
        v-for="file in files"
        :key="file.Key"
        class="px-2 py-1 border-b border-gray-100 hover:bg-gray-50 rounded cursor-pointer"
      >
        {{ file.Key }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// const { listFiles } = useS3();
const files = ref([]);
// console.log(window);

onMounted(async () => {
  console.log("coucou");
  console.log(window);
  console.log(window.s3Api);
  files.value = await window.s3Api.listFiles();
});
</script>
