<template>
  <header
    class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60"
  >
    <UContainer class="flex items-center justify-between py-3">
      <NuxtLink
        :to="localePath('/')"
        class="text-lg font-bold whitespace-nowrap"
      >
        {{ $t("components.TheHeader.site_title") }}
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-6" aria-label="Primary">
        <NuxtLink
          v-for="page in pageList"
          :key="page.link"
          :to="localePath(page.link)"
          :aria-current="isActive(page.link) ? 'page' : undefined"
          :class="[
            'text-sm font-medium transition-colors underline-offset-4',
            isActive(page.link)
              ? 'text-primary underline'
              : 'text-gray-600 hover:text-primary',
          ]"
        >
          {{ $t(`components.TheHeader.${page.label}`) }}
        </NuxtLink>
      </nav>

      <div
        class="hidden md:flex items-center gap-2"
        aria-label="Language picker"
      >
        <span class="sr-only">{{ $t(`components.TheHeader.language`) }}</span>
        <div
          class="flex items-center gap-1 rounded-full border border-gray-200 dark:border-gray-800 px-2 py-1"
        >
          <UIcon
            name="i-heroicons-globe-alt"
            class="h-4 w-4 text-gray-500"
            aria-hidden="true"
          />
          <div class="flex items-center">
            <button
              v-for="lc in localeOptions"
              :key="lc.code"
              type="button"
              @click="switchToLocale(lc.code)"
              :class="[
                'px-2 py-0.5 text-xs rounded-full transition-colors',
                currentLocale === lc.code
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800',
              ]"
            >
              {{ lc.name }}
            </button>
          </div>
        </div>
      </div>

      <USlideover
        :title="$t(`components.TheHeader.site_title`)"
        v-model:open="isOpen"
        side="left"
        class="md:hidden"
        overlay
        :close="{
          variant: 'outline',
          class: 'rounded-full',
        }"
      >
        <UButton
          icon="i-heroicons-bars-3"
          variant="ghost"
          class="md:hidden"
          :aria-label="$t(`components.TheHeader.open_menu`)"
        />
        <template #body>
          <div class="p-4 space-y-6">
            <section>
              <h3
                class="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase"
              >
                {{ $t(`components.TheHeader.language`) }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <UButton
                  v-for="lc in localeOptions"
                  :key="lc.code"
                  size="xs"
                  :variant="currentLocale === lc.code ? 'solid' : 'ghost'"
                  :color="currentLocale === lc.code ? 'primary' : undefined"
                  @click="switchToLocale(lc.code)"
                >
                  <UIcon name="i-heroicons-globe-alt" class="h-3 w-3 mr-1" />
                  {{ lc.name }}
                </UButton>
              </div>
            </section>

            <UDivider />

            <section>
              <h3
                class="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase"
              >
                {{ $t(`components.TheHeader.pages`) }}
              </h3>
              <nav class="flex flex-col gap-2" aria-label="Mobile primary">
                <NuxtLink
                  v-for="page in pageList"
                  :key="page.link"
                  :to="localePath(page.link)"
                  class="text-base font-medium"
                  :class="[
                    isActive(page.link)
                      ? 'text-primary'
                      : 'text-gray-700 dark:text-gray-200',
                  ]"
                  @click="isOpen = false"
                >
                  {{ $t(`components.TheHeader.${page.label}`) }}
                </NuxtLink>
              </nav>
            </section>
          </div>
        </template>
      </USlideover>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const { locales, locale, t } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const route = useRoute();
const router = useRouter();

const localeOptions = computed(() =>
  (locales.value as Array<{ code: string; name?: string }>).map((lc) => ({
    code: lc.code,
    name: lc.name || lc.code.toUpperCase(),
  }))
);

const currentLocale = computed(() => locale.value);

function switchToLocale(code: "ja" | "en") {
  const target = switchLocalePath(code);
  if (target && target !== route.fullPath) router.push(target);
}

const pageList = [
  { label: "home", link: "/" },
  { label: "about", link: "/about" },
  { label: "new_records", link: "/newrecords" },
  { label: "data", link: "/data" },
  { label: "links", link: "/links" },
  { label: "updates", link: "/updates" },
] as const;

function isActive(path: string) {
  const resolved = localePath(path);
  return route.path === resolved;
}

const isOpen = ref(false);
</script>

<style scoped>
nav[aria-label="Primary"] a:hover {
  text-decoration-thickness: 2px;
}
</style>
