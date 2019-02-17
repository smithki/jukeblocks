<template>
  <div
    class="display-flex flexDirection-column textAlign-center">
    <div v-for="qsong in qsongs" :key="qsong.timestampSecs">
      <p>{{qsong.song.id}}</p>
      <p>{{songDetails(qsong).artist}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import svg from '../assets/images/jukebox.svg';
import { AppManager } from '../lib/AppManager';
import { getSongDetails } from '../lib/song-details';
import { QueuedSongData, SongDetails } from '../types';

@Component({
  name: 'SongQueue',
})
export default class SongQueue extends Vue {
  public qsongs: QueuedSongData[] | null = null;

  mounted() {
    this.updateQueue();
    AppManager.contract.appendSongToQueue(0);
  }

  updateQueue() {
    AppManager.queue.refresh();
    this.qsongs = AppManager.queue.getQueue();
  }

  songDetails(songData: QueuedSongData): SongDetails {
    return getSongDetails(songData);
  }
}
</script>
