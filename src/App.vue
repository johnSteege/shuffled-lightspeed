<script setup>
import { useCounterStore } from "@/stores/run-instance-store";
</script>

<template>
  <div class="text-center m-4">
    <h1 class="text-3xl font-bold italic">Hello world!</h1>
    <h2>Counter: {{ useCounterStore().count }}</h2>
    <button class="btn btn-primary" @click="useCounterStore().increment()">Increment</button>
    <button class="btn btn-accent" @click="useCounterStore().reset()">Reset</button>
  </div>
</template>
