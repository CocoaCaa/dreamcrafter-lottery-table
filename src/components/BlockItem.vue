<template>
  <div
    class="block-item"
  >
    <div class="block-item__container">
      <img class="block-item__face block-item__face--left" :src="src">
      <img class="block-item__face block-item__face--right" :src="src">
      <img class="block-item__face block-item__face--top" :src="src">
    </div>
    <div
      class="block-item__cover"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    />
    <Tooltip
      v-if="isHovering"
    >
      ABC
    </Tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Tooltip from './Tooltip.vue';

@Component({
  components: {
    Tooltip,
  },
})
export default class BlockItem extends Vue {
  @Prop()
  public src!: string;

  public isHovering = false;

  public handleMouseEnter() {
    this.isHovering = true;
  }

  public handleMouseLeave() {
    this.isHovering = false;
  }
}
</script>

<style lang="scss">
.block-item {
  position: relative;
  width: 32px;
  height: 32px;

  .block-item__cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    user-select: none;
  }

  .block-item__container {
    transform: scale(0.5) translateX(-50%);
  }

  .block-item__face {
    position: absolute;
    left: 0;
    top: 0;
    user-select: none;
  }

  .block-item__face--left {
    transform: translate(2px, 23px) rotateZ(180deg) scale(0.9, 1.1) skewY(22deg);
  }

  .block-item__face--right {
    transform: translate(30px, 23px) rotateZ(64deg) scale(1, 1) skewY(26deg);
  }

  .block-item__face--top {
    transform: translate(16px, -1.5px) scale(0.94) rotateZ(45deg) skew(-18deg, -18deg);
  }
}
</style>
