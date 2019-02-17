<template>
<div class="display-flex flexDirection-column padding-xl">
  <div class="textAlign-center">
    <span class="margin-lg fontSize-lg textAlign-center">Queue</span>
    <button @click="clearQueue()">Clear</button>
  </div>
  <div class="display-flex flexGrow-1 flexDirection-column justifyContent-middle">
    <div class="component__song-card" v-for="qsong in qsongs" :key="qsong.song.id">
      <p>{{ songDetails(qsong).songName }}</p>
      <p>{{ songDetails(qsong).artist }}</p>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import svg from '../assets/images/jukebox.svg';
import { getSongDetails } from '../lib/song-details';
import { jukebox } from '../store/jukebox';
import { queue } from '../store/queue';
import { QueuedSongData, SongDetails } from '../types';

@Component({
  name: 'SongQueue',
})
export default class SongQueue extends Vue {
  get qsongs() {
    return queue.state.songs;
  }

  songDetails(song: QueuedSongData) {
    return getSongDetails(song);
  }

  clearQueue() {
    jukebox.state.contract.clearSongQueue();
  }
}
</script>
