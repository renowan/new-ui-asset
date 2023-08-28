<template>
  <div class="p-6 flex flex-1 flex-col">
    <h1 class="text-2xl font-semibold text-green-500 mb-4">GHG排出登録</h1>
    <h3 class="mb-1">Textサンプル</h3>
    <p class="text-sm text-gray-600 mb-4">
      どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌てのひらに載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始みはじめであろう。
    </p>

    <h3 class="mb-1">font Iconsサンプル</h3>
    <div class="mb-2 text-sm text-gray-600">
      文章の中にアイコンを<i class="icon-pencil"></i>入れてみる。<br>
      <i class="icon-up-open-mini"></i>
      <i class="icon-right-open-mini"></i>
      <i class="icon-left-open-mini"></i>
      <i class="icon-down-open-mini"></i>
      <i class="icon-info-circled"></i>
      <i class="icon-home"></i>
      <i class="icon-calendar-1"></i>
    </div>
    <h3 class="mb-1">Tooltipサンプル</h3>
    <div class="text-sm text-gray-600 mb-2">
      どこで生れたかとんと見当けんとうがつかぬ。<ZbTooltip
        text="Tooltip example"
        :popper="{ placement: 'top' }"
      >
        <span class="inline-flex items-baseline text-green-700"
          ><i class="icon-info-circled"></i> 吾輩</span
        > </ZbTooltip
      >はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。
    </div>

    <ul class="text-gray-400 text-xs mb-10">
      <li>
        1.
        何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している
      </li>
      <li>2. 吾輩はここで始めて人間というものを見た。</li>
      <li>
        3. しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族。
      </li>
    </ul>
    <div class="mb-10">
      <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput From normal</label>
        <ZbInput
          v-model="textValue"
          placeholder="placeholder"
        />
      </div>
      <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput 単位付き</label>
        <ZbInput v-model="textValue" placeholder="placeholder" unit="CO2" />
      </div>
      <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput From disabled</label>
        <ZbInput
          v-model="textValue"
          placeholder="placeholder"
          :disabled="true"
        />
      </div>
      <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput From search icon</label>
        <ZbInput
          v-model="textValue"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="placeholder"
        />
      </div>
      <div class="mb-0">
        <label class="text-gray-600 text-sm">ZbInput From search error</label>
        <ZbInput v-model="textValue" color="red" placeholder="placeholder" />
      </div>
    </div>

    <div class="mb-10">
      <label class="text-gray-600 text-sm">From ZbSelectDisplay</label>
      <ZbSelectDisplay @click="onClickSelectDisplay" />
    </div>

    <div class="mb-10">
      <div class="mb-1">
        <label class="text-gray-600 text-sm"
          >ZbCheckbox, checkboxValue: {{ checkboxValue }}</label
        >
      </div>
      <ZbCheckbox
        v-model="checkboxValue"
        name="notifications"
        label="Notifications"
      />
    </div>
    <div class="mb-10">
      <div class="mb-1">
        <label class="text-gray-600 text-sm mb-2"
          >ZbTooggle, toggleValue: {{ toggleValue }}</label
        >
      </div>
      <ZbToggle v-model="toggleValue" />
    </div>

    <div class="mb-10">
      <label class="text-gray-600 text-sm">Radio（要改造）</label>
      <ZbRadio
        v-for="method of methods"
        :key="method.name"
        v-model="radioSelected"
        v-bind="method"
      />
    </div>

    <div class="mb-10">
      <label class="text-gray-600 text-sm"
        >Radio（要改造）radioGroupSelected: {{ radioGroupSelected1 }}</label
      >
      <ZbRadioGroup
        v-model="radioGroupSelected1"
        name="bar"
        :options="methods"
      />
    </div>

    <div class="mb-10">
      <label class="text-gray-600 text-sm"
        >Radio（水平 horizontal）radioGroupSelected:
        {{ radioGroupSelected2 }}</label
      >
      <ZbRadioGroup
        v-model="radioGroupSelected2"
        layout="horizontal"
        name="hoge"
        :options="methods"
      />
    </div>

    <div class="mb-10">
      <div
        class="block p-4 border not-prose rounded border-gray-200 bg-gray-50 group"
      >
        <span class="text-green-500 font-semibold text-[15px] mb-1">
          一覧されている総計
        </span>
        <span class="text-sm font-normal text-gray-600">
          CO2排出量の総合計 47
        </span>
        <span class="text-sm font-normal text-gray-400">tCO2</span>
      </div>
    </div>

    <div class="mb-10">
      <h3>Badge</h3>
      <div class="mb-4">
        <ZbBadge class="mr-1" color="primary" variant="solid">primary</ZbBadge>
        <ZbBadge class="mr-1" color="red" variant="solid">red</ZbBadge>
        <ZbBadge class="mr-1" color="orange" variant="solid">orange</ZbBadge>
        <ZbBadge class="mr-1" color="blue" variant="solid">blue</ZbBadge>
      </div>
    </div>

    <h3 class="mb-1">Button</h3>
    <p class="text-sm mb-1">
      アイコンボタンが含まれる場合、親に
      <span class="text-sky-600">.flex</span> を付ける必要がある。
    </p>
    <div class="flex mb-4">
      <ZbButton class="mr-1" color="primary" variant="solid">primary</ZbButton>
      <ZbButton class="mr-1" color="gray" variant="solid">gray</ZbButton>
      <ZbButton class="mr-1" color="gray" variant="link">gray link</ZbButton>
      <ZbButton class="mr-1" color="white" variant="solid" size="md"
        >md white</ZbButton
      >
      <ZbButton
        icon="i-heroicons-pencil-square"
        size="sm"
        color="primary"
        variant="solid"
        :trailing="false"
        class="mr-1"
        >sm Button</ZbButton
      >
      <ZbButton
        icon="i-heroicons-pencil-square"
        size="md"
        color="primary"
        variant="solid"
        :trailing="false"
        class="mr-1"
        >md Button</ZbButton
      >
      <ZbButton
        icon="i-heroicons-pencil-square"
        size="md"
        color="primary"
        variant="solid"
        :trailing="false"
        class="mr-1"
        >md ZbButton</ZbButton
      >
    </div>

    <div class="mb-4">
      <h3>Size</h3>
      <ZbButton class="mr-1" color="gray" variant="solid" size="xs"
        >gray xs</ZbButton
      >
      <ZbButton class="mr-1" color="gray" variant="solid" size="sm"
        >gray sm</ZbButton
      >
      <ZbButton class="mr-1" color="gray" variant="solid" size="md"
        >gray md</ZbButton
      >
      <ZbButton class="mr-1" color="gray" variant="solid" size="lg"
        >gray lg</ZbButton
      >
    </div>

    <div class="mb-10">
      <h3 class="mb-1">Block</h3>
      <div class="grid grid-cols-3 gap-3 mb-4">
        <ZbButton class="mr-1" color="primary" variant="solid" :block="true"
          >Button 1</ZbButton
        >
        <ZbButton class="mr-1" color="primary" variant="solid" :block="true"
          >Button 2</ZbButton
        >
      </div>
    </div>

    <div class="mb-12">
      <h3>Modal</h3>
      <ZbButton
        class="mr-1"
        color="gray"
        variant="solid"
        @click="onShowModal('sm')"
        >Modal SM</ZbButton
      >
      <ZbButton
        class="mr-1"
        color="gray"
        variant="solid"
        @click="onShowModal('')"
        >Modal MD</ZbButton
      >
      <ZbButton
        class="mr-1"
        color="gray"
        variant="solid"
        @click="onShowModal('lg')"
        >Modal LG</ZbButton
      >
    </div>

    <div class="mb-10">
      <h3 class="mb-1">ZbPagination</h3>
      <ZbPagination v-model="paginationValue" :page-count="10" :total="44" />
    </div>

    <div class="mb-10">
      <h3 class="mb-1">Table 1</h3>
      <table
        class="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700"
      >
        <thead class="">
          <tr class="">
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Id</span>
            </th>
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Name</span>
            </th>
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Title</span>
            </th>
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Email</span>
            </th>
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Role</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
          <tr class="">
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">1</td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              固定燃料
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Front-end Developer
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              lindsay.walton@example.com
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Member
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">2</td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Courtney Henry
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Designer
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              courtney.henry@example.com
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Admin
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">3</td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Tom Cook
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Director of Product
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              tom.cook@example.com
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Member
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">4</td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Whitney Francis
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Copywriter
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              whitney.francis@example.com
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Admin
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3 class="mb-1">Table 2</h3>
      <table
        class="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700 mb-10"
      >
        <thead class="bg-gray-100">
          <tr class="">
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Id</span>
            </th>
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Name</span>
            </th>
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Title</span>
            </th>
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Email</span>
            </th>
            <th
              scope="col"
              class="text-left rtl:text-right px-3 py-2 text-gray-900 dark:text-white font-semibold text-sm"
            >
              <span>Role</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
          <tr class="">
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">1</td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              固定燃料
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Front-end Developer
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              lindsay.walton@example.com
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Member
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">2</td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Courtney Henry
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Designer
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              courtney.henry@example.com
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Admin
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">3</td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Tom Cook
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Director of Product
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              tom.cook@example.com
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Member
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">4</td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Whitney Francis
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Copywriter
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              whitney.francis@example.com
            </td>
            <td class="whitespace-nowrap px-3 py-2 text-gray-500 text-sm">
              Admin
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ZbModal
      title="モーダルサンプル"
      v-model="showModal"
      body-class="p-0"
      @on-close="onCloseModal"
    >
      <div class="text-sm leading-6 text-gray-600">
        吾輩わがはいは猫である。名前はまだ無い。
        　どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌てのひらに載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始みはじめであろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶やかんだ。その後ご猫にもだいぶ逢あったがこんな片輪かたわには一度も出会でくわした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙けむりを吹く。どうも咽むせぽくて実に弱った。これが人間の飲む煙草たばこというものである事はようやくこの頃知った。
      </div>
    </ZbModal>
  </div>
