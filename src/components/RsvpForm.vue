<template>
  <div class="rsvp-form-container">
    <form @submit.prevent="handleSubmit" class="rsvp-form" v-if="!success">
      <BaseInput
        id="email"
        type="email"
        :label="$t('rsvp.email')"
        v-model="form.email"
        required
        :placeholder="$t('rsvp.email_placeholder')"
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

          <div class="guest-details-section">
            <h4>{{ $t("rsvp.guestDetailsTitle") }}</h4>

            <div
              v-for="(guest, index) in form.guestDetails"
              :key="`guest-${index}`"
              class="guest-card"
            >
              <p class="guest-card-title">
                {{ $t("rsvp.guestCardTitle", { number: index + 1 }) }}
              </p>

              <BaseInput
                :id="`guest-name-${index}`"
                :label="$t('rsvp.guestName')"
                v-model="guest.name"
                :placeholder="$t('rsvp.guestNamePlaceholder')"
              />

              <BaseTextarea
                :id="`guest-info-${index}`"
                :label="$t('rsvp.guestInfo')"
                v-model="guest.info"
                rows="2"
                :placeholder="$t('rsvp.guestInfoPlaceholder')"
              />

              <div class="form-group">
                <label :for="`guest-drink-${index}`">{{
                  $t("rsvp.guestDrink")
                }}</label>
                <select
                  :id="`guest-drink-${index}`"
                  v-model="guest.drinkPreference"
                  required
                >
                  <option disabled value="">
                    {{ $t("rsvp.guestDrinkPlaceholder") }}
                  </option>
                  <option value="alcohol">{{ $t("rsvp.alcohol") }}</option>
                  <option value="nonAlcohol">
                    {{ $t("rsvp.nonAlcohol") }}
                  </option>
                </select>
              </div>
            </div>
          </div>
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
import { computed, reactive, watch } from "vue";
import { useRsvpForm } from "../composables/useRsvpForm";
import BaseInput from "./BaseInput.vue";
import BaseTextarea from "./BaseTextarea.vue";
import BaseButton from "./BaseButton.vue";

const { loading, error, success, submitToGoogleForm, resetForm } =
  useRsvpForm();

const form = reactive({
  email: "",
  attending: null,
  guests: 1,
  guestDetails: [{ name: "", info: "", drinkPreference: "" }],
  message: "",
});

const normalizedGuests = computed(() => {
  const count = Number(form.guests);
  if (!Number.isFinite(count)) return 1;
  return Math.min(5, Math.max(1, Math.floor(count)));
});

watch(
  normalizedGuests,
  (count) => {
    if (form.guestDetails.length > count) {
      form.guestDetails = form.guestDetails.slice(0, count);
      return;
    }

    while (form.guestDetails.length < count) {
      form.guestDetails.push({ name: "", info: "", drinkPreference: "" });
    }
  },
  { immediate: true },
);

watch(
  () => form.attending,
  (attending) => {
    if (!attending) {
      form.guests = 1;
      form.guestDetails = [{ name: "", info: "", drinkPreference: "" }];
    }
  },
);

const handleSubmit = async () => {
  await submitToGoogleForm(form);
};

const handleReset = () => {
  resetForm();
  // Reset form data
  form.email = "";
  form.attending = null;
  form.guests = 1;
  form.guestDetails = [{ name: "", info: "", drinkPreference: "" }];
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

.guest-details-section {
  margin-bottom: $spacing-md;

  h4 {
    margin: $spacing-sm 0 $spacing-md;
  }
}

.guest-card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: $spacing-md;
  margin-bottom: $spacing-md;
}

.guest-card-title {
  font-weight: 600;
  margin: 0 0 $spacing-sm;
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
  transition:
    opacity 0.3s ease,
    height 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
