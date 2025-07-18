<template>
  <footer
    class="bg-primary-50 dark:bg-primary-900
            text-primary-900 dark:text-primary-100
            border-t border-primary-200 dark:border-primary-800"
  >
    <UContainer class="pt-4 pb-2 flex flex-col gap-2">
      <!-- 1行目：中央 -->
      <p class="text-sm text-center whitespace-nowrap">
        © 2025
        <ULink to="https://x.com/flower874_" as="button">にゃんこ</ULink>
        — All&nbsp;Rights&nbsp;Reserved.
      </p>

      <!-- 2行目：右端 -->
      <p class="text-xs self-end text-right whitespace-nowrap">
        Created&nbsp;by&nbsp;
        <ULink to="https://wefma.net" as="button">ゑふまいか</ULink>
      </p>
    </UContainer>
  </footer>
</template>