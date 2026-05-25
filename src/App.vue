<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import { COUPLE_NAMES } from "./config/site";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="app-container">
    <header class="site-header">
      <div class="container header-content">
        <router-link to="/" class="logo" @click="closeMenu"
          >Nåtofts Bröllop</router-link
        >

        <button
          class="mobile-menu-btn"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span class="hamburger"></span>
        </button>

        <nav :class="{ 'is-open': isMenuOpen }">
          <router-link to="/" @click="closeMenu">{{
            $t("nav.home")
          }}</router-link>
          <router-link to="/info" @click="closeMenu">{{
            $t("nav.info")
          }}</router-link>
          <router-link to="/rsvp" @click="closeMenu">{{
            $t("nav.rsvp")
          }}</router-link>
          <router-link to="/transportation" @click="closeMenu">{{
            $t("nav.transportation")
          }}</router-link>
          <router-link to="/accommodation" @click="closeMenu">{{
            $t("nav.accommodation")
          }}</router-link>
          <router-link to="/gifts" @click="closeMenu">{{
            $t("nav.gifts")
          }}</router-link>
          <router-link to="/contact" @click="closeMenu">{{
            $t("nav.contact")
          }}</router-link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>{{ $t("footer.copyright", { coupleNames: COUPLE_NAMES }) }}</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@use "./styles/variables" as *;

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-header {
  background-color: $color-dark-green;
  padding: $spacing-sm 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: $font-family-heading;
    font-size: $font-size-xl;
    font-weight: 400;
    color: $color-light-green;
    text-decoration: none;
  }

  nav {
    display: flex;
    gap: $spacing-md;
    align-items: center;

    a {
      font-family: $font-family-body;
      font-size: $font-size-sm;
      letter-spacing: $letter-spacing-meta;
      text-transform: uppercase;
      font-weight: 400;
      color: $color-light-green;
      text-decoration: none;
      transition: color 0.3s ease;
      position: relative;
      padding-bottom: 0.25rem;

      &.router-link-active {
        color: $color-muted-green;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: $color-muted-green;
        }
      }

      &:hover {
        color: $color-muted-green;
      }
    }

    @include mobile {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: $color-dark-green;
      flex-direction: column;
      padding: $spacing-md;
      gap: $spacing-sm;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      z-index: -1;

      &.is-open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;

    @include mobile {
      display: block;
    }

    .hamburger {
      display: block;
      width: 24px;
      height: 2px;
      background: $color-white;
      position: relative;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: $color-white;
        left: 0;
      }

      &::before {
        top: -8px;
      }
      &::after {
        bottom: -8px;
      }
    }
  }
}

main {
  flex: 1;
}

.site-footer {
  background-color: $color-dark-green;
  color: $color-white;
  text-align: center;
  padding: $spacing-md 0;
  margin-top: auto;

  p {
    margin: 0 auto;
    max-width: none;
    font-family: $font-family-body;
    font-size: $font-size-sm;
    letter-spacing: $letter-spacing-meta;
    text-transform: uppercase;
    opacity: 0.8;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
