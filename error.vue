<template>
  <TheHeader />
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">エラーが発生しました</h1>
    <p class="mb-6">{{ error?.statusCode }} - {{ error?.message }}</p>
    <div class="flex justify-center">
      <UButton to="/">トップページへ戻る</UButton>
    </div>
  </UContainer>
  <TheFooter />
</template>

<script setup>
defineProps({
  error: Object,
});
</script>
