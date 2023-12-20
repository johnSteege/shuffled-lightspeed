<script setup>
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

const saveName = 'save1';

export const useGameState = defineStore('game', {
    state: () => {
        return {
            gameState: useLocalStorage(saveName, {}),
        }
    }
})
</script>