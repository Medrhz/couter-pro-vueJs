<template>
  <BaseCard>
    <h2>counter Professional</h2>
    <h1>{{ counter }}</h1>
    <p>
      number is <strong>{{ isEvent ? "even" : "odd" }}</strong>
    </p>
    <div class="action">
      <BaseButton variant="primary" @click="inc">+</BaseButton>
      <BaseButton variant="danger" @click="dec">-</BaseButton>
      <BaseButton variant="success" @click="reset">Reset</BaseButton>
    </div>
  </BaseCard>
</template>

<script setup>
import { useCounter } from "@/composables/userCounter";
import BaseCard from "../ui/BaseCard.vue";
import BaseButton from "../ui/BaseButton.vue";

const { counter, inc, dec, reset, isEvent } = useCounter();
</script>

<style scoped>
.actions {
  margin-top: 12px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>
