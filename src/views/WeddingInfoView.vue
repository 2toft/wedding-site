<template>
  <div class="wedding-info container section">
    <img
      class="side-art side-art-left cheers-art"
      src="/illustrations/cheers.svg"
      alt=""
      aria-hidden="true"
    />
    <img
      class="side-art side-art-right discoball-art"
      src="/illustrations/discoball_dark.svg"
      alt=""
      aria-hidden="true"
    />

    <h2>{{ $t("info.title") }}</h2>

    <div class="segments">
      <section class="segment">
        <p class="segment-kicker">
          {{ $t("info.segment.date.kicker") }}
        </p>
        <p class="segment-line text-body">{{ $t("home.date") }}</p>
      </section>

      <section class="segment">
        <p class="segment-kicker">
          {{ $t("info.segment.wedding.kicker") }}
        </p>
        <p class="segment-line text-body">
          <strong>{{ $t("info.segment.wedding.timeLabel") }}:</strong>
          {{ $t("info.ceremony.time") }}
        </p>
        <p class="segment-line text-body">
          <strong>{{ $t("info.segment.wedding.placeLabel") }}:</strong>
          {{ $t("info.ceremony.location") }}
        </p>
        <p class="segment-description text-body">
          {{ $t("info.ceremony.desc") }}
        </p>
      </section>

      <section class="segment">
        <p class="segment-kicker">
          {{ $t("info.segment.reception.kicker") }}
        </p>
        <p class="segment-line text-body">
          <strong>{{ $t("info.segment.reception.timeLabel") }}:</strong>
          {{ $t("info.reception.time") }}
        </p>
        <p class="segment-line text-body">
          <strong>{{ $t("info.segment.reception.placeLabel") }}:</strong>
          {{ $t("info.reception.location") }}
        </p>
        <p class="segment-description text-body">
          {{ $t("info.segment.reception.description") }}
        </p>
      </section>

      <section class="segment">
        <p class="segment-kicker">
          {{ $t("info.segment.dressCode.kicker") }}
        </p>
        <div class="dress-code-row segment-line text-body">
          <strong>{{ $t("info.segment.dressCode.description") }}</strong>
          <button
            type="button"
            class="toggle-btn"
            :aria-expanded="String(isDressCodeExpanded)"
            :aria-label="
              isDressCodeExpanded
                ? $t('info.segment.dressCode.showLess')
                : $t('info.segment.dressCode.showMore')
            "
            :title="
              isDressCodeExpanded
                ? $t('info.segment.dressCode.showLess')
                : $t('info.segment.dressCode.showMore')
            "
            @click="isDressCodeExpanded = !isDressCodeExpanded"
          >
            <span
              :class="['chevron', { expanded: isDressCodeExpanded }]"
              aria-hidden="true"
            ></span>
          </button>
        </div>
        <p v-if="isDressCodeExpanded" class="segment-description text-body">
          {{ $t("info.segment.dressCode.complementary") }}
        </p>
      </section>
    </div>

    <section class="segment">
      <p class="segment-kicker">{{ $t("info.kids.kicker") }}</p>
      <p class="segment-line text-body">{{ $t("info.kids.message") }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDressCodeExpanded = ref(false);
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "../styles/variables" as *;

.wedding-info {
  position: relative;
  overflow: hidden;
  max-width: 920px;

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

  .side-art-left {
    left: clamp(8px, 2vw, 24px);
    top: 14%;
    width: clamp(90px, 16vw, 140px);
  }

  .side-art-right {
    right: clamp(8px, 2vw, 24px);
    top: 10%;
    width: clamp(78px, 12vw, 110px);
  }

  h2 {
    text-align: center;
    margin-bottom: $spacing-md;
  }

  @include mobile {
    .side-art {
      opacity: 0.18;
    }

    .side-art-left {
      width: clamp(70px, 22vw, 100px);
    }

    .side-art-right {
      width: clamp(56px, 16vw, 84px);
    }
  }
}

.segments {
  display: grid;
  margin: 0 1rem;
}

.kids-note {
  margin-top: $spacing-md;
  text-align: center;

  p {
    margin-left: auto;
    margin-right: auto;
    max-width: 68ch;
  }
}

.segment {
  padding: clamp(0.9rem, 2.8vw, 0.5rem);
  text-align: center;

  h3 {
    text-align: center;
    margin-bottom: $spacing-xs;
    color: $color-text-heading;
  }

  .segment-kicker {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-meta;
    margin: 0 auto;
    margin-bottom: 0.35rem;
    font-size: $font-size-sm;
    font-weight: 700;
    font-variation-settings: "wght" 700;
  }

  .segment-line {
    margin-bottom: 0.35rem;
    margin-left: auto;
    margin-right: auto;
  }

  .dress-code-row {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .toggle-btn {
    background: transparent;
    border: none;
    color: $color-dark-green;
    width: 1rem;
    height: 1rem;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      color: $color-primary-green;
    }

    .chevron {
      width: 0.55rem;
      height: 0.55rem;
      border-right: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(45deg) translateY(-1px);
      transition: transform 0.2s ease;

      &.expanded {
        transform: rotate(-135deg) translateY(-1px);
      }
    }
  }

  .segment-description {
    margin-top: $spacing-xs;
    max-width: 66ch;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }

  @include mobile {
    padding: clamp(0.75rem, 3.5vw, 1rem);
  }
}
</style>
