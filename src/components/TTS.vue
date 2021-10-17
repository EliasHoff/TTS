<template>
    <md-card>
        <md-card-header class="md-title md-with-hover md-ripple">Text to Speech</md-card-header>
        <md-field class="ttsField">
          <label for="language">Language</label>
            <md-select v-model="lang" name="language" id="language" placeholder="Language">
              <md-option value="en-US" default>English</md-option>
              <md-option value="de-DE">Deutsch</md-option>
              <md-option value="ja-JP">Japanese</md-option>
            </md-select>
          <md-input class="ttsInput" v-model="message" type="text" placeholder="What to say ...?" v-on:keyup.enter="testSpeak"></md-input>
          <md-button class="md-dense md-raised md-primary" @click="testSpeak"> Speak </md-button>
        </md-field>
    </md-card>
</template>

<script>
export default {
  name: 'TTS',
  data () {
    return {
        message: "",
        lang: 'en-US',
    }
  },
  methods: {
    testSpeak(){
        let utterance = new SpeechSynthesisUtterance(this.message);
        utterance.lang = this.lang;
        speechSynthesis.speak(utterance);
    }
  }
}
</script>

<style>
    .ttsField {
        margin: 20px;
        padding: 10px;
    }
    .ttsInput {
        margin: 5px;
    }
</style>