</template>

<script setup>
const textValue = ref('')

const checkboxValue = ref(true)
const paginationValue = ref(2)

const methods = [
  {
    name: 'email',
    value: 'email',
    label: 'Email',
  },
  {
    name: 'sms',
    value: 'sms',
    label: 'Phone (SMS)',
  },
  {
    name: 'push',
    value: 'push',
    label: 'Push notification',
  },
]

const radioSelected = ref('sms')
const radioGroupSelected1 = ref(methods[0].value)
const radioGroupSelected2 = ref(methods[0].value)

const onClickSelectDisplay = () => {
  console.log('onClickSelectDisplay')
}

const onCloseModal = () => {
  console.log('onCloseModal')
}

const showModal = ref(false)
const toggleValue = ref(false)
const modalSize = ref('')
const onShowModal = (size) => {
  showModal.value = true
  modalSize.value = size
}

const tabIndex = ref(0)
const tabsOptions = [
  { label: 'tab1', index: 0 },
  { label: 'tab2', index: 1 },
  { label: 'tab3', index: 2 },
  { label: 'tab4', index: 3 },
]

const onChangeTabs = (index) => {
  console.log('onChangeTabs', index)
}
</script>

<style>
.demo-icon {
  font-family: "fontello";
    font-style: normal;
    font-weight: normal;
    speak: never;
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: .2em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 1em;
    margin-left: .2em;
}
</style>