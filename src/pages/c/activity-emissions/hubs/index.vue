<template>
  <div class="flex flex-1 flex-col overflow-auto">
    <div class="px-6 pt-6">
      <div class="flex mb-4">
        <h1 class="flex-1 text-2xl font-semibold text-green-500">
          GHG排出登録
        </h1>
        <div class="flex">
          <div class="mr-1">
            <ZbSelect
              v-model="selectedYear"
              :options="yearOptions"
              option-attribute="label"
            />
          </div>
          <ZbSelect
            v-model="selectedMonth"
            :options="monthOptions"
            option-attribute="label"
          />
        </div>
      </div>
      <h3 class="text-gray-400 font-semibold mb-2">フィルター</h3>
      <div class="grid grid-cols-3 gap-3">
        <div class="">
          <label class="text-sm text-gray-600 block mb-1">拠点名</label>
          <ZbSelect v-model="selected" :options="people" />
        </div>
        <div class="">
          <label class="text-sm text-gray-600 block mb-1">企業名</label>
          <ZbSelect v-model="selected" :options="people" />
        </div>
        <div class="items-center justify-center">
          <label class="text-sm text-gray-600 block mb-1">グループ</label>
          <ZbSelect v-model="selected" :options="people" />
        </div>
      </div>
    </div>
    <div class="block not-prose rounded group text-center p-4 pt-6">
      <span class="text-green-500 font-semibold text-[15px] mb-1">
        一覧されている総計
      </span>
      <span class="text-sm font-normal text-gray-600">
        CO2排出量の総合計 47
      </span>
      <span class="text-sm font-normal text-gray-400">tCO2</span>
    </div>
    <div class="flex flex-1 flex-col table-container overflow-auto">
      <div class="flex p-3 bg-gray-50 border-b items-start">
        <div class="flex-1">
          <UButton class="mr-1" color="primary" variant="solid"
            >データコピー</UButton
          >
          <UButton class="mr-1" color="gray" variant="solid"
            >エクスポート</UButton
          >
          <UButton class="mr-1" color="gray" variant="solid"
            >インポート</UButton
          >
          <UButton class="mr-1" color="gray" variant="solid">一括編集</UButton>
        </div>
        <UButtonGroup size="sm">
          <UButton label="tCO2" color="green" />
          <UButton label="kgCO2" color="white" />
        </UButtonGroup>
      </div>
      <div class="flex flex-1 flex-col overflow-auto">
        <table
          class="border-collapse table-fixed w-full divide-y divide-gray-300 sticky-table ghg-table"
        >
          <thead class="bg-gray-100">
            <tr class="">
              <th
                scope="col"
                width="60"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>#</span>
              </th>
              <th
                scope="col"
                width="220"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <ZbTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
                  拠点名
                </ZbTooltip>
              </th>
              <th
                scope="col"
                width="220"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <ZbTooltip
                  text="CO2または他の温室効果ガス（GHG）を排出した活動の分類"
                  :popper="{ placement: 'top' }"
                >
                  企業名
                </ZbTooltip>
              </th>
              <th
                scope="col"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <ZbTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
                  CO2排出量
                </ZbTooltip>
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <ZbTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
                  操作
                </ZbTooltip>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="(row, index) in dummyArray" :key="index" class="">
              <td
                class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50"
              >
                {{ index + 1 }}
              </td>
              <td
                class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50"
              >
                <NuxtLink
                  class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-normal rounded text-sm gap-x-1.5 text-primary-500 hover:text-primary-600 disabled:text-primary-500 dark:text-primary-400 dark:hover:text-primary-500 dark:disabled:text-primary-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                  :to="`/c/activity-emissions/hubs/${index + 1}`"
                >
                  拠点名 {{ index + 1 }}
                </NuxtLink>
              </td>
              <td
                class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50"
              >
                Front-end Developer
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                0 tCO2
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                ...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  { label: 'Wade Cooper', value: 1001 },
  { label: 'Arlene Mccoy', value: 1002 },
  { label: 'Devon Webb', value: 1003 },
  { label: 'Tom Cook', value: 1004 },
  { label: 'Tanya Fox', value: 1005 },
  { label: 'Hellen Schmidt', value: 1006 },
]

const selected = ref(people[0].value)

const dummyArray = new Array(100)

const yearOptions = [
  { label: '2020', value: '2020' },
  { label: '2021', value: '2021' },
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
]
const monthOptions = [
  { label: '1月', value: '01' },
  { label: '2月', value: '02' },
  { label: '3月', value: '03' },
  { label: '4月', value: '04' },
]

const selectedYear = ref(yearOptions[0].value)
const selectedMonth = ref(monthOptions[0].value)
</script>

<style scoped>
.sticky-table {
  border-spacing: 0;
  thead {
    th {
      position: sticky;
      top: 0;
      z-index: 1;
    }
  }
}

.ghg-table {
  thead {
    th:nth-child(1) {
      position: sticky;
      left: 0;
      z-index: 10;
    }
    th:nth-child(2) {
      position: sticky;
      left: 60px;
      z-index: 10;
    }
    th:nth-child(3) {
      position: sticky;
      left: 280px;
      z-index: 10;
    }
  }
  tbody {
    td:nth-child(1) {
      position: sticky;
      left: 0;
      z-index: 2;
    }
    td:nth-child(2) {
      position: sticky;
      left: 60px;
      z-index: 2;
    }
    td:nth-child(3) {
      position: sticky;
      left: 280px;
      z-index: 2;
    }
  }
}
</style>
