<script setup>
import { useGameInstanceState } from "@/stores/run-instance-state";
</script>

<template>
  <div class="text-center m-4">
    <h1 class="text-3xl font-bold italic">Hello world!</h1>
    <h2>Counter: {{ useGameInstanceState().count }}</h2>
    <button class="btn btn-primary" @click="useGameInstanceState().increment()">Increment</button>
    <button class="btn btn-accent" @click="useGameInstanceState().reset()">Reset</button>
  </div>
</template>
