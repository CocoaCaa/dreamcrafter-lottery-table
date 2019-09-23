<template>
  <div
    class="tooltip"
    ref="refRoot"
    :style="style"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator';

interface Style {
  top: string;
  left: string;
}

@Component
export default class Tooltip extends Vue {
  @Prop({ default: () => ({ x: 0, y: 0 }) })
  public initPosition!: { x: number, y: number };

  @Ref()
  public refRoot!: HTMLDivElement;

  public style: Style = { top: '0', left: '0' };

  public mounted() {
    document.body.append(this.refRoot);
    document.body.addEventListener('mousemove', this.handleMouseMove);
    document.body.addEventListener('touchstart', () => this.$emit('request-close'));
    this.setPosition(this.initPosition.x, this.initPosition.y);
  }

  public beforeDestroy() {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
  }

  public handleMouseMove(ev: MouseEvent) {
    this.setPosition(ev.pageX, ev.pageY);
  }

  private setPosition(sourceX: number, sourceY: number) {
    let x = sourceX + 10;
    if (x + this.refRoot.clientWidth > document.body.clientWidth) {
      x = sourceX - this.refRoot.clientWidth - 10;
    }
    if (x - this.refRoot.clientWidth < 0) {
      x = 0;
    }
    this.style.left = `${x}px`;
    this.style.top = `${sourceY - 20}px`;
  }
}
</script>

<style lang="scss">
.tooltip {
  position: absolute;
  padding: 1px 6px;
  border: 1px solid transparent;
  border-image: url('../assets/gui/tooltips.png') 4 / 4px / 4px round($number: 0);
  background-color: rgba(0, 0, 0, 0.9);
  pointer-events: none;
  color: white;
  line-height: 1.3;
  white-space: nowrap;

  @media screen and (max-width: 480px) {
    white-space: inherit;
    max-width: 100vw;
  }
}
</style>
