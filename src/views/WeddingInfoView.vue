<template>
  <div class="wedding-info container section">
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
        <p class="segment-line text-body">
          <strong>{{ $t("info.segment.dressCode.description") }}</strong>
        </p>
        <p class="segment-description text-body">
          {{ $t("info.segment.dressCode.complementary") }}
        </p>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "../styles/variables" as *;

.wedding-info {
  max-width: 920px;

  h2 {
    text-align: center;
    margin-bottom: $spacing-md;
  }
}

.segments {
  display: grid;
  // gap: $spacing-sm;
}

.segment {
  padding: clamp(0.9rem, 2.8vw, 1.4rem);
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
  }

  .segment-line {
    margin-bottom: 0.35rem;
  }

  .segment-description {
    margin-top: $spacing-xs;
    max-width: 66ch;
    margin-left: auto;
    margin-right: auto;
  }

  @include mobile {
    padding: clamp(0.75rem, 3.5vw, 1rem);
  }
}
</style>
