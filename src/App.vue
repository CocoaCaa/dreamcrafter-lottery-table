<template>
  <div id="app">
    <h1 class="app__title">
      <div
        class="app__container"
      >
        DreamCrafter <span class="title__lottery">抽抽樂</span> 一覧
      </div>
    </h1>
    <div
      class="app__container"
    >
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
    <div class="app__updating">更多資訊更新中...</div>
    <footer>
      <p>抽抽樂 is owned by &copy;DREAMCRAFTER <a href="https://www.letsdream.today">https://www.letsdream.today</a></p>
      <p>dreamcrafter-lottery-table site is develop by <a href="https://github.com/minixzy">@minixz</a></p>
    </footer>
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
  background-color: #303030;
  color: #ffffff;
}

.app__title {
  font-size: 30px;
  margin: 0 0 10px 0;
  padding: 20px 0;
  background-color: #000;
}

.app__container {
  margin: 0 auto;
  max-width: 1200px;
  @media screen and (max-width: 1200px) {
    margin: 0 10px;
  }
}

.title__lottery {
  background-color: #ffff00;
  color: #ff0000;
  padding: 3px 2px;
  font-weight: bold;
}

.app__lottery-tables {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -10px;

  @media screen and (max-width: 780px) {
    justify-content: center;
  }
}

.app__lottery-table {
  margin: 0 10px;
}

.app__updating {
  text-align: center;
  color: #7a7a7a;
  margin: 30px 0;
}

footer {
  text-align: center;
  color: #7a7a7a;
}

a {
  color: #b8b8b8;
  text-decoration: none;

  &:hover {
    color: #fe4641;
  }
}
</style>
