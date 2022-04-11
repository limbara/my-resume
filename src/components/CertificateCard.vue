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
  name: 'CertificateCard',
  props: {
    title: String,
    link: {
      type: String,
      default: '',
    },
    issued_at: String,
  },
};
</script>

<style lang="scss" scoped>
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

  &__title-wrapper {
    @apply flex;
    @apply justify-between;
  }

  &__link-icon {
    @apply text-lg;
  }

  &__issued-at {
    @apply text-xs;
    @apply p-1;
  }

  &--white {
    @apply bg-porcelain;
    @apply text-calypso;
  }
}
</style>
