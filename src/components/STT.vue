<template>
    <md-card>
        <md-card-header class="md-title md-with-hover md-ripple">Speech to Text</md-card-header>
       
        <md-field class="sttField">
          <label for="language">Language</label>
            <md-select v-model="lang" name="language" id="language" placeholder="Language">
              <md-option value="en-US" default>English</md-option>
              <md-option value="de-DE">Deutsch</md-option>
              <md-option value="ja-JP">Japanese</md-option>
            </md-select>
          <label for="language2">Language</label>
            <md-select v-model="lang2" name="language2" id="language2" placeholder="Language to">
              <md-option value="en-US" default>English</md-option>
              <md-option value="de">Deutsch</md-option>
              <md-option value="ja-JP">Japanese</md-option>
            </md-select>
          <md-button class="md-dense md-raised md-primary" @click="bgColor"> Record </md-button>
        </md-field>
        <h1>Input: {{ input }}</h1>
    </md-card>
  </template>

<script>
export default {
  name: 'STT',
  data () {
    return {
        lang: 'en-US',
        lang2: 'de',
        input: '',
        output: '',
    }
  },
  methods: {
    bgColor() {
      var sis = this;
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
      var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
      var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

      var recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      recognition.continuous = false;
      recognition.lang = this.lang;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

        recognition.start();
        console.log('Ready to receive a color command.');


      recognition.onresult = function(event) {
        sis.input = event.results[0][0].transcript;
        console.log(event.results[0][0].transcript);
        console.log("thanks")
      }

      recognition.onspeechend = function() {
        recognition.stop();
      }

      recognition.onnomatch = function(event) {
        // diagnostic.textContent = "I didn't recognise that color.";
        console.log("FAIL");
      }

      recognition.onerror = function(event) {
        // diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
        console.log("FAIL MORE");
      }
    },

    testSpeak(){
      let utterance = new SpeechSynthesisUtterance(this.input);
      utterance.lang = this.lang2;
      speechSynthesis.speak(utterance);
    }
          
    },
}
</script>

<style>
</style>