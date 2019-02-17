<template>
  <div class="display-flex justifyContent-center overflow-hidden padding-xl">
    <img :src="albumCover" style="width: 15rem;">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import defaultCover from '../assets/images/album-covers/default.jpg';
import { getSongDetails } from '../lib/song-details';
import { QueuedSongData } from '../types';

@Component({
  name: 'CurrentSong',
})
export default class CurrentSong extends Vue {
  // get currentSong(): QueuedSongData {
  //   return AppManager.queue.getCurrentSong();
  // }
  // get albumCover() {
  //   if (this.currentSong) return getSongDetails(this.currentSong).cover;
  //   return defaultCover;
  // }
}
</script>
