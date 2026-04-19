<template>
  <div class="wedding-info container section">
    <h2>{{ $t("info.title") }}</h2>

    <div class="info-grid">
      <div class="info-card">
        <h3>{{ $t("info.ceremony.title") }}</h3>
        <p class="time text-meta">{{ $t("info.ceremony.time") }}</p>
        <p class="location">{{ $t("info.ceremony.location") }}</p>
        <p class="address">595 94, Högby</p>
        <p class="description text-body">
          {{ $t("info.ceremony.desc") }}
        </p>
      </div>

      <div class="info-card">
        <h3>{{ $t("info.reception.title") }}</h3>
        <p class="time text-meta">{{ $t("info.reception.time") }}</p>
        <p class="location">{{ $t("info.reception.location") }}</p>
        <p class="address">595 94, Norrby</p>
        <p class="description text-body">
          {{ $t("info.reception.desc") }}
        </p>
      </div>
    </div>

    <div class="timeline">
      <h3>{{ $t("info.timeline.title") }}</h3>
      <ul>
        <li>
          <strong class="text-meta">{{ $t("info.ceremony.time") }}</strong> -
          {{ $t("info.timeline.ceremony") }}
        </li>
        <li>
          <strong class="text-meta">14:30</strong> -
          {{ $t("info.timeline.photos") }}
        </li>
        <li>
          <strong class="text-meta">17:00</strong> -
          {{ $t("info.timeline.dinner") }}
        </li>
        <li>
          <strong class="text-meta">20:00</strong> -
          {{ $t("info.timeline.party") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "../styles/variables" as *;

.wedding-info {
  text-align: center;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-lg;
  margin: $spacing-lg 0;

  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-md;
  }
}

.info-card {
  background-color: $color-white;
  padding: $spacing-lg;
  border-radius: 2px; // Sharper corners for editorial look? Or keep rounded? Prompt says "Rounded letterforms" but "More printed invitation". Usually printed cards are rectangular. I'll reduce radius.
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); // Softer shadow

  .time {
    margin-bottom: $spacing-xs;
  }

  .location {
    font-family: $font-family-heading;
    font-size: $font-size-lg;
    margin-bottom: $spacing-xs;
    color: $color-text-heading;
  }

  .address {
    font-size: $font-size-sm;
    color: $color-text-body;
    margin-bottom: $spacing-md;
  }
}

.timeline {
  margin-top: $spacing-xl;

  ul {
    list-style: none;
    padding: 0;
    max-width: 400px;
    margin: 0 auto;
    text-align: left;

    li {
      padding: $spacing-sm 0;
      border-bottom: 1px solid $color-soft-gray;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:last-child {
        border-bottom: none;
      }

      strong {
        color: $color-text-meta;
      }
    }
  }
}
</style>
