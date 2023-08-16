<template>
  <div class="flex flex-1 flex-col overflow-auto">
    <div class="px-6 pt-6 mb-6">
      <div class="flex mb-2">
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
      <div class="text-sm mb-4">
        /
        <NuxtLink
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-normal rounded text-sm gap-x-1.5 px-2.5 py-1.5 text-primary-500 hover:text-primary-600 disabled:text-primary-500 dark:text-primary-400 dark:hover:text-primary-500 dark:disabled:text-primary-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          to="/c/activity-emissions/hubs"
        >
          拠点一覧
        </NuxtLink>
        / 拠点名hoge
      </div>
      <h3 class="text-gray-400 font-semibold mb-2">フィルター</h3>
      <div class="grid grid-cols-6 gap-3">
        <div class="col-span-2">
          <label class="text-sm text-gray-700 block mb-1">Scope-Category</label>
          <ZbSelectDisplay @click="onCSelectCategory" />
        </div>
        <div class="col-span-2">
          <label class="text-sm text-gray-700 block mb-1">GHG</label>
          <ZbSelect v-model="selected" :options="people" />
        </div>
        <div class="col-span-2">
          <label class="text-sm text-gray-700 block mb-1">算定対象の活動</label>
          <ZbSelect v-model="selected" :options="people" />
        </div>
        <div class="col-span-3">
          <label class="text-sm text-gray-700 block mb-1">ラベル</label>
          <ZbInput v-model="textValue" placeholder="placeholder" :autofocus="true" />
        </div>
        <div class="col-span-3">
          <label class="text-sm text-gray-700 block mb-1">タグ</label>
          <ZbInput v-model="textValue" placeholder="placeholder" :autofocus="true" />
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-gray-50 p-3">
      <div class="grid md:grid-cols-2 gap-3 mb-2">
        <div>
          <UButton class="mr-1" color="gray" variant="solid"
            >入力項目追加</UButton
          >
          <UButton class="mr-1" color="gray" variant="solid"
            >一覧から新規追加</UButton
          >
        </div>
        <div class="md:text-right">
          <UButtonGroup size="sm" class="mr-1">
            <UButton label="マーケット" color="green" />
            <UButton label="ロケーション" color="white" />
          </UButtonGroup>
          <UButtonGroup size="sm">
            <UButton label="tCO2" color="green" />
            <UButton label="kgCO2" color="white" />
          </UButtonGroup>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex-1 mr-6">
          <UCheckbox label="全選択" />
        </div>
        <div>
          <span class="text-sm mr-2">0個のアイテムを選択中</span>
          <UButton class="mr-1" color="gray" variant="solid">コピー</UButton>
          <UButton class="mr-1" color="red" variant="solid">削除</UButton>
        </div>
      </div>
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
              <UTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
                Scope
              </UTooltip>
            </th>
            <th
              scope="col"
              width="180"
              class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-900 font-semibold text-sm"
            >
              <ZbTooltip
                text="CO2または他の温室効果ガス（GHG）を排出した活動の分類"
                :popper="{ placement: 'top' }"
              >
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
            <td
              class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50"
            >
              {{ index + 1 }}
            </td>
            <td
              class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50"
            >
              固定燃料
            </td>
            <td
              class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm bg-gray-50"
            >
              Front-end Developer
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              hoge
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ZbModal title="Scope-Category選択" v-model="showCategoryModal" body-class="p-0">
      <div class="flex flex-col">
        <div class="flex border-b border-gray-100 px-4 py-3 text-sm text-gray-500">
          <ZbFilterItem :item="{ label: 'Scope1', code: 'SCOPE1' }" @on-delete="onDeleteFilterItem" />
          <ZbFilterItem :item="{ label: 'Scope2', code: 'SCOPE2' }" @on-delete="onDeleteFilterItem" />
          <ZbFilterItem :item="{ label: 'Scope3 Category5', code: 'SCOPE3_CATEGORY5' }" @on-delete="onDeleteFilterItem" />
        </div>
          
        <ul>
          <li class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"><input type="checkbox" class="mr-2"> Scope1</li>
          <li class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"><input type="checkbox" class="mr-2"> Scope2</li>
          <li class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"><input type="checkbox" class="mr-2"> Scope3 Category1</li>
          <li class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"><input type="checkbox" class="mr-2"> Scope3 Category2</li>
          <li class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"><input type="checkbox" class="mr-2"> Scope3 Category3</li>
          <li class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"><input type="checkbox" class="mr-2"> Scope3 Category4</li>
          <li class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"><input type="checkbox" class="mr-2"> Scope3 Category5</li>
          <li class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"><input type="checkbox" class="mr-2"> Scope3 Category6</li>
          <li class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"><input type="checkbox" class="mr-2"> Scope3 Category7</li>
        </ul>

      </div>
    </ZbModal>
  </div>
</template>

<script setup>
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

const selectedYear = ref(yearOptions[0])
const selectedMonth = ref(monthOptions[0])
const dummyArray = new Array(100)

const people = [
  { label: 'Wade Cooper', value: 1001 },
  { label: 'Arlene Mccoy', value: 1002 },
  { label: 'Devon Webb', value: 1003 },
  { label: 'Tom Cook', value: 1004 },
  { label: 'Tanya Fox', value: 1005 },
  { label: 'Hellen Schmidt', value: 1006 },
]

const selected = ref(people[0])
const textValue = ref('')

const showCategoryModal = ref(false)
const onCSelectCategory = () => {
  showCategoryModal.value = true
  console.log('event')
}

const setIsOpen = (value) => {
  showCategoryModal.value = value
  console.log('setIsOpen')
}

const onDeleteFilterItem = (item) => {
  console.log(item)
}
</script>

<style>
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
