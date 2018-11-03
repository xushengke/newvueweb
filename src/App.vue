<template>
  <div id="container">
    <app-header></app-header>
    <app-banner id="banner"></app-banner>
    <app-skill id="skills"></app-skill>
    <app-resume id="resume"></app-resume>
    <app-work id="work"></app-work>
    <app-contact id="contact"></app-contact>
  </div>
</template>

<script>
import header from './components/header.vue';
import banner from './components/banner.vue';
import skill from './components/skill.vue';
import resume from './components/resume.vue';
import work from './components/work.vue';
import contact from './components/contact.vue'

export default {
  components: {
    'app-header': header,
    'app-banner': banner,
    'app-skill': skill,
    'app-resume': resume,
    'app-work': work,
    'app-contact': contact
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
div.modal div.modal-backdrop {
    z-index: 0;
}
</style>
