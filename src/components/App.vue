<template>
  <div>
    <md-app-toolbar class="md-primary">
      <div class="md-layout-item md-title">Quenteam 19.7</div>
    </md-app-toolbar>
    <TTS />
    <STT /> 
  </div>
</template>

<script>
import TTS from './TTS.vue';
import STT from './STT.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    TTS,
    STT 
  },
}
</script>

<style>
</style>
