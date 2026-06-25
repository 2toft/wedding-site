<template>
  <div class="transportation container section">
    <img
      class="side-art side-art-right car-art"
      src="/illustrations/new_car.svg"
      alt=""
      aria-hidden="true"
    />

    <h2>{{ $t("transportation.title") }}</h2>
    <p class="intro text-body">{{ $t("transportation.intro") }}</p>

    <div class="schedule-grid">
      <article class="schedule-card">
        <h3>{{ $t("transportation.toCeremony.title") }}</h3>
        <p class="text-body">{{ $t("transportation.toCeremony.route") }}</p>
        <p class="time">{{ $t("transportation.toCeremony.departure") }}</p>
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
  position: relative;
  overflow: hidden;
  text-align: center;

  > * {
    position: relative;
    z-index: 2;
  }

  .side-art {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    opacity: 0.3;
    object-fit: contain;
  }

  .side-art-right {
    right: clamp(12px, 3vw, 40px);
    top: 30%;
    transform: translateY(-50%);
    width: clamp(110px, 18vw, 170px);
  }

  @include mobile {
    .side-art {
      width: clamp(85px, 24vw, 120px);
      left: -30%;
      top: 8%;
      animation: side-art-horizontal-sweep 10s linear infinite;
    }
  }
}

@keyframes side-art-horizontal-sweep {
  from {
    left: -30%;
  }

  to {
    left: 100%;
  }
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
