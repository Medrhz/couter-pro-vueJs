<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px #0002;
  width: 300px;
  margin: auto;
}
</style>
