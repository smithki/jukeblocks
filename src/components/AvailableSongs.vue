<template>
<div class="display-flex flexDirection-column padding-xl">
  <p class="margin-lg fontSize-lg textAlign-center">Available Songs</p>
  <div class="display-flex flexGrow-1 flexDirection-column justifyContent-middle">
    <div class="component__song-card display-flex justifyContent-spaceBetween" v-for="(asong, index) in asongs" :key="index">
      <div>
        <p>{{ asong.songName }}</p>
        <p>{{ asong.artist }}</p>
      </div>
      <button @click="addSongToQueue(index)">+</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import svg from '../assets/images/jukebox.svg';
import { getSongDetails, songDetailsMappings } from '../lib/song-details';
import { jukebox } from '../store/jukebox';
import { queue } from '../store/queue';
import { QueuedSongData, SongDetails } from '../types';

@Component({
  name: 'AvailableSongs',
})
export default class AvailableSongs extends Vue {
  get asongs() {
    return songDetailsMappings;
  }

  addSongToQueue(id: number) {
    jukebox.state.contract.appendSongToQueue(id);
  }
}
</script>
