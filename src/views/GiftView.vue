<template>
  <div class="gift container section">
    <img
      class="side-art side-art-left heart-art"
      src="/illustrations/joyride_dark.svg"
      alt=""
      aria-hidden="true"
    />
    <img
      class="side-art side-art-right heart-art"
      src="/illustrations/heart_dark.svg"
      alt=""
      aria-hidden="true"
    />

    <h2>{{ $t("gift.title") }}</h2>
    <p class="intro text-body">
      {{ $t("gift.intro") }} {{ $t("gift.details") }}
    </p>

    <div class="gift-card">
      <div class="gift-list-info text-body">
        <p>{{ $t("gift.listInfo2") }}</p>
        <p>{{ $t("gift.listInfo3") }}</p>
      </div>

      <a
        class="btn gift-btn"
        :href="$t('gift.listUrl')"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t("gift.button") }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.gift {
  position: relative;
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
  //   padding: 0 1rem;

  > * {
    position: relative;
    z-index: 2;
  }

  .side-art {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    opacity: 0.26;
    width: clamp(80px, 14vw, 120px);
  }

  .side-art-left {
    right: 100%;
    top: 80%;
    width: clamp(104px, 18.2vw, 156px);
  }

  .side-art-right {
    right: clamp(8px, 2vw, 24px);
    top: 95%;
  }

  @include mobile {
    .side-art {
      width: clamp(49px, 13.5vw, 71px);
      opacity: 0.2;
    }

    .side-art-left {
      left: 5%;
      top: 3%;
    }

    .side-art-right {
      right: clamp(8px, 2vw, 24px);
      top: 94%;
  }
  }
}

.intro {
  margin: 0 auto $spacing-md;
  max-width: 56ch;
}

.gift-card {
  background: $color-dark-green;
  color: $color-light-green;
  border-radius: 8px;
  padding: $spacing-md;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  max-width: 720px;
  margin: 0 auto;
}

.gift-list-info {
  margin: 0 auto $spacing-sm;
  max-width: 58ch;
  // text-align: left;
  color: inherit;

  p {
    color: inherit;
    margin: 0 0 $spacing-sm;
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.gift-btn {
  display: inline-block;
  margin-top: $spacing-sm;
  background-color: $color-light-green;
  color: $color-dark-green;

  &:hover {
    background-color: $color-light-green;
    color: $color-dark-green;
  }
}
</style>
