import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import {useStorage} from '@vueuse/core';

export const useGameInstanceStore = defineStore('counter', {
    state: () => {
      return { count: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      increment() {
        this.count++
      },
    },
  })