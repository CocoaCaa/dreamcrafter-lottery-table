<template>
  <div
    class="item"
  >
    <img v-if="value.type === 'item'" :src="imageSrc">
    <div v-else-if="value.type === 'block'" class="item__block">
      <img class="block__face block__face--left" :src="imageSrc">
      <img class="block__face block__face--right" :src="imageSrc">
      <img class="block__face block__face--top" :src="imageSrc">
    </div>
    <div
      class="item__cover"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    />
    <Tooltip
      v-if="isHovering"
      v-html="name"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Tooltip from './Tooltip.vue';
import MinecraftText from 'minecraft-text-js';

@Component({
  components: {
    Tooltip,
  },
})
export default class Item extends Vue {
  @Prop({ required: true })
  public value!: ConfigItem;

  public get imageSrc() {
    return `/images/${this.value.type}/${this.value.imageId}.png`;
  }

  public get name() {
    return MinecraftText.toHTML(this.value.name);
  }

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
.item {
  position: relative;
  width: 32px;
  height: 32px;

  .item__cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    user-select: none;
  }

  .item__block{
    transform: scale(0.5) translateX(-50%);
  }

  .block__face {
    position: absolute;
    left: 0;
    top: 0;
    user-select: none;
  }

  .block__face--left {
    transform: translate(2px, 23px) rotateZ(180deg) scale(0.9, 1.1) skewY(22deg);
  }

  .block__face--right {
    transform: translate(30px, 23px) rotateZ(64deg) scale(1, 1) skewY(26deg);
  }

  .block__face--top {
    transform: translate(16px, -1.5px) scale(0.94) rotateZ(45deg) skew(-18deg, -18deg);
  }
}
</style>
