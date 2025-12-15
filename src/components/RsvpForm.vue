<template>
  <div class="rsvp-form-container">
    <form @submit.prevent="handleSubmit" class="rsvp-form" v-if="!success">
      <BaseInput
        id="name"
        :label="$t('rsvp.name')"
        v-model="form.name"
        required
        :placeholder="$t('rsvp.name')"
      />

      <BaseInput
        id="email"
        type="email"
        :label="$t('rsvp.email')"
        v-model="form.email"
        required
        placeholder="your@email.com"
      />

      <div class="form-group radio-group">
        <label>{{ $t("rsvp.attending") }}</label>
        <div class="options">
          <label class="radio-label">
            <input
              type="radio"
              v-model="form.attending"
              :value="true"
              required
            />
            {{ $t("rsvp.yes") }}
          </label>
          <label class="radio-label">
            <input type="radio" v-model="form.attending" :value="false" />
            {{ $t("rsvp.no") }}
          </label>
        </div>
      </div>

      <transition name="fade">
        <div v-if="form.attending">
          <BaseInput
            id="guests"
            type="number"
            :label="$t('rsvp.guests')"
            v-model="form.guests"
            min="1"
            max="5"
          />

          <BaseTextarea
            id="dietary"
            :label="$t('rsvp.dietary')"
            v-model="form.dietary"
            rows="3"
            :placeholder="$t('rsvp.dietaryPlaceholder')"
          />
        </div>
      </transition>

      <BaseTextarea
        id="message"
        :label="$t('rsvp.message')"
        v-model="form.message"
        rows="4"
        :placeholder="$t('rsvp.messagePlaceholder')"
      />

      <BaseButton
        type="submit"
        :loading="loading"
        :loading-text="$t('rsvp.sending')"
        full-width
      >
        {{ $t("rsvp.submit") }}
      </BaseButton>

      <p v-if="error" class="error-msg">{{ $t("rsvp.error") }}</p>
    </form>

    <div v-else class="success-message">
      <h3>{{ $t("rsvp.successTitle") }}</h3>
      <p>{{ $t("rsvp.successMsg") }}</p>
      <BaseButton @click="handleReset" variant="secondary">
        {{ $t("rsvp.sendAnother") }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRsvpForm } from "../composables/useRsvpForm";
import BaseInput from "./BaseInput.vue";
import BaseTextarea from "./BaseTextarea.vue";
import BaseButton from "./BaseButton.vue";

const { loading, error, success, submitToGoogleForm, resetForm } =
  useRsvpForm();

const form = reactive({
  name: "",
  email: "",
  attending: null,
  guests: 1,
  dietary: "",
  message: "",
});

const handleSubmit = async () => {
  await submitToGoogleForm(form);
};

const handleReset = () => {
  resetForm();
  // Reset form data
  form.name = "";
  form.email = "";
  form.attending = null;
  form.guests = 1;
  form.dietary = "";
  form.message = "";
};
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.rsvp-form {
  background: $color-white;
  padding: $spacing-lg;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.error-msg {
  color: #d32f2f;
  margin-top: $spacing-sm;
  text-align: center;
}

.success-message {
  text-align: center;
  padding: $spacing-xl 0;

  h3 {
    color: $color-primary-green;
    margin-bottom: $spacing-md;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, height 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
