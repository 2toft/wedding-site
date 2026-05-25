<template>
  <div class="contact container section">
    <h2>{{ $t("contact.title") }}</h2>
    <p class="intro">{{ $t("contact.intro") }}</p>

    <div class="contact-groups">
      <div
        v-for="group in contactGroups"
        :key="group.titleKey"
        class="contact-group"
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
      </div>
    </div>
  </div>
</template>

<script setup>
const contactGroups = [
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
        phoneDisplay: "0730 093 39 94",
        phoneHref: "0730093394",
      },
    ],
  },
  {
    titleKey: "contact.toastmastersTitle",
    people: [
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
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
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
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
  margin: 0 1rem;

  h3 {
    margin-bottom: $spacing-md;
    text-align: center;
    color: $color-light-green;
  }
}

.contact-list {
  display: grid;
  gap: $spacing-sm;
}

.contact-item {
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
