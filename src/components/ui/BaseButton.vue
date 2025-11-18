<template>
  <button :class="['btn', `btn--${variant}`, `btn--${size}`, `mr--${margin}`]" @click="emit('click')">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  size: { type: String, default: "md" },
  margin: { type: String, default: "md" },
  variant: { type: String, default: "primary" },
});

const emit = defineEmits(["click"]);
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
  transition: 0.2s;
  font-weight: 600;
}
.btn--primary {
  background: #2563eb;
}
.btn--danger {
  background: #ef4444;
}
.btn--success {
  background: #16a34a;
}
.btn--sm {
  font-size: 12px;
}
.btn--md {
  font-size: 14px;
}
.btn--lg {
  font-size: 17px;
  padding: 10px 18px;
}
.mr--md {
  margin: 14px;
}
</style>
