<template>
  <div id="app">
    <!-- <h1>DreamCrafter Lottery Table</h1> -->
    <LotteryTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LotteryTable from './components/LotteryTable.vue';

@Component({
  components: {
    LotteryTable,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
