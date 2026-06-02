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
    <p class="intro text-body">{{ $t("gift.intro") }}</p>
    <p class="details text-body">{{ $t("gift.details") }}</p>

    <p class="gift-list-status text-body">
      {{ $t("gift.listStatus") }}
    </p>

    <button type="button" class="btn" disabled>
      {{ $t("gift.button") }}
    </button>
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
    left: clamp(8px, 2vw, 24px);
    top: 73%;
    width: clamp(104px, 18.2vw, 156px);
  }

  .side-art-right {
    right: clamp(8px, 2vw, 24px);
    bottom: 14%;
  }

  @include mobile {
    .side-art {
      width: clamp(49px, 13.5vw, 71px);
      opacity: 0.2;
    }

    .side-art-left {
      width: clamp(64px, 17.55vw, 93px);
    }
  }
}

.intro,
.details {
  margin: 0 auto $spacing-md;
  max-width: 56ch;
}

.btn {
  margin-top: $spacing-sm;

  &:disabled {
    cursor: not-allowed;
  }
}

.gift-list-status {
  margin: 0 auto $spacing-xs;
  max-width: 56ch;
  text-decoration: underline;
}
</style>
