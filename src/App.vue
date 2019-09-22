<template>
  <div id="app">
    <!-- <h1>DreamCrafter Lottery Table</h1> -->
    <div
      class="app__lottery-tables"
    >
      <LotteryTable
        v-for="(lottery, id) in config.lotteries"
        :key="id"
        :value="lottery"
        :config-items="config.items"
        class="app__lottery-table"
      />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import LotteryTable from './components/LotteryTable.vue';

@Component({
  components: {
    LotteryTable,
  },
})
export default class App extends Vue {
  public config: Config = { items: {}, lotteries: {} };

  public async mounted() {
    const { data: config } = await axios.get<Config>('/config.json');
    this.config = config;
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: unifont;
  src: url(./assets/font/unifont-12.1.03.ttf);
}

* {
  box-sizing: border-box;
}

body {
  font-family: unifont, Arial, sans-serif;
  background-color: #202020;
}

#app {
  margin: 0 auto;
  max-width: 1200px;
  color: #ffffff;

  @media screen and (max-width: 1200px) {
    margin: 0 10px;
  }
}

.app__lottery-tables {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    justify-content: center;
  }
}

.app__lottery-table {
  margin: 0 10px;
}
</style>
