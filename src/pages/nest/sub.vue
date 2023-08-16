<template>
  <div>
    this is nest sub page
    <NuxtLink class="font-medium text-blue-600 hover:underline mr-2" :to="{ name: 'nest-sub', query: { hoge: '1' } }">
      hoge: 1
    </NuxtLink>
    <NuxtLink class="font-medium text-blue-600 hover:underline mr-2" :to="{ name: 'nest-sub', query: { hoge: '2' } }">
      hoge: 2
    </NuxtLink>
    <button class="font-medium text-blue-600 hover:underline mr-2" @click="testnavigateTo">testnavigateTo 3</button>
    <button class="font-medium text-blue-600 hover:underline mr-2" @click="testRouterPush">testRouterPush 4</button>
  </div>
</template>

<script>

export default {
  setup() {
    console.log('nest sub page setup')
    const router = useRouter()
    const testnavigateTo = () => {
      navigateTo({
        name: 'nest-sub',
        query: {
          hoge: '3'
        }
      })
    }
    const testRouterPush = () => {
      router.push({
        name: 'nest-sub',
        query: {
          hoge: '4'
        }
      })
    }
    return {
      testnavigateTo,
      testRouterPush
    }
  }
}
</script>