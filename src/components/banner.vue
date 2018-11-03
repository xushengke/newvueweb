<template>
  <div class="container-fluid banner">
    <img class="col-md-2 col-sm-3 col-5" src="../assets/images/logonew.svg" alt="logo" >
    <div id="element">
      {{str2}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      str: 'I am a Front-end Developer',
      i: 0,
      timer: 0,
      str2: "",
    }
  },
  methods: {
    typing() {
      if (this.i <= this.str.length) {
            this.str2 = this.str.slice(0, this.i++);
            this.timer = setTimeout(() => {this.typing();}, 200);
        } else {
            clearTimeout(this.timer)
          }
        }

  },
  mounted(){
    this.typing();
  }
}
</script>

<style scoped>
.container-fluid{
overflow: hidden;
height: 100vh;
}
.banner{
  background: url(../assets/images/leaf.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  background-color: black;
  animation: bcg 28s infinite ease;
	-webkit-animation: bcg 28s infinite ease;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
}
/* custom animation */
@keyframes bcg {
  0% {background-size: 100%;}
  70% {background-size: 85%;}
  100% {background-size: 100%;}
}
@-webkit-keyframes bcg {
  0% {background-size: 100%;}
  50% {background-size: 75%;}
  100% {background-size: 100%;}
}
#element{
  font-size: 20px;
  margin-top: 50px;
  color: white;
}
</style>
