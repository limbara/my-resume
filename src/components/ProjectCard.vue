<template>
  <a class="project-card" :href="link">
    <div class="project-card__title-wrapper">
      <h3 class="project-card__title">{{ title }} ({{ type }})</h3>
      <font-awesome-icon
        :icon="['fas', 'link']"
        class="project-card__link-icon"
      />
    </div>
    <p class="project-card__description">{{ description }}</p>
    <p class="project-card__tech-stack">Tech Stack : {{ tech_stack }}</p>
  </a>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    type: String,
    description: String,
    link: {
      type: String,
      default: '',
    },
    tech_stack: String,
  },
};
</script>

<style lang="scss" scoped>
.project-card {
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
    @apply text-gray-900;
  }

  &:hover {
    @apply cursor-pointer;
    @apply shadow;
    @apply text-gray-900;
  }

  &__title-wrapper {
    @apply flex;
    @apply justify-between;
  }

  &__link-icon {
    @apply text-lg;
  }

  &__description {
    @apply text-sm;
  }

  &__tech-stack {
    @apply text-xs;
    @apply p-1;
}
}
</style>
