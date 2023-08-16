<template>
  <div class="flex flex-1 flex-col overflow-auto">
    <header class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-gray-200 bg-white/75">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-center justify-between gap-3 h-16">
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-3">Logo</div>
          </div>
          <div class="flex items-center justify-end flex-1 -mr-1.5 gap-3">
            this is header
          </div>
        </div>
      </div>
    </header>
    <div class="flex flex-1 overflow-auto">

      <Aside />

      <div class="main-content flex flex-1 overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#__nuxt {
  flex: 1;
  display: flex;
  overflow: auto;
}
</style>
