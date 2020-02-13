<template>
  <div id="app">
    
    <HeaderBar></HeaderBar>
    <MobileSection></MobileSection>
    <FooterBar></FooterBar>
  </div>
</template>

<script>

import HeaderBar from './components/HeaderBar.vue';
import MobileSection from './components/MobileSection.vue';
import FooterBar from './components/FooterBar.vue'


export default {
  name: 'app',
  components: {
    HeaderBar,
    MobileSection,
    FooterBar
  }
}
</script>

<style>
* {
  margin: 0;
  
}
#app{
  position: relative;
}
</style>
