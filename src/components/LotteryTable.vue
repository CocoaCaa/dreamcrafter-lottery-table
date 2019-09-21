<template>
  <div class="lottery-table">
    <div
      class="lottery-table__container"
    >
      <h2 class="lottery-table__title">
        <MinecraftText :value="value.title" />
      </h2>
      <div class="lottery-table__blocks">
        <Item
          v-for="(lotteryItem, idx) in value.items"
          :key="idx"
          :value="configItems[lotteryItem.id]"
          :qty="lotteryItem.qty"
          class="lottery-table__block"
        />
      </div>
    </div>
    <div
      class="lottery-table__exchange-table"
    >
      <div class="exchange-table__title">鑰匙</div>
      <div class="exchange-table__container">
        <div class="exchange-table__key">
          <Item
            :value="configItems[value.key]"
          />
          <span class="exchange-table__plus">=</span>
        </div>
        <ul
          class="exchange-table__list"
        >
          <li
            v-for="(keyExchange, idx) in value.keyExchanges"
            :key="idx"
          >
            <div
              v-for="(item, itemIdx) in keyExchange"
              :key="`item-${itemIdx}`"
              class="exchange-table__item"
            >
              <Item
                :value="configItems[item.id]"
              />
              <span class="exchange-table__plus">+</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from './Item.vue';
import MinecraftText from './MinecraftText.vue';

@Component({
  components: {
    Item,
    MinecraftText,
  }
})
export default class LotteryTable extends Vue {
  @Prop({ required: true })
  public value!: ConfigLottery;

  @Prop({ required: true })
  public configItems!: ConfigItems;
}
</script>

<style lang="scss">
.lottery-table {
  .lottery-table__container {
    width: 352px;
    height: 166px;
    background-image: url('../assets/gui/chest.png');
    padding: 6px 14px;
  }

  .lottery-table__title {
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: normal;
    font-size: 16px;
    height: 18px;
  }

  .lottery-table__blocks {
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

  .lottery-table__exchange-table {
    margin: 15px 0;
  }

  .exchange-table__title {
    margin-bottom: 10px;
  }

  .exchange-table__key {
    display: flex;
    align-items: center;
  }

  .exchange-table__container {
    display: flex;
    align-items: flex-start;
  }

  .exchange-table__list {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .exchange-table__item {
    display: inline-flex;
    align-items: center;

    &:last-child {
      .exchange-table__plus {
        display: none;
      }
    }
  }

  .exchange-table__plus {
    font-size: 30px;
    margin: 0 10px;
  }
}
</style>
