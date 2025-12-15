<template>
  <div class="contact container section">
    <h2>{{ $t("contact.title") }}</h2>
    <p class="intro">{{ $t("contact.intro") }}</p>

    <form
      @submit.prevent="submitContact"
      class="contact-form"
      v-if="!submitted"
    >
      <div class="form-group">
        <label for="name">{{ $t("contact.name") }}</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="email">{{ $t("contact.email") }}</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="message">{{ $t("contact.message") }}</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          required
        ></textarea>
      </div>

      <!-- Honeypot field for spam protection -->
      <div style="display: none">
        <label for="honeypot">Do not fill this out</label>
        <input type="text" id="honeypot" v-model="form.honeypot" />
      </div>

      <button type="submit" class="btn" :disabled="loading">
        {{ loading ? $t("contact.sending") : $t("contact.submit") }}
      </button>
    </form>

    <div v-else class="success-message">
      <h3>{{ $t("contact.successTitle") }}</h3>
      <p>{{ $t("contact.successMsg") }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
  honeypot: "",
});

const loading = ref(false);
const submitted = ref(false);

const submitContact = async () => {
  if (form.honeypot) return; // Spam check

  loading.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Contact form submitted:", form);
  submitted.value = true;
  loading.value = false;
};
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.contact {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.intro {
  margin-bottom: $spacing-lg;
}

.contact-form {
  text-align: left;
  background: $color-white;
  padding: $spacing-lg;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: $spacing-md;

  label {
    display: block;
    margin-bottom: $spacing-xs;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid $color-soft-gray;
    border-radius: 4px;
    font-family: $font-family-body;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: $color-primary-green;
    }
  }
}
</style>
