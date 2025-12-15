<template>
  <button
    class="btn"
    :class="{ 'btn-secondary': variant === 'secondary', 'btn-full': fullWidth }"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <slot v-if="!loading"></slot>
    <span v-else>{{ loadingText }}</span>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: "Loading...",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});
</script>
