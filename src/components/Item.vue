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
      v-if="value.enchanted"
      class="item__enchant"
      :style="{ 'mask-image': `url(${value.type === 'item' ? imageSrc : blockMaskImageSrc})` }"
    />
    <div v-if="qty > 1" class="item__qty">{{qty}}</div>
    <div
      ref="cover"
      class="item__cover"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    />
    <Tooltip
      v-if="isHovering"
      @request-close="isHovering = false"
      :init-position="{ x: cover.getBoundingClientRect().left, y: cover.getBoundingClientRect().top }"
    >
      <MinecraftText :value="value.name" />
      <MinecraftText v-if="value.lore" style="margin-top: 10px;" :value="value.lore" />
      <div v-if="chance">
        <br>
        <MinecraftText :value="`&d機率 &f${chance.toFixed(2)}&d%`" />
      </div>
    </Tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator';
import Tooltip from './Tooltip.vue';
import MinecraftText from './MinecraftText.vue';

@Component({
  components: {
    Tooltip,
    MinecraftText,
  },
})
export default class Item extends Vue {
  @Prop({ required: true })
  public value!: ConfigItem;

  @Prop({ default: 1 })
  public qty!: number;

  @Prop()
  public chance!: number;

  @Ref()
  public cover!: HTMLDivElement;

  public get blockMaskImageSrc() {
    return `${process.env.BASE_URL}img/block-mask.png`;
  }

  public get imageSrc() {
    return `${process.env.BASE_URL}img/${this.value.type}/${this.value.imageId}.png`;
  }

  public isHovering = false;

  public mounted() {
    this.cover.addEventListener('touchstart', this.handleMouseEnter);
  }

  public beforeDestroy() {
    this.cover.removeEventListener('touchstart', this.handleMouseEnter);
  }

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
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;

  .item__enchant {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url('../assets/enchanted_item_glint.png');
    background-size: 100px;
    background-color: #6a0dff;
    background-blend-mode: darken;
    mix-blend-mode: lighten;
    filter: brightness(1.6);
    animation: enchant-effect 5s linear infinite;
  }

  .item__cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    user-select: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  .item__qty {
    position: absolute;
    right: -1px;
    bottom: -2px;
    color: white;
    text-shadow: 1px 1px 0 black;
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
    filter: brightness(0.7);
  }

  .block__face--right {
    transform: translate(30px, 23px) rotateZ(64deg) scale(1, 1) skewY(26deg);
    filter: brightness(0.5);
  }

  .block__face--top {
    transform: translate(16px, -1.5px) scale(0.94) rotateZ(135deg) skew(18deg, 18deg);
  }
}

@keyframes enchant-effect {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -100px 100px;
  }
}
</style>
