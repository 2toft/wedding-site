<template>
  <div class="rsvp container section">
    <h2 v-if="!isSubmitted">{{ $t("rsvp.title") }}</h2>
    <p v-if="!isSubmitted" class="intro text-body">
      {{ $t("rsvp.intro") }}
    </p>
    <p v-if="!isSubmitted" class="note text-body">
      {{ $t("rsvp.perPersonNote") }}
    </p>

    <div class="rsvp-wrapper">
      <RsvpForm @submission-state-change="handleSubmissionStateChange" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RsvpForm from "../components/RsvpForm.vue";

const isSubmitted = ref(false);

const handleSubmissionStateChange = (submitted) => {
  isSubmitted.value = submitted;
};
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.rsvp {
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
  }
}

.intro {
  text-align: center;
  margin-bottom: $spacing-xs;
}

.note {
  text-align: center;
  margin-bottom: $spacing-lg;
  max-width: 40ch;
  margin-left: auto;
  margin-right: auto;
}

.rsvp-wrapper {
  max-width: 600px;
  margin: 0 auto;
}
</style>
