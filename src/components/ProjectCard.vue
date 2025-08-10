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
  name: "ProjectCard",
  props: {
    title: String,
    type: String,
    description: String,
    link: {
      type: String,
      default: "",
    },
    tech_stack: String,
  },
};
</script>

<style scoped>
@reference "../style.css";

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
}

.project-card__title-wrapper {
  @apply flex;
  @apply justify-between;
}

.project-card__link-icon {
  @apply text-lg;
}

.project-card__description {
  @apply text-sm;
}

.project-card__tech-stack {
  @apply text-xs;
  @apply p-1;
}
</style>
