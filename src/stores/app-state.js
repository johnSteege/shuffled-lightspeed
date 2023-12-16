import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAppState = defineStore("counter", {
  state: () => {
    return { count: useStorage("counter", 0) };
  },

  actions: {
    increment() {
      this.count++;
    },
  },
});
