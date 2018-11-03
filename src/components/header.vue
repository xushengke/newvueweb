<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Scott's Portfolio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" v-scroll-to="'#banner'" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-scroll-to="'#skills'" href="#">Skill</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-scroll-to="'#resume'" href="#">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-scroll-to="'#work'" href="#">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-scroll-to="'#contact'" href="#">Contact</a>
        </li>
      </ul>
      <span class="navbar-text">
        Hello, this is Scott's portfolio website.
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-default{
  z-index: 1030;
}
.navbar-text{
  color: rgb(64, 207, 185);
}
</style>
