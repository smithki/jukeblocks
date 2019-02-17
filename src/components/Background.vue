<template>
  <div class="display-flex justifyContent-center overflow-hidden padding-xl">
    <img :src="imgSrc" class="width-80">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import svg from '../assets/images/jukebox.svg';

@Component({
  name: 'Background',
})
export default class Background extends Vue {
  get imgSrc() {
    return svg;
  }
}
</script>
