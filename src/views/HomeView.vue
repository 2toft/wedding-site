<template>
  <div class="home">
    <section class="hero">
      <img
        class="side-art side-art-right joyride-art"
        src="/illustrations/joyride.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        class="side-art side-art-left discoball-art"
        src="/illustrations/discoball.svg"
        alt=""
        aria-hidden="true"
      />

      <div class="hero-content">
        <h1 class="names">{{ COUPLE_NAMES }}</h1>
        <p class="date text-meta">{{ $t("home.date") }}</p>
        <p class="welcome-msg text-body">
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
import { COUPLE_NAMES } from "../config/site";
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.hero {
  position: relative;
  overflow: hidden;
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

  .side-art {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: clamp(180px, 20vw, 320px);
    max-height: 75vh;
    object-fit: contain;
    z-index: 1;
    pointer-events: none;
    opacity: 0.95;
  }

  .side-art-left {
    left: clamp(100px, 2vw, 24px);
    top: 58%;
    width: clamp(230px, 25vw, 300px);
  }

  .side-art-right {
    right: clamp(70px, 2vw, 24px);
    top: -40px;
    transform: none;
    width: clamp(50px, 24vw, 150px);
  }

  .joyride-art {
    top: 58%;
    transform: translateY(-50%);
    width: clamp(180px, 20vw, 240px);
  }

  .discoball-art {
    top: -40px;
    transform: none;
    width: clamp(90px, 22vw, 170px);
  }

  .hero-content {
    max-width: 600px;
    padding: $spacing-md;
    position: relative;
    z-index: 2;

    .names {
      font-size: clamp(2.25rem, 8vw, $font-size-display);
      margin-bottom: $spacing-xs;
      white-space: nowrap;

      @include mobile {
        font-size: clamp(2rem, 9vw, $font-size-xxl);
      }
    }

    .date {
      font-size: $font-size-lg;
      margin-bottom: $spacing-md;
      color: $color-text-heading; // Make it stand out a bit more than standard meta
    }

    .welcome-msg {
      margin-bottom: $spacing-lg;
    }

    .cta-buttons {
      display: flex;
      gap: $spacing-md;
      justify-content: center;

      :hover {
        background-color: $color-primary-green;
      }

      @include mobile {
        flex-direction: column;
        gap: $spacing-sm;
      }
    }
  }

  @include mobile {
    .side-art {
      width: clamp(88px, 22vw, 120px);
      opacity: 0.55;
    }

    .side-art-left {
      width: clamp(110px, 28vw, 150px);
    }

    .side-art-right {
      width: clamp(106px, 26vw, 144px);
    }

    .joyride-art {
      top: calc(70% + clamp(90px, 22vw, 120px));
      width: clamp(90px, 22vw, 120px);
    }

    .discoball-art {
      width: clamp(100px, 24vw, 140px);
    }
  }
}
</style>
