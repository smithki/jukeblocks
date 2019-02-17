<template>
  <div>
    <!-- <background></background> -->
    <current-song></current-song>
    <song-queue></song-queue>
    <button @click="add">Foo</button>
    <button @click="clear">Bar</button>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { jukebox } from '../store/jukebox';
import Background from './Background.vue';
import CurrentSong from './CurrentSong.vue';
import SongQueue from './SongQueue.vue';

@Component({
  name: 'VueApp',
  components: {
    Background,
    SongQueue,
    CurrentSong,
  },
})
export default class VueApp extends Vue {
  add() {
    jukebox.state.contract.appendSongToQueue(0);
  }

  clear() {
    jukebox.state.contract.clearSongQueue();
  }
}
</script>
