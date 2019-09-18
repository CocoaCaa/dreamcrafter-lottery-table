<template>
  <div id="app">
    <h1>DreamCrafter Lottery Table</h1>
    <BlockItem
      src="images/block/yellow_glazed_terracotta.png"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlockItem from './components/BlockItem.vue';

@Component({
  components: {
    BlockItem,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
