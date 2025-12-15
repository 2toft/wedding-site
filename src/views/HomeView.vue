<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Johan & Micaéla</h1>
        <p class="date">{{ $t("home.date") }}</p>
        <p class="welcome-msg">
          {{ $t("home.welcome") }}
        </p>
        <div class="cta-buttons">
          <router-link to="/rsvp" class="btn">{{
            $t("home.rsvpBtn")
          }}</router-link>
          <router-link to="/info" class="btn btn-secondary">{{
            $t("home.detailsBtn")
          }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Logic can be added here
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.hero {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: $color-light-green; // Placeholder for image
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  );

  .hero-content {
    max-width: 600px;
    padding: $spacing-md;

    h1 {
      font-size: 4rem;
      margin-bottom: $spacing-sm;
      color: $color-dark-green;

      @include mobile {
        font-size: 3rem;
      }
    }

    .date {
      font-family: $font-family-heading;
      font-size: 1.5rem;
      margin-bottom: $spacing-md;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .welcome-msg {
      font-size: 1.1rem;
      margin-bottom: $spacing-lg;
    }

    .cta-buttons {
      display: flex;
      gap: $spacing-md;
      justify-content: center;

      @include mobile {
        flex-direction: column;
        gap: $spacing-sm;
      }
    }
  }
}
</style>
