<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
};
</script>

<style lang="scss" scoped>
.timeline {
  @apply relative;
  @apply w-full;
  @apply m-1;
  @apply p-1;

  &::before {
    content: '';
    @apply absolute;
    @apply bg-calypso;
    @apply w-1;
    @apply bottom-0;
    @apply top-0;
    @apply z-0;
  }

  &--white {
    @apply text-porcelain;

    &::before {
      @apply bg-porcelain;
    }
  }
}

@screen md {
  .timeline {
    @apply m-2;
    @apply p-1;
  }
}
</style>
