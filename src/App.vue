<template>
  <div id="app">
    <h1 class="app__title">
      <div
        class="app__container app__container--flex"
      >
        <div>
          <a href="https://www.letsdream.today/" target="_blank" rel="noopener">DreamCrafter</a> <span class="title__lottery">抽抽樂</span> 一覧
        </div>
        <github-button
          href="https://github.com/minixz/dreamcrafter-lottery-table"
          data-show-count="true"
          aria-label="Star minixz/dreamcrafter-lottery-table on GitHub"
          class="app__github-star-button"
        >
          Star
        </github-button>
      </div>
    </h1>
    <div
      class="app__container"
    >
      <div
        v-for="(lotteryGroup, idx) in config.lotteryGroups"
        :key="idx"
        class="app__lottery-groups"
      >
        <h2>{{lotteryGroup.title}}</h2>
        <div class="app__lottery-tables">
          <LotteryTable
            v-for="lotteryId in lotteryGroup.lotteries"
            :key="lotteryId"
            :value="config.lotteries[lotteryId]"
            :config-items="config.items"
            class="app__lottery-table"
          />
        </div>
      </div>
    </div>
    <div class="app__updating">更多資訊更新中...</div>
    <footer>
      <p>
        <a href="https://www.minecraft.net">Minecraft</a> is copyright Mojang AB / Microsoft and is not affiliated with this site.
      </p>
      <p>抽抽樂 is owned by &copy; DREAMCRAFTER <a href="https://www.letsdream.today">https://www.letsdream.today</a></p>
      <p>dreamcrafter-lottery-table site is develop by <a target="_blank" href="https://github.com/minixz">@minixz</a></p>
    </footer>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import GithubButton from 'vue-github-button';
import { Component, Vue } from 'vue-property-decorator';
import LotteryTable from './components/LotteryTable.vue';

@Component({
  components: {
    LotteryTable,
    GithubButton,
  },
})
export default class App extends Vue {
  public config: Config = { items: {}, lotteries: {} };

  public async mounted() {
    const { data: config } = await axios.get<Config>(`${process.env.BASE_URL}config.json`);
    this.config = config;
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: unifont;
  font-display: swap;
  src: url(./assets/font/unifont-12.1.03.woff2);
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

  > .app__container {
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }
}

.app__github-star-button {
  margin-left: auto;
}

.app__container {
  margin: 0 auto;
  max-width: 1200px;
  @media screen and (max-width: 1200px) {
    margin: 0 10px;
  }
}

.app__container--flex {
  display: flex;
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
  margin: 0 -10px;

  @media screen and (max-width: 1140px) {
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
  padding-bottom: 50px;

  > p {
    margin: 5px 0;
  }
}

a {
  color: #b8b8b8;
  text-decoration: none;

  &:hover {
    color: #ffad6a;
  }
}
</style>
