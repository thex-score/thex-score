<template>
  <footer
    class="bg-primary-50 dark:bg-primary-900 text-primary-900 dark:text-primary-100 border-t border-primary-200 dark:border-primary-800"
  >
    <UContainer class="pt-4 pb-2 flex flex-col gap-2">
      <p class="text-sm text-center whitespace-nowrap">
        © 2025
        <NuxtLink href="https://x.com/flower874_" target="_blank" class="hover:underline hover:underline-offset-2 hover:text-primary transition-colors">
          {{ $t(`components.TheFooter.tags.nyanko`) }}
        </NuxtLink>
        — All&nbsp;Rights&nbsp;Reserved.
      </p>

      <p class="text-xs self-end text-right whitespace-nowrap">
        Created&nbsp;by&nbsp;
        <NuxtLink href="https://wefma.net" target="_blank" class="hover:underline hover:underline-offset-2 hover:text-primary transition-colors">
          {{ $t(`components.TheFooter.tags.wefmaika`) }}
        </NuxtLink>
      </p>
    </UContainer>
  </footer>
</template>
