<template>
  <div class="display-flex flexDirection-column justifyContent-center overflow-hidden padding-xl">
    <img :src="albumCover" style="width: 15rem;">
    <p v-if="currentSong">{{ currentSongDetails.songName }}</p>
    <p v-else>...</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import defaultCover from '../assets/images/album-covers/default.jpg';
import { getSongDetails } from '../lib/song-details';
import { queue } from '../store/queue';
import { QueuedSongData, SongDetails } from '../types';

@Component({
  name: 'CurrentSong',
})
export default class CurrentSong extends Vue {
  get currentSong(): QueuedSongData {
    return queue.getters.currentSong;
  }

  get currentSongDetails(): SongDetails {
    return queue.getters.getCurrentSongDetails();
  }

  get albumCover() {
    if (this.currentSong) return this.currentSongDetails.cover;
    return defaultCover;
  }
}
</script>
