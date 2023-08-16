<template>
  <div class="p-4">
    this is index page
    <NuxtLink class="font-medium text-blue-600 hover:underline mr-2" :to="{ name: 'nest', query: { hoge: '1' } }">
      hoge: 1
    </NuxtLink>
    <NuxtLink class="font-medium text-blue-600 hover:underline mr-2" :to="{ name: 'nest', query: { hoge: '2' } }">
      hoge: 2
    </NuxtLink>
    <NuxtLink class="font-medium text-blue-600 hover:underline mr-2" :to="{ name: 'nest-sub' }">
      nest-sub
    </NuxtLink>
    <button class="font-medium text-blue-600 hover:underline mr-2" @click="testnavigateTo">testnavigateTo 3</button>
    <button class="font-medium text-blue-600 hover:underline mr-2" @click="testRouterPush">testRouterPush 4</button>
  </div>
</template>

<script>

export default {
  setup() {
    console.log('nest index page setup')
    const router = useRouter()
    const testnavigateTo = () => {
      navigateTo({
        name: 'nest',
        query: {
          hoge: '3'
        }
      })
    }
    const testRouterPush = () => {
      router.push({
        name: 'nest',
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