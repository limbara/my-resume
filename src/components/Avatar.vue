<template>
  <div
    :class="`c-avatar text-white font-bold ${src ? '' : 'bg-bossanova'}`"
    :style="`
    width: ${size}px;
    height: ${size}px;
    shape-outside: circle();
    ${src ? `background-image: url(${src})` : ''}
    ${src ? 'background-color: transparent' : ''} 
  `"
  >
    <span class="c-avatar__initial" v-show="!src">{{ getInitial }}</span>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    name: {
      required: true,
      type: String,
    },
    src: {
      required: false,
      type: String,
    },
    size: {
      required: false,
      type: Number,
      default: 50,
    },
  },
  computed: {
    getInitial: function () {
      return this.name
        .split(/\s|-/g)
        .map((item) => {
          return item[0].toUpperCase();
        })
        .join('');
    },
  },
};
</script>

<style lang="scss" scoped>
.c-avatar {
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  user-select: none;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &__initial {
    color: inherit;
    font-size: inherit;
  }
}
</style>
