<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      :class="{ 'has-error': error }"
      v-bind="$attrs"
    ></textarea>
    <span v-if="error" class="error-text">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: [String, Number],
    default: 3,
  },
  error: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>
