<template>
  <div class="backgroundColor-lightMg" :class="{ 'grid-main': start }">
    <background v-if="!start" class="backgroundColor-lightFg"></background>
    <current-song class="area-left backgroundColor-lightFg" v-show="start"></current-song>
    <song-queue class="area-center backgroundColor-lightFg" v-show="start"></song-queue>
    <available-songs class="area-right backgroundColor-lightFg" v-show="start"></available-songs>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { jukebox } from '../store/jukebox';
import { queue } from '../store/queue';
import AvailableSongs from './AvailableSongs.vue';
import Background from './Background.vue';
import CurrentSong from './CurrentSong.vue';
import SongQueue from './SongQueue.vue';

@Component({
  name: 'VueApp',
  components: {
    Background,
    SongQueue,
    CurrentSong,
    AvailableSongs,
  },
})
export default class VueApp extends Vue {
  add() {
    jukebox.state.contract.appendSongToQueue(0);
  }

  clear() {
    jukebox.state.contract.clearSongQueue();
  }

  get start() {
    return queue.state.start;
  }
}
</script>
