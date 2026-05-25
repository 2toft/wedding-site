<template>
  <div class="gift container section">
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
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
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
