<template>
  <a class="certificate-card" :href="link">
    <div class="certificate-card__title-wrapper">
      <h3 class="certificate-card__title">{{ title }}</h3>
      <font-awesome-icon
        :icon="['fas', 'link']"
        class="certificate-card__link-icon"
      />
    </div>
    <p class="certificate-card__issued-at">Date : {{ issued_at }}</p>
  </a>
</template>

<script>
export default {
  name: "CertificateCard",
  props: {
    title: String,
    link: {
      type: String,
      default: "",
    },
    issued_at: String,
  },
};
</script>

<style scoped>
@reference "../style.css";

.certificate-card {
  @apply shadow-lg;
  @apply rounded;
  @apply inline-block;
  @apply w-full;
  @apply p-2;
  @apply m-1;
  @apply select-none;

  &:active {
    @apply cursor-pointer;
    @apply shadow;
    @apply text-glacier;
  }

  &:hover {
    @apply cursor-pointer;
    @apply shadow;
    @apply text-glacier;
  }

  &.certificate-card--white {
    @apply bg-porcelain;
    @apply text-calypso;
  }
}

.certificate-card__title-wrapper {
  @apply flex;
  @apply justify-between;
}

.certificate-card__link-icon {
  @apply text-lg;
}

.certificate-card__issued-at {
  @apply text-xs;
  @apply p-1;
}
</style>
