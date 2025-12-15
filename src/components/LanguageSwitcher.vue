<template>
  <div class="language-switcher">
    <button
      @click="changeLanguage('en')"
      class="lang-btn"
      :class="{ active: locale === 'en' }"
      aria-label="Switch to English"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        width="30"
        height="15"
      >
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clip-path="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clip-path="url(#t)"
            stroke="#C8102E"
            stroke-width="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
        </g>
      </svg>
    </button>
    <button
      @click="changeLanguage('sv')"
      class="lang-btn"
      :class="{ active: locale === 'sv' }"
      aria-label="Byt till Svenska"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1000"
        width="30"
        height="18.75"
      >
        <rect width="1600" height="1000" fill="#006aa7" />
        <rect width="200" height="1000" x="500" fill="#fecc00" />
        <rect width="1600" height="200" y="400" fill="#fecc00" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
  // Optional: Save to local storage
  localStorage.setItem("user-locale", lang);
};
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.language-switcher {
  display: flex;
  gap: $spacing-xs;
  align-items: center;
}

.lang-btn {
  background: none;
  border: 2px solid transparent;
  padding: 2px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  &.active {
    opacity: 1;
    border-color: $color-primary-green;
  }

  svg {
    display: block;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
}
</style>
