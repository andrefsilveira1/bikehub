<script setup>
const { type, placeholder, id } = defineProps([
  "modelValue",
  "update:modelValue",
  "type",
  "placeholder",
  "id",
  "required",
]);
</script>
<template>
  <input
    :required="required"
    :id="id"
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<style scoped>
input {
  border-radius: 7px;
  border: 1px solid #c4c4c4;
  font-size: 1.6rem;

  width: 100%;
  padding: 2rem 1.6rem;

  transition: 0.3s;
}

input::placeholder {
  color: rgba(9, 12, 8, 0.6);
  font-style: italic;
}

input:focus {
  outline: none;
  border: 1px solid #ff1654;
}
</style>
