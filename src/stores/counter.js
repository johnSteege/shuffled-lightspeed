import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useStorage} from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const count = useStorage('count',0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function reset() {
    count.value = 0;
  }

  return { count, doubleCount, increment, reset }
})
