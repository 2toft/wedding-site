<template>
  <div class="rsvp container section">
    <img
      class="side-art side-art-right rsvp-art"
      src="/illustrations/heart_dark.svg"
      alt=""
      aria-hidden="true"
    />

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
  position: relative;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;

  > * {
    position: relative;
    z-index: 2;
  }

  .side-art {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    opacity: 0.24;
    object-fit: contain;
  }

  .side-art-right {
    right: 0%;
    top: 16%;
    transform: translateY(-50%);
    width: 100px;
  }

  h2 {
    text-align: center;
  }

  @include mobile {
    .side-art-right {
      width: clamp(78px, 22vw, 110px);
      opacity: 0.16;
    }
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
