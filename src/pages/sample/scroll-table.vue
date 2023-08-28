<template>
  <div class="flex flex-1 flex-col overflow-auto">
    <div class="p-6">
      <h1 class="text-2xl font-semibold text-green-500 mb-4">GHG排出登録</h1>
      <h3 class="text-gray-400 font-semibold mb-2">フィルター</h3>
      <div class="grid grid-cols-3 gap-3">
        <div class="">
          <label class="text-sm text-gray-600 block mb-1">選択1</label>
          <USelect v-model="selected" :options="people" />
        </div>
        <div class="">
          <label class="text-sm text-gray-600 block mb-1">選択2</label>
          <USelectMenu v-model="selected" :options="people" />
        </div>
        <div class="items-center justify-center">
          <label class="text-sm text-gray-600 block mb-1">選択3</label>
          <USelectMenu v-model="selected" :options="people" />
        </div>
      </div>
    </div>
    <div class="block not-prose rounded group text-center p-4">
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
          <UButton class="mr-1" color="gray" variant="solid">インポート</UButton>
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
                <span>行</span>
              </th>
              <th
                scope="col"
                width="120"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <ZbTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
                  Scope
                </ZbTooltip>
              </th>
              <th
                scope="col"
                width="180"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <ZbTooltip text="CO2または他の温室効果ガス（GHG）を排出した活動の分類" :popper="{ placement: 'top' }">
                  算定対象の活動
                </ZbTooltip>
                
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <ZbTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
                  添付
                </ZbTooltip>
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <ZbTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
                  ラベル
                </ZbTooltip>
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>タグ</span>
              </th>
              <th
                scope="col"
                width="180"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>サプライヤー</span>
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>符号</span>
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>活動量</span>
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>GHG</span>
              </th>
              <th
                scope="col"
                width="120"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>排出原単位</span>
              </th>
              <th
                scope="col"
                width="120"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>排CO2排出量</span>
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>総排出量</span>
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>登録日時</span>
              </th>
              <th
                scope="col"
                width="90"
                class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
              >
                <span>操作</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="(row, index) in dummyArray" :key="index" class="">
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50">{{ index + 1 }}</td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50">
                固定燃料
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50">
                Front-end Developer
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                lindsay
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
              </td>
              <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
                Member
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
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];

const selected = ref(people[0]);

const dummyArray = new Array(100);
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
      left: 180px;
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
      left: 180px;
      z-index: 2;
    }
  }
}
</style>
