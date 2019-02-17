<template>
  <div>
    <!-- <background></background> -->
    <current-song></current-song>
    <song-queue></song-queue>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

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
export default class VueApp extends Vue {}
</script>
