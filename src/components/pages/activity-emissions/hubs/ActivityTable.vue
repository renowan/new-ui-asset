<template>
  <table
    class="border-collapse table-fixed w-full divide-y divide-gray-300 sticky-table ghg-table"
  >
    <thead class="bg-gray-100">
      <tr class="">
        <th
          scope="col"
          width="40"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
        <ZbCheckbox />
        </th>
        <th
          scope="col"
          width="120"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <UTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
            <i class="icon-info-circled"></i> Scope
          </UTooltip>
        </th>
        <th
          scope="col"
          width="180"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <ZbTooltip
            text="CO2または他の温室効果ガス（GHG）を排出した活動の分類"
            :popper="{ placement: 'top' }"
          >
          <i class="icon-info-circled"></i> 算定対象の活動 <i class="icon-sort-down"></i> 
          </ZbTooltip>
        </th>
        <th
          scope="col"
          width="90"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <ZbTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
            <i class="icon-info-circled"></i> 添付 
          </ZbTooltip>
        </th>
        <th
          scope="col"
          width="90"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <ZbTooltip text="Tooltip説明文" :popper="{ placement: 'top' }">
            <i class="icon-info-circled"></i> ラベル
          </ZbTooltip>
        </th>
        <th
          scope="col"
          width="90"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <span>タグ</span>
        </th>
        <th
          scope="col"
          width="180"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <span>サプライヤー</span>
        </th>
        <th
          scope="col"
          width="90"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <span>符号</span>
        </th>
        <th
          scope="col"
          width="90"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <span>活動量</span>
        </th>
        <th
          scope="col"
          width="90"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <span>GHG</span>
        </th>
        <th
          scope="col"
          width="120"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <span>排出原単位</span>
        </th>
        <th
          scope="col"
          width="120"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <span>排CO2排出量</span>
        </th>
        <th
          scope="col"
          width="90"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <span>総排出量</span>
        </th>
        <th
          scope="col"
          width="90"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
        >
          <span>登録日時</span>
        </th>
        <th
          scope="col"
          width="90"
          class="text-left rtl:text-right px-3 py-2 bg-gray-100 text-gray-600 font-semibold text-sm"
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
          <ZbCheckbox />
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
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
        <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">hoge</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const dummyArray = new Array(100)
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
      left: 40px;
      z-index: 10;
    }
    th:nth-child(3) {
      position: sticky;
      left: 160px;
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
      left: 40px;
      z-index: 2;
    }
    td:nth-child(3) {
      position: sticky;
      left: 160px;
      z-index: 2;
    }
  }
}
</style>