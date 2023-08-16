<template>
  <div class="a-side w-52">
    <aside
      class="fixed w-52 top-14 left-0 z-40 h-screen pt-2"
      aria-label="Sidebar"
    >
      <div class="h-full px-2 py-3 overflow-y-auto bg-gray-50 border-r border-slate-200 shadow-sm">
        <ul class="space-y-2">
          <li>
            <NuxtLink
              to="/"
              class="flex items-center p-1 text-gray-900 rounded hover:bg-gray-100 group text-sm"
            >
              <span class="ml-2">Home</span>
            </NuxtLink>
          </li>
          <!-- <li>
            <button
              type="button"
              class="flex items-center w-full p-1 text-base text-gray-900 transition duration-75 rounded group hover:bg-gray-100"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span class="flex-1 ml-2 text-left whitespace-nowrap text-sm"
                >データ取込</span
              >
              <span class="i-heroicons-chevron-down-20-solid w-5 h-5 ms-auto transform transition-transform duration-200 text-gray-500 group-hover:text-gray-900 text-gray-900"></span>
            </button>
            <ul id="dropdown-example" class="py-1 space-y-1">
              <li>
                <a
                  href="#"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >データ取込・登録</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >データ登録設定
                  </a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >データ取込履歴</a
                >
              </li>
            </ul>
          </li> -->
          <li>
            <button
              type="button"
              class="flex items-center w-full p-1 text-base text-gray-900 transition duration-75 rounded group hover:bg-gray-100"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span class="flex-1 ml-2 text-left whitespace-nowrap text-sm"
                >UIデザイン</span
              >
              <span class="i-heroicons-chevron-down-20-solid w-5 h-5 ms-auto transform transition-transform duration-200 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 rotate-180"></span>
            </button>
            <ul id="dropdown-example" class="py-1 space-y-1">
              <li>
                <NuxtLink
                  to="/ui/sample"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >UIサンプル</NuxtLink
                >
              </li>
            </ul>
            <ul id="dropdown-example" class="py-1 space-y-1">
              <li>
                <NuxtLink
                  to="/ui/button"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >Button</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/ui/input"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >Input</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/ui/tabs"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >Tabs</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/ui/dropdown"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >Dropdown</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              class="flex items-center w-full p-1 text-base text-gray-900 transition duration-75 rounded group hover:bg-gray-100"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span class="flex-1 ml-2 text-left whitespace-nowrap text-sm"
                >デザインサンプル</span
              >
              <span class="i-heroicons-chevron-down-20-solid w-5 h-5 ms-auto transform transition-transform duration-200 text-gray-500 group-hover:text-gray-900 text-gray-900"></span>
            </button>
            <ul id="dropdown-example" class="py-1 space-y-1">
              <li>
                <NuxtLink
                  to="/sample/scroll-table"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >横スクロールテーブル</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              class="flex items-center w-full p-1 text-base text-gray-900 transition duration-75 rounded group hover:bg-gray-100"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span class="flex-1 ml-2 text-left whitespace-nowrap text-sm"
                >ページ再現</span
              >
              <span class="i-heroicons-chevron-down-20-solid w-5 h-5 ms-auto transform transition-transform duration-200 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 rotate-180"></span>
            </button>
            <ul id="dropdown-example" class="py-1 space-y-1">
              <li>
                <NuxtLink
                  to="/c/activity-emissions/hubs"
                  class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded pl-6 group hover:bg-gray-100 text-sm"
                  >GHG排出</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-1 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-sm"
            >
              <span class="flex-1 ml-2 whitespace-nowrap">Kanban</span>
              <span
                class="inline-flex items-center justify-center px-2 ml-3 text-sm text-gray-800 bg-gray-100 rounded-full text-sm"
                >Pro</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-1 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-sm"
            >
              <span class="flex-1 ml-2 whitespace-nowrap">GHG削減活動</span>
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm text-blue-800 bg-blue-100 rounded-full text-sm"
                >3</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>
