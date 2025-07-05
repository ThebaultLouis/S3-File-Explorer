<template>
  <div
    class="border border-gray-300 p-4 rounded bg-white h-[500px] overflow-auto shadow-md"
    @drop.prevent="handleDrop"
    @dragover.prevent
  >
    <p class="mb-4 text-sm text-gray-500">Contenu du bucket :</p>
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

<script setup>
import { onMounted, ref } from "vue";
import { listFiles, uploadFile } from "../../aws/s3";

const files = ref([]);

onMounted(async () => {
  files.value = await listFiles();
});

function handleDrop(e) {
  const file = e.dataTransfer.files[0];
  if (file)
    uploadFile(file).then(() => listFiles().then((f) => (files.value = f)));
}
</script>