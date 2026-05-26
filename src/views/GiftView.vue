<template>
  <div class="gift container section">
    <img
      class="side-art side-art-left heart-art"
      src="/illustrations/heart.svg"
      alt=""
      aria-hidden="true"
    />
    <img
      class="side-art side-art-right heart-art"
      src="/illustrations/heart.svg"
      alt=""
      aria-hidden="true"
    />

    <h2>{{ $t("gift.title") }}</h2>
    <p class="intro text-body">{{ $t("gift.intro") }}</p>
    <p class="details text-body">{{ $t("gift.details") }}</p>

    <a :href="$t('gift.listUrl')" target="_blank" rel="noopener" class="btn">
      {{ $t("gift.button") }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.gift {
  position: relative;
  overflow: hidden;
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
    top: 26%;
  }

  .side-art-right {
    right: clamp(8px, 2vw, 24px);
    bottom: 14%;
  }

  @include mobile {
    .side-art {
      width: clamp(65px, 18vw, 95px);
      opacity: 0.2;
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
}
</style>
