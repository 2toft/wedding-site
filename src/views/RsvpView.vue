<template>
  <div class="rsvp container section">
    <h2>{{ $t("rsvp.title") }}</h2>
    <p class="intro text-body">
      {{ $t("rsvp.intro") }}
    </p>

    <div class="rsvp-wrapper">
      <RsvpForm />
    </div>
  </div>
</template>

<script setup>
import RsvpForm from "../components/RsvpForm.vue";
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.rsvp {
  max-width: 800px;
  margin: 0 auto;
}

.intro {
  text-align: center;
  margin-bottom: $spacing-lg;
}

.rsvp-wrapper {
  max-width: 600px;
  margin: 0 auto;
}
</style>
