<template>
  <div class="directions container section">
    <h2>{{ $t("directions.title") }}</h2>
    <p class="intro text-body">{{ $t("directions.intro") }}</p>

    <div class="locations">
      <div class="location-item">
        <h3>{{ $t("directions.hotel") }}</h3>
        <p class="text-body">{{ $t("directions.hotelName") }}</p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Sk%C3%A4nninge+Stadshotell"
          target="_blank"
          class="btn btn-secondary"
          >{{ $t("directions.openMaps") }}</a
        >
      </div>
      <div class="location-item">
        <h3>{{ $t("directions.ceremony") }}</h3>
        <p class="text-body">{{ $t("info.ceremony.location") }}</p>
        <a
          href="https://maps.app.goo.gl/KrRtcT5sZNtbjoC29"
          target="_blank"
          class="btn btn-secondary"
          >{{ $t("directions.openMaps") }}</a
        >
      </div>

      <div class="location-item">
        <h3>{{ $t("directions.reception") }}</h3>
        <p class="text-body">{{ $t("info.reception.location") }}</p>
        <a
          href="https://maps.app.goo.gl/LHtAo3ofhG6CF1G97"
          target="_blank"
          class="btn btn-secondary"
          >{{ $t("directions.openMaps") }}</a
        >
      </div>
    </div>

    <div class="map-container">
      <!-- Placeholder for Google Maps Embed -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.3550376850644!2d15.096021243248078!3d58.34979154376857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465bd72009e92d85%3A0xc188c879dee7bb0f!2sH%C3%B6gby%20church!5e1!3m2!1sen!2sse!4v1765814465536!5m2!1sen!2sse"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      >
      </iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/typography";

.directions {
  text-align: center;
}

.intro {
  margin: 0 auto $spacing-md;
}

.map-container {
  margin-top: $spacing-md;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.locations {
  display: flex;
  justify-content: center;
  gap: $spacing-lg;
  flex-wrap: wrap;

  .location-item {
    background: $color-white;
    padding: $spacing-md;
    border-radius: 2px;
    min-width: 250px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);

    h3 {
      margin-bottom: $spacing-xs;
    }

    p {
      margin-bottom: $spacing-md;
    }
  }
}
</style>
