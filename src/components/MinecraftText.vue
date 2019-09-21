<template>
  <component
    :is="component"
    v-html="html"
  />
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Lib from 'minecraft-text-js';

@Component
export default class MinecraftText extends Vue {
  @Prop({ default: 'div' })
  public component!: string;

  @Prop({ default: '' })
  public value!: string;

  public get html() {
    return Lib.toHTML(`${this.value}`);
  }
}
</script>
