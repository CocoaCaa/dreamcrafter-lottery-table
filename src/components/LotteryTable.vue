<template>
  <div class="lottery-table">
    <div
      class="lottery-table__container"
    >
      <h2 class="lottery-table__title">Chest</h2>
      <div class="lottery-table__blocks">
        <div>
          <BlockItem
            v-for="i in new Array(9).fill(null)"
            :key="i"
            src="images/block/yellow_glazed_terracotta.png"
            class="lottery-table__block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockItem from './BlockItem.vue';

@Component({
  components: {
    BlockItem,
  }
})
export default class LotteryTable extends Vue {
  @Prop()
  public src!: string;
}
</script>

<style lang="scss">
.lottery-table {
  .lottery-table__container {
    width: 352px;
    height: 166px;
    background-image: url('../assets/gui/chest.png');
    padding: 6px 14px;
    box-sizing: border-box;
  }

  .lottery-table__title {
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: normal;
    font-size: 16px;
  }

  .lottery-table__blocks {
    box-sizing: border-box;
    position: relative;
    width: calc(100% + 4px);
    height: 108px;
    padding: 2px;
  }

  .lottery-table__block {
    margin-right: 4px;
    margin-bottom: 4px;
    min-width: 32px;
    min-height: 32px;
    float: left;
    clear: none;
  }
}
</style>
