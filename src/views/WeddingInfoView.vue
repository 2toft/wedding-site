<template>
  <div class="wedding-info container section">
    <h2>{{ $t("info.title") }}</h2>

    <div class="info-grid">
      <div class="info-card">
        <h3>{{ $t("info.ceremony.title") }}</h3>
        <p class="time">13:00</p>
        <p class="location">{{ $t("info.ceremony.location") }}</p>
        <p class="address">595 94, Högby</p>
        <p class="description">
          {{ $t("info.ceremony.desc") }}
        </p>
      </div>

      <div class="info-card">
        <h3>{{ $t("info.reception.title") }}</h3>
        <p class="time">15:00</p>
        <p class="location">{{ $t("info.reception.location") }}</p>
        <p class="address">595 94, Norrby</p>
        <p class="description">
          {{ $t("info.reception.desc") }}
        </p>
      </div>
    </div>

    <div class="timeline">
      <h3>{{ $t("info.timeline.title") }}</h3>
      <ul>
        <li><strong>13:00</strong> - {{ $t("info.timeline.ceremony") }}</li>
        <li><strong>14:30</strong> - {{ $t("info.timeline.photos") }}</li>
        <li><strong>17:00</strong> - {{ $t("info.timeline.dinner") }}</li>
        <li><strong>20:00</strong> - {{ $t("info.timeline.party") }}</li>
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
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  h3 {
    color: $color-dark-green;
  }

  .time {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: $spacing-xs;
  }

  .location {
    font-size: 1.1rem;
    margin-bottom: $spacing-xs;
  }

  .address {
    color: color.adjust($color-text-main, $lightness: 20%);
    font-style: italic;
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

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
