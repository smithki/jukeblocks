<template>
  <div>
    <!-- <background></background> -->
    <song-queue></song-queue>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Background from './Background.vue';
import SongQueue from './SongQueue.vue';

@Component({
  name: 'VueApp',
  components: {
    Background,
    SongQueue,
  },
})
export default class VueApp extends Vue {}
</script>
