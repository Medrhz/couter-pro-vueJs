import { computed, ref } from "vue";

export function useCounter() {
  const counter = ref(0);
  const isEvent = computed(() => counter.value % 2 === 0);

  function inc() {
    counter.value++;
  }
  function dec() {
    counter.value--;
  }
  function reset() {
    counter.value = 0;
  }

  return { counter, dec, inc, dec, reset, isEvent };
}
