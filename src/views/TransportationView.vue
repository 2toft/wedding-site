<template>
  <div class="transportation container section">
    <h2>{{ $t("transportation.title") }}</h2>
    <p class="intro text-body">{{ $t("transportation.intro") }}</p>

    <div class="schedule-grid">
      <article class="schedule-card">
        <h3>{{ $t("transportation.toCeremony.title") }}</h3>
        <p class="text-body">{{ $t("transportation.toCeremony.route") }}</p>
        <p class="time">{{ $t("transportation.toCeremony.departure") }}</p>
        <p class="time">{{ $t("transportation.toCeremony.arrival") }}</p>
      </article>

      <article class="schedule-card">
        <h3>{{ $t("transportation.toHotel.title") }}</h3>
        <p class="text-body">{{ $t("transportation.toHotel.route") }}</p>
        <p class="time">{{ $t("transportation.toHotel.firstDeparture") }}</p>
        <p class="time">{{ $t("transportation.toHotel.secondDeparture") }}</p>
      </article>
    </div>

    <p class="note text-body">{{ $t("transportation.note") }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.transportation {
  text-align: center;
}

.intro {
  margin: 0 auto $spacing-lg;
  max-width: 58ch;
}

.schedule-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: $spacing-md;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.schedule-card {
  background: $color-dark-green;
  color: $color-light-green;
  border-radius: 8px;
  padding: $spacing-md;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin: 0 1rem;

  h3 {
    color: inherit;
    margin-bottom: $spacing-sm;
  }

  .time {
    font-family: $font-family-body;
    letter-spacing: $letter-spacing-meta;
    text-transform: uppercase;
    margin-bottom: $spacing-xs;
    color: inherit;
  }
}

.note {
  margin: $spacing-md auto 0;
  max-width: 58ch;
}
</style>
