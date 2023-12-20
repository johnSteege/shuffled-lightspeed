import { ref } from "vue";
import { defineStore } from "pinia";
import MainMenu from "@components/MainMenu.vue";
import SettingsMenu from "@components/SettingsMenu.vue";
import GameScreen from "@components/GameScreen.vue";

export const useAppState = defineStore("app-state", {
  state: () => {
    return { screen: ref(MainMenu) };
  },

  actions: {
    toSettings() {
      this.screen = SettingsMenu;
    },
    toMainMenu() {
      this.screen = MainMenu;
    },
    toGameScreen() {
      this.screen = GameScreen;
    },
  },
});
