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
      :style="{ 'mask-image': `url(${value.type === 'item' ? imageSrc : '/images/block-mask.png'})` }"
    />
    <div v-if="qty > 1" class="item__qty">{{qty}}</div>
    <div
      class="item__cover"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    />
    <Tooltip
      v-if="isHovering"
    >
      <MinecraftText :value="value.name" />
      <MinecraftText v-if="value.lore" style="margin-top: 10px;" :value="value.lore" />
    </Tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
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

  public get imageSrc() {
    return `/images/${this.value.type}/${this.value.imageId}.png`;
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
    background-image: url(../assets/enchanted_item_glint.png);
    background-size: 300%;
    background-color: #dd20ff;
    background-blend-mode: darken;
    mix-blend-mode: lighten;
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
    background-position: 200% 0%;
  }
}
</style>
