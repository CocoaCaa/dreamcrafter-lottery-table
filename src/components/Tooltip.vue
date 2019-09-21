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
  @Ref()
  public refRoot!: HTMLDivElement;

  public style: Style = { top: '0', left: '0' };

  public mounted() {
    document.body.append(this.refRoot);
    document.body.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  public beforeDestroy() {
    document.body.removeEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  public handleMouseMove(ev: MouseEvent) {
    this.style.left = `${ev.pageX + 10}px`;
    this.style.top = `${ev.pageY - 20}px`;
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
}
</style>
