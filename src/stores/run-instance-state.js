import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import {useStorage} from '@vueuse/core';

export const useGameInstanceState = defineStore('counter', {
    state: () => {
      return { count: useStorage('count', 0) }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      increment() {
        this.count++;
      },
      reset() {
        this.count = 0;
      }
    },
  })