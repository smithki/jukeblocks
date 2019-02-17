<template>
  <div class="component__background display-flex justifyContent-center alignItems-middle overflow-hidden padding-xl height-100vh">
    <img :src="imgSrc" class="height-75 jukebox-img" @click="start">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import svg from '../assets/images/jukebox.svg';
import { queue } from '../store/queue';

@Component({
  name: 'Background',
})
export default class Background extends Vue {
  get imgSrc() {
    return svg;
  }

  start() {
    queue.commit.setStart(true);
    queue.dispatch.next(true);
  }
}
</script>
