<template>
  <!-- -------------------------------------------------------------
        上部固定ヘッダ
  -------------------------------------------------------------- -->
  <header class="border-b border-gray-200 bg-white dark:bg-gray-900">
    <UContainer class="flex items-center justify-between py-3">

      <NuxtLink to="/" class="text-lg font-bold whitespace-nowrap">
        裏スコボみたいなメモ書きEX
      </NuxtLink>

      <nav class="hidden md:flex gap-6">
        <NuxtLink
          v-for="page in pageList"
          :key="page.link"
          :to="page.link"
          :class="[
            'text-sm font-medium transition-colors',
            $route.path === page.link
              ? 'text-primary'
              : 'text-gray-600 hover:text-primary'
          ]"
        >
          {{ page.label }}
        </NuxtLink>
      </nav>



      <USlideover
        title="裏スコボみたいなメモ書きEX"
        v-model:open="isOpen"
        side="left"
        class="md:hidden"
        overlay
        :close="{
          variant: 'outline',
          class: 'rounded-full'
        }"
      >
        <UButton
          icon="i-heroicons-bars-3"
          variant="ghost"
          class="md:hidden"
          aria-label="メニューを開く"
        />
        <template #body>
          <div class="p-4">
            <nav class="flex flex-col gap-4">
              <NuxtLink
                v-for="page in pageList"
                :key="page.link"
                :to="page.link"
                class="text-base font-medium"
                @click="isOpen = false"
              >
                {{ page.label }}
              </NuxtLink>
            </nav>
          </div>
        </template>
      </USlideover>
    </UContainer>
  </header>

</template>

<script setup lang="ts">

  const pageList = [
    {
      label: 'ホーム',
      link: '/'
    },
    {
      label: 'ページ概要',
      link: '/about'
    },
    {
      label: '更新履歴',
      link: '/updates'
    },
  ]


  const isOpen = ref(false)
</script>