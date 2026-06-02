<template>
  <div class="contact container section">
    <img
      class="side-art side-art-right contact-art"
      src="/illustrations/cheers.svg"
      alt=""
      aria-hidden="true"
    />

    <h2>{{ $t("contact.title") }}</h2>
    <p class="intro">{{ $t("contact.intro") }}</p>

    <div class="contact-groups">
      <div
        v-for="group in contactGroups"
        :key="group.titleKey"
        :class="[
          'contact-group',
          { 'contact-group-couple': group.titleKey === 'contact.coupleTitle' },
        ]"
      >
        <h3>{{ $t(group.titleKey) }}</h3>

        <div class="contact-list">
          <div
            v-for="person in group.people"
            :key="person.nameKey"
            class="contact-item"
          >
            <p class="person-name">{{ $t(person.nameKey) }}</p>
            <a
              v-if="person.phoneHref"
              :href="`tel:${person.phoneHref}`"
              class="phone-link"
            >
              {{ $t("contact.phone") }}: {{ person.phoneDisplay }}
            </a>
            <a
              v-else-if="person.emailHref"
              :href="`mailto:${person.emailHref}`"
              class="phone-link"
            >
              {{ $t("contact.email") }}: {{ person.emailDisplay }}
            </a>
            <p v-else-if="person.phoneDisplay" class="phone-text">
              {{ $t("contact.phone") }}: {{ person.phoneDisplay }}
            </p>

            <ul v-if="person.services" class="service-list">
              <li
                v-for="service in person.services"
                :key="service.nameKey"
                class="service-item"
              >
                <span class="service-name">{{ $t(service.nameKey) }}</span>
                <a :href="`tel:${service.phoneHref}`" class="phone-link">
                  {{ service.phoneDisplay }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          v-if="group.titleKey === 'contact.coupleTitle'"
          class="couple-heart-wrap"
        >
          <img
            class="couple-heart"
            src="/illustrations/heart.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactGroups = [
  {
    titleKey: "contact.toastmastersTitle",
    people: [
      {
        nameKey: "contact.toastmasterEmail",
        emailDisplay: "natoftsbrollop@gmail.com",
        emailHref: "natoftsbrollop@gmail.com",
      },
      {
        nameKey: "contact.toastmasterCalle",
        phoneDisplay: "0739 53 53 82",
        phoneHref: "0739535382",
      },
      {
        nameKey: "contact.toastmasterSimon",
        phoneDisplay: "0707 20 37 48",
        phoneHref: "0707203748",
      },
    ],
  },
  {
    titleKey: "contact.coupleTitle",
    people: [
      {
        nameKey: "contact.groom",
        phoneDisplay: "0707 661 443",
        phoneHref: "0707661443",
      },
      {
        nameKey: "contact.bride",
        phoneDisplay: "0730 93 39 94",
        phoneHref: "0730093394",
      },
    ],
  },
  {
    titleKey: "contact.servicesTitle",
    people: [
      {
        nameKey: "contact.taxiService",
        services: [
          {
            nameKey: "contact.markabTaxi",
            phoneDisplay: "076 310 07 79",
            phoneHref: "0763100779",
          },
          {
            nameKey: "contact.mjolbyTaxi",
            phoneDisplay: "070 783 07 75",
            phoneHref: "0707830775",
          },
        ],
      },
      {
        nameKey: "contact.starbyHotel",
        phoneDisplay: "0143 751 00",
        phoneHref: "014375100",
      },
      {
        nameKey: "contact.busCompany",
        phoneDisplay: "0142-121 50",
        phoneHref: "014212150",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.contact {
  position: relative;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  > * {
    position: relative;
    z-index: 2;
  }

  .side-art {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    opacity: 0.1;
    object-fit: contain;
  }

  .side-art-right {
    right: 5%;
    bottom: 15%;
  }

  @include mobile {
    .side-art-right {
      top: 0.5%;
      left: 5%;
    }
  }
}

.intro {
  margin: 0 auto $spacing-lg;
}

.contact-groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: $spacing-md;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.contact-group {
  background: $color-dark-green;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
  margin: 0;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: $spacing-md;
    text-align: center;
    color: $color-light-green;
  }
}

.contact-list {
  display: grid;
  width: 100%;
  gap: $spacing-sm;
}

.couple-heart-wrap {
  display: flex;
  justify-content: center;
  margin-top: $spacing-sm;
}

.contact-group-couple .couple-heart-wrap {
  flex: 1;
  align-items: center;
}

.couple-heart {
  display: block;
  width: clamp(38px, 6vw, 56px);
  height: auto;
}

.contact-item {
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  padding: $spacing-sm;
  background: $color-light-green;
}

.person-name {
  margin: 0 0 $spacing-xs;
  font-weight: 500;
}

.phone-link {
  font-size: $font-size-md;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: $color-primary-green;
  }
}

.phone-text {
  margin: 0;
  font-size: $font-size-md;
  font-weight: 500;
}

.service-list {
  margin: $spacing-xs 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.35rem;
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $spacing-sm;
}

.service-name {
  font-weight: 500;
}
</style>
