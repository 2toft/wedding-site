<template>
  <div class="accommodation container section">
    <img
      class="side-art side-art-right accommodation-art"
      src="/illustrations/discoball.svg"
      alt=""
      aria-hidden="true"
    />

    <h2>{{ $t("accommodation.title") }}</h2>
    <p class="intro text-body">{{ $t("accommodation.intro") }}</p>

    <div class="hotel-card">
      <h3>{{ $t("accommodation.hotelName") }}</h3>

      <div class="details">
        <p>
          <strong>{{ $t("accommodation.locationLabel") }}:</strong>
          {{ $t("accommodation.location") }}
        </p>
        <p>
          <strong>{{ $t("accommodation.parkingLabel") }}:</strong>
          {{ $t("accommodation.parking") }}
        </p>
        <p>
          <strong>{{ $t("accommodation.checkInLabel") }}:</strong>
          {{ $t("accommodation.checkIn") }}
        </p>
        <p>
          <strong>{{ $t("accommodation.frontDeskLabel") }}: </strong>
          <a
            :href="`tel:${accommodationInfo.frontDeskPhoneRef}`"
            class="phone-link"
          >
            {{ $t("accommodation.frontDesk") }}
          </a>
        </p>
      </div>

      <div class="action-buttons">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Starby+Hotell+Vadstena"
          target="_blank"
          rel="noopener"
          class="btn"
        >
          {{ $t("accommodation.openMaps") }}
        </a>

        <a
          href="https://boka.starbyhotell.se/accommodation?channelid=2a7a2996-4f73-4ed9-9bc2-607f1bd507bc&sessionid=46f5de17-5a45-43e9-a63e-9ae0cbb5e934&langid=1&nrnights=2&roomconfig=a2&year=2026&month=9&day=18&staylength=2&promocode=Br%C3%B6llop2026"
          target="_blank"
          rel="noopener"
          class="btn"
        >
          {{ $t("accommodation.bookRooms") }}
        </a>
      </div>

      <p class="promo-note text-body">
        {{ $t("accommodation.promoCodeNote") }}
      </p>
    </div>
  </div>
</template>
<script setup>
const accommodationInfo = {
  hotelName: "Starby Hotell",
  location: "Starbyvägen 1, 592 92 Vadstena",
  parking: "Free parking available on-site.",
  checkIn: "Check-in from 15:00.",
  frontDesk: "0143 751 00",
  frontDeskPhoneRef: "014375100",
};
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.accommodation {
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
    opacity: 0.22;
    object-fit: contain;
  }

  .side-art-right {
    right: clamp(8px, 2vw, 24px);
    top: 18%;
    width: clamp(82px, 12vw, 115px);
  }

  @include mobile {
    .side-art-right {
      width: clamp(62px, 18vw, 85px);
      opacity: 0.15;
    }
  }
}

.intro {
  margin: 0 auto $spacing-lg;
  max-width: 58ch;
}

.phone-link {
  font-size: $font-size-md;
  font-weight: 500;
  text-decoration: none;
  color: $color-light-green;

  &:hover {
    color: $color-primary-green;
  }
}

.hotel-card {
  background: $color-dark-green;
  color: $color-light-green;
  border-radius: 8px;
  padding: $spacing-lg;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  max-width: 720px;
  margin: 0 auto;

  h3 {
    color: inherit;
    margin-bottom: $spacing-md;
  }

  .details {
    text-align: left;
    margin-bottom: $spacing-md;

    p {
      color: inherit;
      margin-bottom: $spacing-sm;
    }

    strong {
      color: inherit;
    }
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
  }

  .btn {
    background-color: $color-light-green;
    color: $color-dark-green;

    &:hover {
      background-color: $color-light-green;
      color: $color-dark-green;
    }
  }

  .promo-note {
    margin: $spacing-sm 0 0;
    padding: $spacing-sm $spacing-md;
    border-radius: 8px;
    border-left: 3px solid $color-light-green;
    background: rgba(255, 255, 255, 0.08);
    color: inherit;
    text-align: left;
    opacity: 1;
  }
}
</style>
