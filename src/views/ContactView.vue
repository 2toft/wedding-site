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
            <a :href="`tel:${person.phoneHref}`" class="phone-link">
              {{ $t("contact.phone") }}: {{ person.phoneDisplay }}
            </a>
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
        phoneDisplay: "+46 70 123 45 67",
        phoneHref: "+46701234567",
      },
      {
        nameKey: "contact.bride",
        phoneDisplay: "+46 70 987 65 43",
        phoneHref: "+46709876543",
      },
    ],
  },
  {
    titleKey: "contact.toastmastersTitle",
    people: [
      {
        nameKey: "contact.toastmasterCalle",
        phoneDisplay: "+46 70 111 22 33",
        phoneHref: "+46701112233",
      },
      {
        nameKey: "contact.toastmasterSimon",
        phoneDisplay: "+46 70 444 55 66",
        phoneHref: "+46704445566",
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
  background: $color-white;
  padding: $spacing-lg;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;

  h3 {
    margin-bottom: $spacing-md;
    text-align: center;
  }
}

.contact-list {
  display: grid;
  gap: $spacing-sm;
}

.contact-item {
  border: 1px solid $color-soft-gray;
  border-radius: 6px;
  padding: $spacing-sm;
}

.person-name {
  margin: 0 0 $spacing-xs;
  font-weight: 500;
}

.phone-link {
  font-size: $font-size-md;
  font-weight: 500;
  color: $color-text-heading;
  text-decoration: none;

  &:hover {
    color: $color-primary-green;
  }
}
</style>
